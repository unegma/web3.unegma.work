# web3-example-app

! Disclaimer: This is currently here to facilitate my own learning, so some of the coding may be bad (feel free to get in touch with any suggestions) ! 

This is currently a playground app made from:
* https://github.com/unegma/frontend-crud-template
* https://github.com/truffle-box/react-box (converted to react hooks)
* Other Truffle boxes

## To Use

* `git clone git@github.com:timhc22/web3-example-app.git`
* Use a local blockchain such as Ganache (https://www.trufflesuite.com/ganache), to which this app will connect (make sure the port is the same as in truffle-config.js)
* Have a wallet connected to your browser (https://metamask.io/), this app will connect to the local blockchain so you won't spend real funds
* `npm run truffle-compile; npm run truffle-deploy`
* `cd ./client; npm install; npm start`
* If there are any problems with migrating the contracts, try `truffle compile --all` or `truffle migrate --reset`

## SetUp

* 1337 is the chain ID
* copy private key from ganache into a wallet (e.g. metamask) under import account
* have to sometimes go into metamask and 'connect' the account so that that one is used

