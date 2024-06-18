'use client';

import { useEffect, useState } from "react";

export default function Page() {

  const varName = 'NEXT_PUBLIC_TEST_VAR';
  const privateVarName = 'PRIVATE_VAR'
  const [publicVar, setPublicVar] = useState();
  const [privateVar, setPrivateVar] = useState();

  useEffect(() => {
    (async () => {
      const { publicThing, privateThing } = await fetch('/api/env', { cache: 'no-store' }).then(res => res.json());
      setPublicVar(publicThing);
      setPrivateVar(privateThing);
    })();
  }, []);



  return (
    <>
      <h1>Public dynamic</h1>
      <p>- {process.env.NEXT_PUBLIC_TEST_VAR}</p>
      <p>- {process.env[varName]}</p>
      <p>- {process.env[privateVarName]}</p>
      <p>- {publicVar}</p>
      <p>- {privateVar}</p>
    </>
  )

}