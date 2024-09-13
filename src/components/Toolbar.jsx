import { useContext } from "react";
import { NightModeContext } from "../contexts/night-mode";

export const Toolbar = () => {
  const { isLightMode, setLightMode } = useContext(NightModeContext);
  const activateTheme = () => {
    setLightMode(!isLightMode);
  };

  return (
    <div className="toolbarcontainer">
      <input
        type="image"
        src="src/icons/brightness-and-contrast.png"
        className="lightdark"
        onClick={activateTheme}
      ></input>
    </div>
  );
};
