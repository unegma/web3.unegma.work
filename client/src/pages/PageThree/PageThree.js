import React, {useEffect, useState} from 'react';
import {initialize} from 'zokrates-js';

function PageThree() {

  const [message, setMessage] = useState("Loading...");
  const [proof, setProof] = useState(undefined);

  useEffect(() => {
    const getProvider = async () => {

      try {
        // Zokrates example code
        const zokratesProvider = await initialize();

        // source
        const source = "def main(private field a) -> (field): return a * a";

        // compilation
        const artifacts = zokratesProvider.compile(source);

        // computation
        const {witness, output} = zokratesProvider.computeWitness(artifacts, ["2"]);

        // run setup
        const keypair = zokratesProvider.setup(artifacts.program);

        // generate proof
        const proof = zokratesProvider.generateProof(artifacts.program, witness, keypair.pk);

        // export solidity verifier
        const verifier = zokratesProvider.exportSolidityVerifier(keypair.vk, "v1");

        setMessage(`Witness: ${witness}, Output: ${output}`);
        setProof(proof);
      } catch (error) {
        console.log('here')
        setMessage(error.message);
      }
    }
    getProvider();

  }, [setMessage, setProof]);


  return (
      <section className="container" style={{padding: '50px'}}>
        <h1 style={{textAlign: 'left'}}>Zokrates</h1>

        <p style={{textAlign: 'left'}}>{message}</p>
        <br/>

        {proof ? (
            <div style={{textAlign: 'left', wordWrap: 'break-word'}}>
              <p>Inputs: {proof.inputs}</p>
              <br/>
              <p>Proof:</p>
              <p>A: {proof.proof.a}</p>
              <p>B: {proof.proof.b}</p>
              <p>C: {proof.proof.c}</p>

            </div>
        ) : (
            <p>Empty</p>
        )}

      </section>
  );
}

export default PageThree;
