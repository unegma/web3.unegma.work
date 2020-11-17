import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import SimpleStorageContract from "./contracts-build/SimpleStorage.json";
import getWeb3 from "./getWeb3";

import './App.scss';
import Menu from './components/Menu/Menu';
import HomePage from './pages/HomePage/HomePage';
import PageTwo from "./pages/PageTwo/PageTwo";

function App() {
  const [storageValue, setStorageValue] = useState(0);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);


  useEffect(() => {

    /**
     * Set web3, accounts, and contract to the state, and then proceed with an
     * example of interacting with the contract's methods.
     * @returns {Promise<void>}
     */
    async function setUp() { // until 'suspense' https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret
      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();
        console.log(web3);
        setWeb3(web3);
        console.log(web3);

        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts);

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

      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }
    }
    setUp();

  }, []);


  if (!web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }

  return (
    <div className="App">
      <Router>
        <Menu>CRUD App</Menu>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/page-two" component={PageTwo} />
          <Redirect to="/" />
        </Switch>
      </Router>

      <div>The stored value is: {storageValue}</div>


    </div>
  );
}

export default App;
