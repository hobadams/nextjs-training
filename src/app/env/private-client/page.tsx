'use client';

import { useEffect, useState } from "react";

export default function Page() {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) return <h1>Loading...</h1>

  return <h1>Private {process.env.PRIVATE_VAR}</h1>

}