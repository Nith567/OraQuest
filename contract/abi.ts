export const chainQuestContract = {
  abi: [
    {
      inputs: [
        {
          internalType: "contract IAIOracle",
          name: "_aiOracle",
          type: "address",
        },
        {
          internalType: "string",
          name: "_theme",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_entryCost",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_scoreToWin",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "contract IAIOracle",
          name: "expected",
          type: "address",
        },
        {
          internalType: "contract IAIOracle",
          name: "found",
          type: "address",
        },
      ],
      name: "UnauthorizedCallbackSource",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "requestId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "participant",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "score",
          type: "uint256",
        },
      ],
      name: "AIResult",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "participant",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "requestId",
          type: "uint256",
        },
      ],
      name: "ContestEntered",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "winner",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "prize",
          type: "uint256",
        },
      ],
      name: "PrizeClaimed",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "player",
          type: "address",
        },
      ],
      name: "Score",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "aiOracle",
      outputs: [
        {
          internalType: "contract IAIOracle",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "requestId",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "output",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "callbackData",
          type: "bytes",
        },
      ],
      name: "aiOracleCallback",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "callbackGasLimit",
      outputs: [
        {
          internalType: "uint64",
          name: "",
          type: "uint64",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "claimPrize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "deposit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "modelId",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "photoUrl",
          type: "string",
        },
      ],
      name: "enterContest",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "entryCost",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "modelId",
          type: "uint256",
        },
      ],
      name: "estimateFee",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "prizePool",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "requests",
      outputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "modelId",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "input",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "output",
          type: "bytes",
        },
        {
          internalType: "uint256",
          name: "score",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "scoreToWin",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "theme",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "winner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  bytecode:
    "60a060405234801562000010575f80fd5b50604051620028823803806200288283398181016040528101906200003691906200037c565b838073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050506207a12060065f603281526020019081526020015f205f6101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550624c4b4060065f600b81526020019081526020015f205f6101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055503360055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550825f908162000132919062000638565b508160018190555080600281905550505050506200071c565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f62000187826200015c565b9050919050565b5f6200019a826200017b565b9050919050565b620001ac816200018e565b8114620001b7575f80fd5b50565b5f81519050620001ca81620001a1565b92915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6200022082620001d8565b810181811067ffffffffffffffff82111715620002425762000241620001e8565b5b80604052505050565b5f620002566200014b565b905062000264828262000215565b919050565b5f67ffffffffffffffff821115620002865762000285620001e8565b5b6200029182620001d8565b9050602081019050919050565b5f5b83811015620002bd578082015181840152602081019050620002a0565b5f8484015250505050565b5f620002de620002d88462000269565b6200024b565b905082815260208101848484011115620002fd57620002fc620001d4565b5b6200030a8482856200029e565b509392505050565b5f82601f830112620003295762000328620001d0565b5b81516200033b848260208601620002c8565b91505092915050565b5f819050919050565b620003588162000344565b811462000363575f80fd5b50565b5f8151905062000376816200034d565b92915050565b5f805f806080858703121562000397576200039662000154565b5b5f620003a687828801620001ba565b945050602085015167ffffffffffffffff811115620003ca57620003c962000158565b5b620003d88782880162000312565b9350506040620003eb8782880162000366565b9250506060620003fe8782880162000366565b91505092959194509250565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806200045957607f821691505b6020821081036200046f576200046e62000414565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302620004d37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000496565b620004df868362000496565b95508019841693508086168417925050509392505050565b5f819050919050565b5f620005206200051a620005148462000344565b620004f7565b62000344565b9050919050565b5f819050919050565b6200053b8362000500565b620005536200054a8262000527565b848454620004a2565b825550505050565b5f90565b620005696200055b565b6200057681848462000530565b505050565b5b818110156200059d57620005915f826200055f565b6001810190506200057c565b5050565b601f821115620005ec57620005b68162000475565b620005c18462000487565b81016020851015620005d1578190505b620005e9620005e08562000487565b8301826200057b565b50505b505050565b5f82821c905092915050565b5f6200060e5f1984600802620005f1565b1980831691505092915050565b5f620006288383620005fd565b9150826002028217905092915050565b62000643826200040a565b67ffffffffffffffff8111156200065f576200065e620001e8565b5b6200066b825462000441565b62000678828285620005a1565b5f60209050601f831160018114620006ae575f841562000699578287015190505b620006a585826200061b565b86555062000714565b601f198416620006be8662000475565b5f5b82811015620006e757848901518255600182019150602085019450602081019050620006c0565b8683101562000707578489015162000703601f891682620005fd565b8355505b6001600288020188555050505b505050505050565b608051612131620007515f395f8181610380015281816104f30152818161065c01528181610f250152610f7801526121315ff3fe6080604052600436106100e7575f3560e01c806381d12c5811610089578063b7e29b9a11610058578063b7e29b9a146102e3578063d0e30db01461031f578063dfbf53ae14610329578063e79a479614610353576100e7565b806381d12c58146102275780638da5cb5b14610267578063ae42ced614610291578063b0347814146102bb576100e7565b806331b221cd116100c557806331b221cd1461018d57806335538189146101b757806370740ac9146101e7578063719ce73e146101fd576100e7565b8063127e8e4d146100eb5780631df028281461012757806320f3871814610151575b5f80fd5b3480156100f6575f80fd5b50610111600480360381019061010c919061103d565b61037d565b60405161011e9190611077565b60405180910390f35b348015610132575f80fd5b5061013b610442565b604051610148919061111a565b60405180910390f35b34801561015c575f80fd5b506101776004803603810190610172919061103d565b6104cd565b604051610184919061115c565b60405180910390f35b348015610198575f80fd5b506101a16104f1565b6040516101ae91906111ef565b60405180910390f35b6101d160048036038101906101cc9190611269565b610515565b6040516101de9190611077565b60405180910390f35b3480156101f2575f80fd5b506101fb6107d8565b005b348015610208575f80fd5b50610211610a28565b60405161021e9190611077565b60405180910390f35b348015610232575f80fd5b5061024d6004803603810190610248919061103d565b610a2e565b60405161025e959493929190611338565b60405180910390f35b348015610272575f80fd5b5061027b610b8b565b6040516102889190611397565b60405180910390f35b34801561029c575f80fd5b506102a5610bb0565b6040516102b29190611077565b60405180910390f35b3480156102c6575f80fd5b506102e160048036038101906102dc9190611405565b610bb6565b005b3480156102ee575f80fd5b50610309600480360381019061030491906114c0565b610dfa565b6040516103169190611077565b60405180910390f35b610327610e40565b005b348015610334575f80fd5b5061033d610ef4565b60405161034a9190611397565b60405180910390f35b34801561035e575f80fd5b50610367610f19565b6040516103749190611077565b60405180910390f35b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1662e1d8d08360065f8681526020019081526020015f205f9054906101000a900467ffffffffffffffff166040518363ffffffff1660e01b81526004016103fc92919061151b565b602060405180830381865afa158015610417573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061043b9190611556565b9050919050565b5f805461044e906115ae565b80601f016020809104026020016040519081016040528092919081815260200182805461047a906115ae565b80156104c55780601f1061049c576101008083540402835291602001916104c5565b820191905f5260205f20905b8154815290600101906020018083116104a857829003601f168201915b505050505081565b6006602052805f5260405f205f915054906101000a900467ffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f8073ffffffffffffffffffffffffffffffffffffffff1660045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146105a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059c90611628565b60405180910390fd5b60095f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff1661062e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062590611690565b60405180910390fd5b5f80848460405160200161064493929190611984565b60405160208183030381529060405290505f8190505f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635b9538063489853060065f8e81526020019081526020015f205f9054906101000a900467ffffffffffffffff166040518663ffffffff1660e01b81526004016106de9493929190611a19565b60206040518083038185885af11580156106fa573d5f803e3d5ffd5b50505050506040513d601f19601f8201168201806040525081019061071f9190611556565b90505f60075f8381526020019081526020015f20905033815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550878160010181905550828160020190816107909190611c37565b507fd50f317f4e4ae1f4b4b8c5beaef0d8a27641dd5c1dbdbc8a42fd7e1be3cb322e33836040516107c2929190611d06565b60405180910390a1819450505050509392505050565b5f73ffffffffffffffffffffffffffffffffffffffff1660045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610867576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085e90611628565b60405180910390fd5b60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ed90611d77565b60405180910390fd5b5f60035490505f6003819055505f60045f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f3373ffffffffffffffffffffffffffffffffffffffff168260405161096890611dbf565b5f6040518083038185875af1925050503d805f81146109a2576040519150601f19603f3d011682016040523d82523d5f602084013e6109a7565b606091505b50509050806109eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e290611e1d565b60405180910390fd5b7f95681e512bc0fe659e195e06c283eada494316f3d801213e48e7101af92bf7703383604051610a1c929190611d06565b60405180910390a15050565b60035481565b6007602052805f5260405f205f91509050805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806002018054610a78906115ae565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa4906115ae565b8015610aef5780601f10610ac657610100808354040283529160200191610aef565b820191905f5260205f20905b815481529060010190602001808311610ad257829003601f168201915b505050505090806003018054610b04906115ae565b80601f0160208091040260200160405190810160405280929190818152602001828054610b30906115ae565b8015610b7b5780601f10610b5257610100808354040283529160200191610b7b565b820191905f5260205f20905b815481529060010190602001808311610b5e57829003601f168201915b5050505050908060040154905085565b60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b610bbe610f1f565b5f60075f8781526020019081526020015f2090505f73ffffffffffffffffffffffffffffffffffffffff16815f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610c62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5990611e85565b60405180910390fd5b5f610caf86868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f82011690508083019250505050505050610fd8565b90508585836003019182610cc4929190611ead565b508082600401819055507f977209b53b0db4a9dcd615a2edce49ccf8fa91f39e909d5ee5662e7507cdc85d87835f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683604051610d2393929190611f7a565b60405180910390a16002548110158015610d8957505f73ffffffffffffffffffffffffffffffffffffffff1660045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15610df157815f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660045f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50505050505050565b5f60085f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b600154341015610e85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7c90611ff9565b60405180910390fd5b3460035f828254610e969190612044565b92505081905550600160095f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550565b60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b5f3390507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610fd5577f0000000000000000000000000000000000000000000000000000000000000000816040517f865c066e000000000000000000000000000000000000000000000000000000008152600401610fcc929190612077565b60405180910390fd5b50565b5f6001600a83805190602001205f1c610ff191906120cb565b610ffb9190612044565b9050919050565b5f80fd5b5f80fd5b5f819050919050565b61101c8161100a565b8114611026575f80fd5b50565b5f8135905061103781611013565b92915050565b5f6020828403121561105257611051611002565b5b5f61105f84828501611029565b91505092915050565b6110718161100a565b82525050565b5f60208201905061108a5f830184611068565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f5b838110156110c75780820151818401526020810190506110ac565b5f8484015250505050565b5f601f19601f8301169050919050565b5f6110ec82611090565b6110f6818561109a565b93506111068185602086016110aa565b61110f816110d2565b840191505092915050565b5f6020820190508181035f83015261113281846110e2565b905092915050565b5f67ffffffffffffffff82169050919050565b6111568161113a565b82525050565b5f60208201905061116f5f83018461114d565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f819050919050565b5f6111b76111b26111ad84611175565b611194565b611175565b9050919050565b5f6111c88261119d565b9050919050565b5f6111d9826111be565b9050919050565b6111e9816111cf565b82525050565b5f6020820190506112025f8301846111e0565b92915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f84011261122957611228611208565b5b8235905067ffffffffffffffff8111156112465761124561120c565b5b60208301915083600182028301111561126257611261611210565b5b9250929050565b5f805f604084860312156112805761127f611002565b5b5f61128d86828701611029565b935050602084013567ffffffffffffffff8111156112ae576112ad611006565b5b6112ba86828701611214565b92509250509250925092565b5f6112d082611175565b9050919050565b6112e0816112c6565b82525050565b5f81519050919050565b5f82825260208201905092915050565b5f61130a826112e6565b61131481856112f0565b93506113248185602086016110aa565b61132d816110d2565b840191505092915050565b5f60a08201905061134b5f8301886112d7565b6113586020830187611068565b818103604083015261136a8186611300565b9050818103606083015261137e8185611300565b905061138d6080830184611068565b9695505050505050565b5f6020820190506113aa5f8301846112d7565b92915050565b5f8083601f8401126113c5576113c4611208565b5b8235905067ffffffffffffffff8111156113e2576113e161120c565b5b6020830191508360018202830111156113fe576113fd611210565b5b9250929050565b5f805f805f6060868803121561141e5761141d611002565b5b5f61142b88828901611029565b955050602086013567ffffffffffffffff81111561144c5761144b611006565b5b611458888289016113b0565b9450945050604086013567ffffffffffffffff81111561147b5761147a611006565b5b611487888289016113b0565b92509250509295509295909350565b61149f816112c6565b81146114a9575f80fd5b50565b5f813590506114ba81611496565b92915050565b5f602082840312156114d5576114d4611002565b5b5f6114e2848285016114ac565b91505092915050565b5f6115056115006114fb8461113a565b611194565b61100a565b9050919050565b611515816114eb565b82525050565b5f60408201905061152e5f830185611068565b61153b602083018461150c565b9392505050565b5f8151905061155081611013565b92915050565b5f6020828403121561156b5761156a611002565b5b5f61157884828501611542565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806115c557607f821691505b6020821081036115d8576115d7611581565b5b50919050565b7f57696e6e657220616c726561647920636c61696d6564000000000000000000005f82015250565b5f61161260168361109a565b915061161d826115de565b602082019050919050565b5f6020820190508181035f83015261163f81611606565b9050919050565b7f6e65656420746f206465706f73697420666972737400000000000000000000005f82015250565b5f61167a60158361109a565b915061168582611646565b602082019050919050565b5f6020820190508181035f8301526116a78161166e565b9050919050565b5f81905092915050565b7f5468656d653a20000000000000000000000000000000000000000000000000005f82015250565b5f6116ec6007836116ae565b91506116f7826116b8565b600782019050919050565b5f819050815f5260205f209050919050565b5f8154611720816115ae565b61172a81866116ae565b9450600182165f811461174457600181146117595761178b565b60ff198316865281151582028601935061178b565b61176285611702565b5f5b8381101561178357815481890152600182019150602081019050611764565b838801955050505b50505092915050565b7f0a000000000000000000000000000000000000000000000000000000000000005f82015250565b5f6117c86001836116ae565b91506117d382611794565b600182019050919050565b7f50686f746f2055524c3a200000000000000000000000000000000000000000005f82015250565b5f611812600b836116ae565b915061181d826117de565b600b82019050919050565b828183375f83830152505050565b5f61184183856116ae565b935061184e838584611828565b82840190509392505050565b7f5461736b3a2053636f7265207468697320656e74727920666f722074686520745f8201527f68656d652061626f76650a000000000000000000000000000000000000000000602082015250565b5f6118b4602b836116ae565b91506118bf8261185a565b602b82019050919050565b7f5363616c653a203120746f2031350a00000000000000000000000000000000005f82015250565b5f6118fe600f836116ae565b9150611909826118ca565b600f82019050919050565b7f496e737472756374696f6e733a20526573706f6e642077697468204f4e4c59205f8201527f612073696e676c65206e756d626572206265747765656e20312d313500000000602082015250565b5f61196e603c836116ae565b915061197982611914565b603c82019050919050565b5f61198e826116e0565b915061199a8286611714565b91506119a5826117bc565b91506119b082611806565b91506119bd828486611836565b91506119c8826117bc565b91506119d3826118a8565b91506119de826118f2565b91506119e982611962565b9150819050949350505050565b50565b5f611a045f836112f0565b9150611a0f826119f6565b5f82019050919050565b5f60a082019050611a2c5f830187611068565b8181036020830152611a3e8186611300565b9050611a4d60408301856112d7565b611a5a606083018461114d565b8181036080830152611a6b816119f9565b905095945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302611aff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611ac4565b611b098683611ac4565b95508019841693508086168417925050509392505050565b5f611b3b611b36611b318461100a565b611194565b61100a565b9050919050565b5f819050919050565b611b5483611b21565b611b68611b6082611b42565b848454611ad0565b825550505050565b5f90565b611b7c611b70565b611b87818484611b4b565b505050565b5b81811015611baa57611b9f5f82611b74565b600181019050611b8d565b5050565b601f821115611bef57611bc081611aa3565b611bc984611ab5565b81016020851015611bd8578190505b611bec611be485611ab5565b830182611b8c565b50505b505050565b5f82821c905092915050565b5f611c0f5f1984600802611bf4565b1980831691505092915050565b5f611c278383611c00565b9150826002028217905092915050565b611c40826112e6565b67ffffffffffffffff811115611c5957611c58611a76565b5b611c6382546115ae565b611c6e828285611bae565b5f60209050601f831160018114611c9f575f8415611c8d578287015190505b611c978582611c1c565b865550611cfe565b601f198416611cad86611aa3565b5f5b82811015611cd457848901518255600182019150602085019450602081019050611caf565b86831015611cf15784890151611ced601f891682611c00565b8355505b6001600288020188555050505b505050505050565b5f604082019050611d195f8301856112d7565b611d266020830184611068565b9392505050565b7f4e6f74207468652077696e6e65720000000000000000000000000000000000005f82015250565b5f611d61600e8361109a565b9150611d6c82611d2d565b602082019050919050565b5f6020820190508181035f830152611d8e81611d55565b9050919050565b5f81905092915050565b5f611daa5f83611d95565b9150611db5826119f6565b5f82019050919050565b5f611dc982611d9f565b9150819050919050565b7f5472616e73666572206661696c656400000000000000000000000000000000005f82015250565b5f611e07600f8361109a565b9150611e1282611dd3565b602082019050919050565b5f6020820190508181035f830152611e3481611dfb565b9050919050565b7f496e76616c6964207265717565737400000000000000000000000000000000005f82015250565b5f611e6f600f8361109a565b9150611e7a82611e3b565b602082019050919050565b5f6020820190508181035f830152611e9c81611e63565b9050919050565b5f82905092915050565b611eb78383611ea3565b67ffffffffffffffff811115611ed057611ecf611a76565b5b611eda82546115ae565b611ee5828285611bae565b5f601f831160018114611f12575f8415611f00578287013590505b611f0a8582611c1c565b865550611f71565b601f198416611f2086611aa3565b5f5b82811015611f4757848901358255600182019150602085019450602081019050611f22565b86831015611f645784890135611f60601f891682611c00565b8355505b6001600288020188555050505b50505050505050565b5f606082019050611f8d5f830186611068565b611f9a60208301856112d7565b611fa76040830184611068565b949350505050565b7f496e73756666696369656e7420656e74727920636f73740000000000000000005f82015250565b5f611fe360178361109a565b9150611fee82611faf565b602082019050919050565b5f6020820190508181035f83015261201081611fd7565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61204e8261100a565b91506120598361100a565b925082820190508082111561207157612070612017565b5b92915050565b5f60408201905061208a5f8301856111e0565b61209760208301846111e0565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f6120d58261100a565b91506120e08361100a565b9250826120f0576120ef61209e565b5b82820690509291505056fea26469706673582212201b949ee986e3251691bb1e5d8456d7b95c517756601693daaded242509fcb9bc64736f6c63430008140033",
};