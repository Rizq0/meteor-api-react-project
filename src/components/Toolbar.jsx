import { useContext } from "react";
import { NightModeContext } from "../contexts/night-mode";
import { Expandable } from "./Expandable";

export const Toolbar = () => {
  const { isLightMode, setLightMode } = useContext(NightModeContext);
  const activateTheme = () => {
    setLightMode(!isLightMode);
  };

  return (
    <Expandable>
      <input
        type="image"
        src="src/icons/brightness-and-contrast.png"
        className="toolbardarkmode"
        onClick={activateTheme}
      ></input>
    </Expandable>
  );
};
