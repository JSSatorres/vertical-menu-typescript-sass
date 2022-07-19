import React from "react";
import SideBarMenu from "./components/SideBarMenu";
import { SideBarMenuItems, SideBarMenuCard } from "./types/types";
import { FcAdvertising } from "react-icons/fc";
import profileImage from "./aserts/cerdo.jpg"

function App() {
  const items: SideBarMenuItems[] = [
    {
      id: "1",
      label: "Hola",
      icon: FcAdvertising,
      url: "/",
    },
    {
      id: "2",
      label: "Pedro",
      icon: FcAdvertising,
      url: "/",
    },
    {
      id: "3",
      label: "jose",
      icon: FcAdvertising,
      url: "/",
    },
  ];

  const card: SideBarMenuCard = {
    id: "card01",
    displayName: "Alonso",
    photoUrl: profileImage,
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
