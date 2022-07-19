import React, { useState } from "react";
import { SideBarMenuItems, SideBarMenuCard } from "../../types/types";
import { classNames } from "../../utils/class";
import { VscMenu } from "react-icons/vsc";
import SideBarMenuCardView from "../SideBarMenuCardView";
import SideBarMenuItemView from "../SideBarMenuItemView";
import "./SideBarMenu.scss";

interface SideBarMenuProps {
  items: SideBarMenuItems[];
  card: SideBarMenuCard;
}

const SideBarMenu = ({ items, card }: SideBarMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={classNames("SideBarMenu", isOpen ? "expanded" : "colapsed")}>
      <div className="menuButton">
        <button className="hamburgerButton" onClick={handleClick}>
          <VscMenu />
        </button>
      </div>
      <SideBarMenuCardView card={card} isOpen={isOpen} />
      {
        items.map(item =>{
          return <SideBarMenuItemView key={item.id } item={item} isOpen={isOpen}/>
        })
      }
    </div>
  );
};

export default SideBarMenu;
