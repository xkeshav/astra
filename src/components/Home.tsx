import {  useEffect } from 'react';


export const Home = () => {

  useEffect(() => {
    console.log("use effect called");
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1>Hello from Home</h1>
      </div>
    </>
  );
};
