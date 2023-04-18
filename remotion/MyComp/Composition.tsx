import {AbsoluteFill} from 'remotion';
import {MyCompProps} from '../../types/MyComp';
import {interpolate, useCurrentFrame} from 'remotion';


export const MyComposition = ({text, mode, speed, backgroundColor}: MyCompProps) => {
  const frame = useCurrentFrame();


  console.log('this is he mode', mode)
  const wordLength = text?.length;
  const letterCount = Math.round(interpolate(frame, [0, speed > 0 ? speed : 1], [0, wordLength], {
    extrapolateRight: 'clamp',
  }));

  const renderLetter = (letter: string, index: number) => {
    if (index >= letterCount) {
      return null;
    }

    if (mode === "Light-mode") {
      return (
        <span className="text-black" key={index}>
      {letter}
    </span>
      );
    }

    if (mode === "Autumn-mode") {
      return (
        <span className="text-black" key={index}>
      {letter}
    </span>
      );
    }

    return (
      <span className="text-green-500" key={index}>
      {letter}
    </span>
    );
  };

  const themes = {
    "Light-mode": <AbsoluteFill className="bg-white items-center justify-center" style={{backgroundColor, border: '4px solid #767373'}}>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-t-lg px-4 py-7 relative" style={{border: '4px solid #352D2D'}}>
          <h3 style={{color: '#988383'}} className="text-7xl">Terminal</h3>
          <div className="absolute top-0 right-2 pr-2 h-full flex items-center">
            <button className="bg-red-500 hover:bg-red-600 h-12 w-12 rounded-full mx-1" aria-label="Close"></button>
            <button className="bg-yellow-500 hover:bg-yellow-600 h-12 w-12 rounded-full mx-1" aria-label="Minimize"></button>
            <button className="bg-green-500 hover:bg-green-600 h-12 w-12 rounded-full mx-1" aria-label="Maximize"></button>
          </div>
        </div>
        <div className="bg-white rounded-b-lg px-4 py-4 h-[1000px]" style={{border: '4px solid #352D2D'}}>
          <div id="terminal">
            <div className="flex flex-wrap">
              {text.split('').map(renderLetter)}
              <div className="px-4 py-2 bg-gray-400 ml-1 animate-blink">
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>,
    "Autumn-mode": <AbsoluteFill className="bg-white items-center justify-center" style={{backgroundColor}}>
      <div className="container mx-auto px-4 py-8">
        <div className="rounded-t-lg px-4 py-7 relative" style={{background: '#D6D0B8'}}>
          <h3 className="text-white text-7xl">Terminal</h3>
          <div className="absolute top-0 right-2 pr-2 h-full flex items-center">
            <button className="bg-red-500 hover:bg-red-600 h-12 w-12 rounded-full mx-1" aria-label="Close"></button>
            <button className="bg-yellow-500 hover:bg-yellow-600 h-12 w-12 rounded-full mx-1" aria-label="Minimize"></button>
            <button className="bg-green-500 hover:bg-green-600 h-12 w-12 rounded-full mx-1" aria-label="Maximize"></button>
          </div>
        </div>
        <div style={{background: '#F1F4C6'}} className="rounded-b-lg px-4 py-4 h-[1000px]">
          <div id="terminal">
            <div className="flex flex-wrap">
              {text.split('').map(renderLetter)}
              <div className="px-4 py-2 bg-gray-400 ml-1 animate-blink">
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>,
    "Dark-mode": <AbsoluteFill className="bg-gray-900 items-center justify-center" style={{backgroundColor}}>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-900 rounded-t-lg px-4 py-7 relative">
          <h3 className="text-gray-400 text-7xl">Terminal</h3>
          <div className="absolute top-0 right-2 pr-2 h-full flex items-center">
            <button className="bg-red-500 hover:bg-red-600 h-12 w-12 rounded-full mx-1" aria-label="Close"></button>
            <button className="bg-yellow-500 hover:bg-yellow-600 h-12 w-12 rounded-full mx-1" aria-label="Minimize"></button>
            <button className="bg-green-500 hover:bg-green-600 h-12 w-12 rounded-full mx-1" aria-label="Maximize"></button>
          </div>
        </div>
        <div className="bg-gray-800 rounded-b-lg px-4 py-4 h-[1000px]">
          <div id="terminal">
            <div className="flex flex-wrap">
              {text.split('').map(renderLetter)}
              <div className="px-4 py-2 bg-gray-400 ml-1 animate-blink">
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  }


  return themes[mode];
};
