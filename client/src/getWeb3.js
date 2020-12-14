import Web3 from "web3";

/**
 * getWeb3
 *
 * @param host
 * @param token
 * @returns {Promise<unknown>}
 */
const getWeb3 = (host, token) =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.

    /**
     * Abstract away so that can check if page is loaded or not (load will be true when navigating with React)
     * There may be a better way to do this, and it might not be needed in later versions of MetaMask
     *
     * @returns {Promise<void>}
     */
    const get = async () => {
      if (host) {
        try {
          // e.g. "https://rinkeby.infura.io/YOUR_TOKEN_HERE"
          // add code to add / if not there: todo https://stackoverflow.com/questions/41172772/how-to-add-jpg-to-end-of-string-if-it-doesnt-exist
          const web3 = new Web3(new Web3.providers.HttpProvider(`${host}${token}`));
          // await window.ethereum.enable(); // todo needed?
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      // Modern dapp browsers...
      else if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();
          // Accounts now exposed
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
        const provider = new Web3.providers.HttpProvider(
            "http://127.0.0.1:7545" // todo move to .env
        );
        const web3 = new Web3(provider);
        console.log("No web3 instance injected, using Local web3.");
        resolve(web3);
      }
    }

    // there is probably a better way of doing this than this #still learning
    if (document.readyState == 'complete') {
      return get();
    } else {
      window.addEventListener("load", () => {
        return get();
      });
    }


  })

export default getWeb3;
