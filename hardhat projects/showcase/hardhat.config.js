const { task } = require("hardhat/config");

require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  // console.log("Accounts:", accounts);
  for (const account of accounts) {
    console.log(await account.getBalance());
  }
});
task("app1", (taskArgs, hre) => {
  console.log("taskArgs", taskArgs, hre);
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      },
      {
        version: "0.7.0 ",
        settings: {},
      },
    ],
  },
  networks: {
    mainnet: {
      url: process.env.INFURA_MAINNET_URL || "",
      accounts:
        process.env.ACCOUNT_PK !== undefined ? [process.env.ACCOUNT_PK] : [],
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/84cc32b6ddbb4bea90d9c95008058fed",
      accounts: [
        "ea8f4b6db35e0c6ef7dc91dc4a767085cf82d8728b7d4811062d81f4e5f4b978",
      ],
    },
  },
};
