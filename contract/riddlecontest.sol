// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IAIOracle} from "./IAIOracle.sol";
import {AIOracleCallbackReceiver} from "./AIOracleCallbackReceiver.sol";

/// @notice Theme contest contract with AI scoring integration
contract ThemeContest is AIOracleCallbackReceiver {
    string public theme;
    uint256 public entryCost;
    uint256 public scoreToWin;
    uint256 public prizePool;
    address public winner;
    address public owner;

    event ContestEntered(address participant, uint256 requestId);
    event PrizeClaimed(address winner, uint256 prize);
    event AIResult(uint256 requestId, address participant, uint256 score);

    struct AIOracleRequest {
        address sender;
        uint256 modelId;
        bytes input;
        bytes output;
        uint256 score;
    }
    /// @dev modelId => callback gasLimit
    mapping(uint256 => uint64) public callbackGasLimit;
    mapping(uint256 => AIOracleRequest) public requests;
    mapping(address => uint256) score;
    mapping(address => bool) hasDeposited;
    mapping(address => bool) public hasEntered;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    modifier noWinnerYet() {
        require(winner == address(0), "Winner already claimed");
        _;
    }

    /// @notice Constructor to initialize the contest
    /// @param _aiOracle The AI oracle contract address
    /// @param _theme The theme of the contest
    /// @param _entryCost The cost of entry in wei
    /// @param _scoreToWin The score needed to win
    constructor(
        IAIOracle _aiOracle,
        string memory _theme,
        uint256 _entryCost,
        uint256 _scoreToWin
    ) AIOracleCallbackReceiver(_aiOracle) {
        // Set default gas limits for AI models (customize as needed)
        callbackGasLimit[50] = 500_000; // Stable Diffusion
        callbackGasLimit[11] = 5_000_000; // Llama
        owner = msg.sender;
        theme = _theme;
        entryCost = _entryCost;
        scoreToWin = _scoreToWin;
    }

    function Score(address player) public view returns (uint256) {
        return score[player];
    }
    function deposit() external payable {
        require(msg.value >= entryCost, "Insufficient entry cost");
        prizePool += msg.value;
        hasDeposited[msg.sender] = true;
    }
    /// @notice Allows participants to enter the contest
    /// @param modelId The AI model ID to use for scoring
    /// @param answer The URL of the participant's submission
    //modelId=11
    function enterContest(
        uint256 modelId,
        string calldata answer
    ) external payable noWinnerYet returns (uint256) {
        // Create the AI prompt
        require(hasDeposited[msg.sender], "need to deposit first");
        require(!hasEntered[msg.sender], "Already entered the contest");

        string memory prompt = string(
            abi.encodePacked(
                "Riddle: speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? ",
                "\n",
                "riddle answer: ",
                answer,
                "\n",
                "Task: check this answer with given riddle\n",
                "Scale: 1 to 10\n",
                "Instructions: give score directly dont explain anything (correct-give score 10), somewhat correct(give score-5) "
            )
        );
        bytes memory input = bytes(prompt);

        // Request a score from the AI Oracle
        uint256 requestId = aiOracle.requestCallback{value: msg.value}(
            modelId,
            input,
            address(this),
            callbackGasLimit[modelId],
            ""
        );

        // Store request details
        AIOracleRequest storage request = requests[requestId];
        request.sender = msg.sender;
        request.modelId = modelId;
        request.input = input;
        hasEntered[msg.sender] = true;
        emit ContestEntered(msg.sender, requestId);
        return requestId;
    }

    /// @notice Callback function for AI Oracle to provide results
    function aiOracleCallback(
        uint256 requestId,
        bytes calldata output,
        bytes calldata callbackData
    ) external onlyAIOracleCallback {
        AIOracleRequest storage request = requests[requestId];
        require(request.sender != address(0), "Invalid request");

        // Decode the score from the AI response
        uint256 scored = parseScore(output);
        request.output = output;
        request.score = scored;

        emit AIResult(requestId, request.sender, scored);
        // Check if the participant has won
        if (scored >= scoreToWin && winner == address(0)) {
            winner = request.sender;
        }
    }

    /// @notice Allows the winner to claim the prize pool
    function claimPrize() external noWinnerYet {
        require(msg.sender == winner, "Not the winner");
        uint256 prize = prizePool;
        prizePool = 0;
        winner = address(0);

        (bool success, ) = msg.sender.call{value: prize}("");
        require(success, "Transfer failed");

        emit PrizeClaimed(msg.sender, prize);
    }

    /// @notice Helper function to parse the AI response into a score
    function parseScore(bytes memory output) internal pure returns (uint256) {
        return (uint256(keccak256(output)) % 10) + 1; // Mock parsing logic
    }

    /// @notice Estimating fee for AI Oracle
    function estimateFee(uint256 modelId) public view returns (uint256) {
        return aiOracle.estimateFee(modelId, callbackGasLimit[modelId]);
    }
}
