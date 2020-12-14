import React, {useEffect, useState} from 'react';
import SimpleStorageContract from "../../contracts-build/SimpleStorage.json"
import getWeb3 from "../../getWeb3";

function PageTwo() {
  const RINKEBY_TOKEN = '25987f6d80e948518ed691183ca397ef';
  const [storageValue, setStorageValue] = useState(0);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {

    /**
     * Set web3, accounts, and contract to the state, and then proceed with an
     * example of interacting with the contract's methods.
     * @returns {Promise<void>}
     */
    const setUp = async () => { // todo until 'suspense' https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret
      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3('https://rinkeby.infura.io/v3/', RINKEBY_TOKEN);
        console.log(web3);
        setWeb3(web3);
        console.log(web3);

        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts);
        console.log(accounts);

        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = SimpleStorageContract.networks[networkId];
        const contract = new web3.eth.Contract(
            SimpleStorageContract.abi,
            deployedNetwork && deployedNetwork.address,
        );
        setContract(contract);

        // Stores a given value, 5 by default.
        await contract.methods.set(5).send({from: accounts[0]}); // this is getting from local not state

        // Get the value from the contract to prove it worked.
        const response = await contract.methods.get().call();

        // Update state with the result.
        setStorageValue(response);
        setMessage("Done");

      } catch (error) {
        // Catch any errors for any of the above operations.
        setMessage(error.message);
        console.error(error);
      }
    }
    setUp();

  }, [setMessage, setWeb3, setStorageValue, setContract, setAccounts]);

  if (!web3) {
    return (
        <div>
          <p>Need to hard reload on inital load (for now)</p>
          <p>{message}</p>
        </div>
    );
  }
  return (
    <section className="container">
      <h1>MetaMask Transaction</h1>
      <p>Need to hard reload for now.</p>

      <div>The stored value is: {storageValue}</div>
      <p>{message}</p>
    </section>
  );
}

export default PageTwo;
