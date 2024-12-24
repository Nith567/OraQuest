import { chainQuestContract } from "../contract/abi";
import { walletClient, publicClient } from "@/components/Providers";
import { parseEther } from "viem";

import { WaitForTransactionReceiptData } from "wagmi/query";
import { waitForTransactionReceipt } from "viem/actions";
export async function deployContract(
  // signer: any,
  account: any,
  theme: string,
  entryCost: string,
  scoreToWin: number
) {
  const oracleAddress = "0x0A0f4321214BB6C7811dD8a71cF587bdaF03f0A0";
  try {
    // const factory = new ethers.ContractFactory(
    //   chainQuestContract.abi,
    //   chainQuestContract.bytecode,
    //   signer
    // );

    // console.log("Deploying contract with:", {
    //   oracleAddress,
    //   theme,
    //   entryCost,
    //   scoreToWin,
    // });
    const hash = await walletClient.deployContract({
      abi: chainQuestContract.abi,
      account: account,
      args: [oracleAddress, theme, parseEther(entryCost), scoreToWin],
      bytecode: chainQuestContract.bytecode as `0x{string}`,
    });
    const tnx = await publicClient.waitForTransactionReceipt({ hash });
    console.log("gasused", tnx.gasUsed);
    console.log("hashed:deployedcontract", tnx, tnx.contractAddress);

    return tnx.contractAddress;
  } catch (error) {
    console.error("Error submitting contest:", error);
  }
  // const contract = await factory.deploy(
  //   oracleAddress,
  //   theme,
  //   entryCost,
  //   scoreToWin
  // );
  // await contract.deployed();

  // console.log("Contract deployed at:", contract.address);

  // return contract;
}
