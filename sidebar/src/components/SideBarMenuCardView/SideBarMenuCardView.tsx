import React from 'react'
import {classNames} from "../../utils/class"
import { SideBarMenuCard,SideBarMenuItems } from '../../types/types'
import "./SideBarMenuCardView.scss"
interface SideBarMenuCardViewProps{
  card: SideBarMenuCard,
  isOpen: boolean,
 
}

const SideBarMenuCardView = ({card, isOpen}:SideBarMenuCardViewProps) => {
  return (
    <div className='SideBarMenuCardView'>
      <img className='profile' src={card.photoUrl } width="100%" alt="profile"/>
      <div className={classNames("profileInfo", isOpen ? "" : "collapsed")} >
        <div className="name">{card.displayName} </div>     
        <div className="title">{card.title} </div>
        <div className="Iurl" > <a href={ card.url}>Ir al perfil</a></div>
      </div>
    </div>
  )
}

export default SideBarMenuCardView