import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const navigateToDictionary = () => {
    navigate("/dictionary");
  };

  return (
    <>
      <div className="mx-auto max-w-7xl grow overflow-y-hidden flex flex-col items-center justify-center">
        <h1 className="">Do you wanna search something?</h1>
        <button
          onClick={navigateToDictionary}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold mx-auto py-2 px-4 rounded-full mt-4 max-w-fit"
        >
          Yeah!
        </button>
      </div>
    </>
  );
}

export default Home;
