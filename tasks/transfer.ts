import { task } from "hardhat/config";

task("transfer", "Transfer token")
  .addParam("to", "Account address")
  .addParam("amount", "Amount of tokens")
  .setAction(async (taskArgs, hre) => {
    const [owner] = await hre.ethers.getSigners();
    const Token = await hre.ethers.getContractFactory("CRGToken");
    const token = await Token.attach(
      "0xaC60eeeD4adcea750Da61560e30Fa13607125f9d" // The deployed contract address
    );

    await token
      .connect(owner)
      .transfer(taskArgs.to, hre.ethers.utils.parseUnits(taskArgs.amount, 18));
  });
