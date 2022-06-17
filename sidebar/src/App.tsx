import React from "react";
import SideBarMenu from "./components/SideBarMenu";
import { SideBarMenuItems, SideBarMenuCard } from "./types/types";
import { FcAdvertising } from "react-icons/fc";

function App() {
  const items: SideBarMenuItems[] = [
    {
      id: "1",
      label: "Hola",
      icon: FcAdvertising,
      url: "/",
    },
  ];

  const card: SideBarMenuCard = {
    id: "card01",
    displayName: "Marquitos Alonso",
    photoUrl: "string",
    title: "studentg",
    url: "/",
  };
  return (
    <div className="App">
      <SideBarMenu items={items} card={card} />
    </div>
  );
}

export default App;
