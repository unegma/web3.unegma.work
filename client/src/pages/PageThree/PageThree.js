import React, {useState} from 'react';
import { initialize } from 'zokrates-js';
import { useAsync } from 'react-async';

// const getProvider = async () => {
//   await initialize();
// }

function PageThree() {

  const [message, setMessage] = useState(null);

  // Zokrates example code
  // const {zokratesProvider, error, isLoading} = useAsync({promiseFn: getProvider});
  // if (isLoading) return "Loading..."
  // if (error) return `Something went wrong: ${error.message}`

  // try {
    // const source = "def main(private field a) -> field: return a * a";
    // console.log(source);
    // console.log(zokratesProvider);
    // // compilation
    // const artifacts = zokratesProvider.compile(source);
    //
    // // computation
    // const {witness, output} = zokratesProvider.computeWitness(artifacts, ["2"]);
    //
    // // run setup
    // const keypair = zokratesProvider.setup(artifacts.program);
    //
    // // generate proof
    // const proof = zokratesProvider.generateProof(artifacts.program, witness, keypair.pk);
    //
    // // export solidity verifier
    // const verifier = zokratesProvider.exportSolidityVerifier(keypair.vk, "v1");
    //
  // } catch (error) {
  //   console.log('here')
  //   setMessage(error.message);
  // }


  try { // todo why is this not working as expected?

    // todo Zokrates example code without async await (error is Unhandled Rejection (TypeError): TextDecoder is not a constructor)
    initialize().then((zokratesProvider) => {
      console.log(zokratesProvider);
      console.log(zokratesProvider.compile); // shows it is a function
      const source = "def main(private field a) -> field: return a * a";

      // compilation
      const artifacts = zokratesProvider.compile(source);

      // computation
      const { witness, output } = zokratesProvider.computeWitness(artifacts, ["2"]);

      // run setup
      const keypair = zokratesProvider.setup(artifacts.program);

      // generate proof
      const proof = zokratesProvider.generateProof(artifacts.program, witness, keypair.pk);

      // export solidity verifier
      const verifier = zokratesProvider.exportSolidityVerifier(keypair.vk, "v1");
      console.log(`Verifier:`);
      console.log(verifier);
    });
  } catch (error) {
    console.log('here')
    setMessage(error.message);
  }

  return (
      <section className="container">
        <h1>Zokrates</h1>

        <p>{message}</p>


      </section>
  );
}

export default PageThree;
