/**
 * Button that scrolls to top, appears when user has scrolled down
 */

import React, { useState } from 'react';
import { Button } from './Styles';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <h3>^</h3>
    </Button>
  );
};

export default ScrollButton;
