import { IconType } from "react-icons";

export interface SideBarMenuItems{
    id:string;
    label:string;
    icon:IconType;
    url:string;
}

export interface SideBarMenuCard{
    id:string;
    displayName:string;
    photoUrl:string;
    title:string;
    url:string;
}