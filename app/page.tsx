"use client";
import Words from "../components/text-to-audio/Words";
import React, { useEffect } from "react";
import wordsData from "../components/text-to-audio/words.json";

interface Item {
  text: string;
  startTime: number;
  type: string;
}

export default function Home() {
  const [startReading, setStartReading] = React.useState<boolean>(false);
  const [wordData, setWordData] = React.useState<any>(
    wordsData.WORDS_WITH_TIMINGS
  );
  const [currentTime, setCurrentTime] = React.useState<number>(0);

  useEffect(() => {
    if (startReading) {
      const interval = setInterval(() => {
        setCurrentTime((prev) => prev + 0.1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [startReading]);

  const handleClick = () => {
    setStartReading(!startReading);
    var audio = new Audio("https://yomeshgupta.com/crazy-ones-audio.mp3");
    audio.play();
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By SAURABH
          </a>
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center p-12 space-y-5">
        <div className="">
          <p className="text-3xl font-semibold">
            How to create a Text to Audio Animated reader?
          </p>
        </div>

        <div className="max-w-2xl flex-1 sm:text-2xl space-x-1">
          {startReading ? (
            wordData.map((item: Item, index: number) => (
              <Words key={index} item={item} currentTime={currentTime} />
            ))
          ) : (
            <span onClick={handleClick} className="play__icon cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="75"
                fill="currentColor"
                className="fill-current hover:fill-yellow-300"
                viewBox="0 0 16 16"
              >
                <path
                  className=""
                  d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                />
              </svg>
            </span>
          )}
        </div>
      </div>
    </main>
  );
}
