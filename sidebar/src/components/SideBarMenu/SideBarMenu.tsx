import React, { useState } from "react";
import { SideBarMenuItems, SideBarMenuCard } from "../../types/types";
import { classNames } from "../../utils/class";
import { VscMenu } from "react-icons/vsc";

interface SideBarMenuProps {
  items: SideBarMenuItems[];
  card:SideBarMenuCard;
}

const SideBarMenu = ({ items, card }:SideBarMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
function handleClick (){
  setIsOpen(!isOpen)
}
  return (
    <div
      className={classNames("SideBarMenu", isOpen ? "expanded" : "colapsed")}
    >
      <div className="menuButton">
        <button className="hamburgerButton" onClick={handleClick}>
          <VscMenu />
        </button>
      </div>
    </div>
  );
};

export default SideBarMenu;
