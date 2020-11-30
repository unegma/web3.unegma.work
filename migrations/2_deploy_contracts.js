const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const SimpleStorage = artifacts.require("./SimpleStorage.sol");
const Verifier = artifacts.require("./Verifier.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(SimpleStorage);
  deployer.deploy(Verifier);
};
