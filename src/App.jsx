import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full">
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-8">
          <div className="card-body items-center">
            <h2 className="card-title mb-8">App.jsx</h2>
            <p className="text-4xl">😊</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary rounded-full uppercase mt-4">
                let's play!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
