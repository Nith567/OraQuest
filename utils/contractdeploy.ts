import { chainQuestContract } from "../contract/abi";
import { ethers } from "ethers";

export async function deployContract(
  signer: any,
  theme: string,
  entryCost: number,
  scoreToWin: number
) {
  const oracleAddress = "0x0A0f4321214BB6C7811dD8a71cF587bdaF03f0A0";

  const factory = new ethers.ContractFactory(
    chainQuestContract.abi,
    chainQuestContract.bytecode,
    signer
  );

  console.log("Deploying contract with:", {
    oracleAddress,
    theme,
    entryCost,
    scoreToWin,
  });
  const contract = await factory.deploy(
    oracleAddress,
    theme,
    entryCost,
    scoreToWin
  );
  await contract.deployed();

  console.log("Contract deployed at:", contract.address);

  return contract;
}
