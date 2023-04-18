import useVideoMakerStore from '../store/useVideoMakerStore';

const SpeedDuration = () => {
  const setSpeed = useVideoMakerStore((state) => state.setSpeed)
  const setDuration = useVideoMakerStore((state) => state.setDuration)
  const speed = useVideoMakerStore((state) => state.speed)
  const duration = useVideoMakerStore((state) => state.duration);

  const setAmount = (value: string): void => {
    if (parseInt(value, 10) > 0) {
      setSpeed(parseInt(value, 10))
    } else {
      setSpeed(0)
    }
  }
  const setDurationAmount = (value: string): void => {
    if (parseInt(value, 10) > 0) {
      setDuration(parseInt(value, 10))
    } else {
      setDuration(0)
    }

  }


  return <div className="flex gap-4">
    <fieldset className="bg-gray-900 p-2 border-1 border border-white">
      <legend className="text-white">Speed</legend>
      <input  className="bg-gray-900 text-white" value={speed} onChange={(e) => setAmount(e.target.value)} />
      <span className="text-white text-sm opacity-40">in frames</span>
    </fieldset>
    <fieldset className="bg-gray-900 p-2 border-1 border border-white">
      <legend className="text-white">Duration</legend>
      <input  className="bg-gray-900 text-white" value={duration}  onChange={(e) => setDurationAmount(e.target.value)}/>
      <span className="text-white text-sm opacity-40">in frames</span>
    </fieldset>
  </div>
}
export default SpeedDuration;
