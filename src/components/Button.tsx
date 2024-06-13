import { useEffect } from "react";

export const Button = () => {
  console.log('Button component');

  useEffect(() => {
    console.log('Button component mounted');
  }, []);

  return (
    <button onClick={() => console.log('button clicked')}>Click me</button>
  )
}