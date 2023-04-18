import {ReactNode} from 'react';
import useVideoMakerStore from '../store/useVideoMakerStore';




const SelectProfile = () => {
  const setMode = useVideoMakerStore((state) => state.setMode);
  const selected = useVideoMakerStore((state) => state.mode)

  const onOptionChange = (e: any) => {
    setMode(e.target.value);
  };

  type SelectedOptionProps = {
    children: ReactNode
    optionName: string
  }

  const SelectedOption = ({children, optionName}: SelectedOptionProps): JSX.Element => {
    if (optionName === selected) {
      return <div className="border border-4 border-red-500">{children}</div>;
    }
    return <>{children}</>;
  };
  return (
    <div id="radio-group" className="flex gap-2">
      <SelectedOption optionName="Light-mode">
        <label>
          <input type="radio"
                 onChange={(e) => onOptionChange(e)}
                 className="h-full w-full invisible absolute"
                 name="image"
                 value="Light-mode"/>
          <img src="/Light-mode.png"
               alt="Image 1"/>
        </label>
      </SelectedOption>
      <SelectedOption optionName="Autumn-mode">
        <label>
          <input type="radio"
                 onChange={(e) => onOptionChange(e)}
                 className="h-full w-full invisible absolute"
                 name="image"
                 value="Autumn-mode"/>
          <img src="/Autumn-mode.png"
               alt="Image 1"/>
        </label>
      </SelectedOption>
      <SelectedOption optionName="Dark-mode">
        <label>
          <input type="radio"
                 onChange={(e) => onOptionChange(e)}
                 className="h-full w-full invisible absolute"
                 name="image"
                 value="Dark-mode"/>
          <img src="/Dark-mode.png"
               alt="Image 1"/>
        </label>
      </SelectedOption>

    </div>
  );
};

export default SelectProfile;
