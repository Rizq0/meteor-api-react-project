import { useState } from "react";
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
        src="src/icons/settings-gear-icon.png"
        className="toolbarbutton"
      />
      {isOpen && children}
    </div>
  );
};
