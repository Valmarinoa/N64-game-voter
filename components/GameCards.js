import { useState } from "react";
import Image from "next/image";

function GameCards({ title, img }) {
  const [voteCount, setVoteCount] = useState(null);

  const votedGame = (event) => {
    event.preventDefault();
    setVoteCount(voteCount + 1);
  };

  const unVoteGame = (event) => {
    event.preventDefault();
    setVoteCount(voteCount - 1);
  };

  return (
    <div>
      <div className="relative border-white cursor-pointer">
        <h1 className={voteCount > 0 ? "voted" : "hidden"} onClick={unVoteGame}>
          {voteCount}
        </h1>
      </div>
      <div className="border border-gray-50 rounded-xl items-center m-4 hover:shinny-shadow hover:scale-105 transition transform ease-in-out duration-300 ">
        <div className="relative h-52 ">
          <Image
            src={img}
            layout="fill"
            className="h-64 cursor-pointer z-10 object-cover hover:z-0 rounded-t-xl hover:opacity-100 opacity-60 transition transform ease-in-out duration-300"
            onClick={votedGame}
            objectFit="cover"
          />
        </div>
        <div className="p-2 flex justify-between">
          <div className="items-center">
            <h3 className="text-white font-semibold md:text-sm">{title}</h3>
          </div>
          <div className="items-center flex space-x-4 justify-between">
            <button
              className="hover:scale-105 active:scale-150 transition transform ease-out duration-200"
              onClick={votedGame}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCards;
