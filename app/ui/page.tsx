'use client';

import { useRef, useState } from 'react';
import { useBoolean, useEffectOnce, useInterval } from 'react-use';
import { Button } from './Button';
import { ButtonKit } from './Button/ButtonKit';
import { electricity } from './canvas/electricity';
import { OutlinePie } from './OutlinePie';
import { VariantKit } from './Variant/VariantKit';

const SECOND = 1000;
// seconds to minutes:seconds format
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

// Just Break and Start, no need to define starting time

// and in this case no need for pie chart, make it just a funny
// constelation, like a planet orbiting the start. O como un pendulo

// El planeta o la bola del pendulo colorearlo de pendiendo de si esta
// activo o en tiempo de descanso

// While more time has passed the faster the ball moves, or the more balls appear in the constelation

// Start a pomodoro with a chatgpt question
// that is the modern way to go, that is gonna help

// if the user is taking a really long break the opposite happens,
// simulate a cold, freeze scene.

// Some inspiration in 100 particles, slowing and speeding up particles

// only one weak red ligning inside the plasma ball, trying to break the ball
// ....
// to simulate the glass around, create a transparent circle,
// when particles collide with the circle, then a minor explosion happens, end of the partible
// here an exaple of the glass with gradient -- https://codepen.io/louflan/pen/NWbWLxJ

// cuando pase el tiempo de trabajo, los rayos seran mas constantes
// pero no hasta el punto que incordie, sino un efecto de relajacion y energia

// el que moleste mas sera el tiempo de descanso, que sera mas agresivo

//// ideas ai for sketching with canvas, real time generation...

// gpt pomodoro app

const Page = () => {
  const referentTimeStamp = useRef(Date.now());
  const totalSeconds = 10;
  const [passedSeconds, setPassedSeconds] = useState(0);
  const remainingSeconds = totalSeconds - passedSeconds;
  const [isRunning, toggleIsRunning] = useBoolean(true);
  const isComplete = totalSeconds === passedSeconds;

  useInterval(
    () => {
      setPassedSeconds(
        // Rest current time from referent timestamp and get it in seconds
        Math.floor((Date.now() - referentTimeStamp.current) / 1000)
      );
    },
    isRunning && !isComplete ? SECOND : null
  );

  // useEffect(() => {
  //   if (isComplete) {
  //     toggleIsRunning();
  //   }
  // }, [isComplete, toggleIsRunning]);

  // useEffect(() => {
  //   if (isRunning) {
  //     referentTimeStamp.current = Date.now();
  //   }
  // }, [isRunning]);

  useEffectOnce(() => {});

  return (
    <main className="p-5 bg-white text-zinc-800">
      <h1>{'UI Page'}</h1>

      {/* <Button className="absolute top-0 left-0 z-20" onClick={gravity}>Init Gravity</Button> */}
      <Button className="absolute top-0 left-0 z-20" onClick={electricity}>
        Init Electricity
      </Button>
      <canvas
        id="myCanvas"
        width="500"
        height="500"
        className=" bg-zinc-900 shadow-lightning shadow-red-500 absolute top-0 left-0 z-10"
      />

      {/* <CanvasPlayGround /> */}

      <section>
        <h2 className="my-3">{'Pomodoro Bar'}</h2>

        <div className="flex items-center gap-x-5 bg-gray-900 p-10 text-white ">
          <div className="relative">
            <OutlinePie seconds={remainingSeconds} isPaused={!isRunning} />
            {isComplete && (
              <button
                onClick={toggleIsRunning}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md"
              >
                {'Done'}
              </button>
            )}
            {!isComplete && (
              <button
                onClick={toggleIsRunning}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md"
              >
                {isRunning ? 'Pause' : 'Play'}
              </button>
            )}
          </div>
          <b className="text-3xl">{formatTime(remainingSeconds)}</b>

          <div>
            <div className="flex gap-x-2 items-baseline">
              <div className="w-2 h-5 bg-green-500" />
              <div className="w-2 h-4 bg-green-500" />
              <div className="w-2 h-3 bg-green-500" />
              <div className="w-2 h-2 bg-green-500" />
              <div className="w-2 h-2 bg-green-500/70 animate-pulse" />
              {/* the current one grows while the time passes */}
            </div>

            <div className="flex gap-x-2 mt-5">
              <div className="w-2 h-3 bg-yellow-500" />
              <div className="w-2 h-3 bg-yellow-500" />
              <div className="w-2 h-2 bg-yellow-500" />
              <div className="w-2 h-2 bg-yellow-500" />
            </div>
          </div>

          {/* <span className="ml-auto text-lg text-green-500">{'Poming'}</span> */}
          {/* <span className="ml-auto text-lg text-yellow-500">{'Resting'}</span> */}
          {/* <span className="ml-auto text-lg text-gray-500">{'Timeout'}</span> */}

          <span className="ml-auto text-lg text-zinc-500">{'Resting'}</span>
        </div>
      </section>

      <ButtonKit />
      <VariantKit />
    </main>
  );
};

export default Page;
