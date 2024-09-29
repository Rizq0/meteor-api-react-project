import { useState } from "react";
import gearIcon from "../icons/settings-gear-icon.png";
export const Expandable = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="toolbar">
      <input
        type="image"
        onClick={toggleOpen}
        src={gearIcon}
        className="toolbarbutton"
      />
      {isOpen && children}
    </div>
  );
};
