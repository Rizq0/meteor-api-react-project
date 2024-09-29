import { useContext } from "react";
import { NightModeContext } from "../contexts/night-mode";
import { Expandable } from "./Expandable";
import lightDarkMode from "../icons/brightness-and-contrast.png";

export const Toolbar = () => {
  const { isLightMode, setLightMode } = useContext(NightModeContext);
  const activateTheme = () => {
    setLightMode(!isLightMode);
  };

  return (
    <Expandable>
      <input
        type="image"
        src={lightDarkMode}
        className="toolbardarkmode"
        onClick={activateTheme}
      ></input>
    </Expandable>
  );
};
