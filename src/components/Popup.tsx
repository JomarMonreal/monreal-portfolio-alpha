"use client"

import React, { FC, useState, useEffect } from 'react';
import styles from "./Popup.module.css"

interface PopupProps {
  children: React.ReactNode,
  onOutsideClick: () => void,
  borderRadius: string,
  width: string,
  height: string
}

const Popup: FC<PopupProps> = (props) => {
  const [popupWidth, setPopupWidth] = useState<string>('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setPopupWidth('80%');
      } else {
        setPopupWidth(props.width);
      }
    };

    // Initialize width based on initial window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [props.width]);

  return (
    <div className={styles.whole_screen} style={{ zIndex: 499 }}>
      <div className={styles.popup} style={{
        borderRadius: props.borderRadius,
        width: popupWidth,
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
