"use client"

import React, { FC } from 'react';
import styles from "./Popup.module.css"

interface PopupProps{
    children: React.ReactNode,
    onOutsideClick: ()=>void,
    borderRadius: string,
    width: string,
    height: string
}

const Popup: FC<PopupProps> = (props) => {
  return (
    <div className={styles.whole_screen}
      style={{zIndex: 499}}
    >
      <div className={styles.popup} style={{
        borderRadius: props.borderRadius,
        width: props.width,
        height: props.height,
        backgroundColor: 'white',
        zIndex: 500,
        margin: '0 auto',
      }}>
        {props.children}
      </div>

      <div className={styles.overlay} onClick={props.onOutsideClick}></div>
    </div>
  );
};

export default Popup;