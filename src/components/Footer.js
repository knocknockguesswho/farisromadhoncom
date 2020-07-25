import React, { useState } from 'react';

import Instagram from '../assets/images/instagram_purple.svg';
import Github from '../assets/images/github_purple.svg';
import Linkedin from '../assets/images/linkedin_purple.svg';
import Baricade from '../assets/images/under-construction.svg';
import { Link } from 'react-router-dom';


const Footer = ()=>{
  return(
    <>
      {/* <div>
        <img style={styles.baricade} src={Baricade} />
      </div> */}
      <div style={styles.bottom_bar_container}>
        <div style={styles.bottom_bar}>
          <a href='https://instagram.com/faris1802' target='_blank'>
            <img style={styles.logo} src={Instagram} />
          </a>
          <a href='https://github.com/knocknockguesswho?tab=repositories' target='_blank'>
            <img style={styles.logo} src={Github} />
          </a>
          <a href='https://linkedin.com/in/farisromadhon' target='_blank'>
            <img style={styles.logo} src={Linkedin} />
          </a>
        </div>
      </div>
      {/* <div>
        <img style={styles.baricade} src={Baricade} />
      </div> */}
    </>
  )
}

const styles = {
  bottom_bar_container:{
    width: '30%',
    height: '6vh',
    // backgroundColor: '#000',
    margin: 'auto'
  },
  bottom_bar:{
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff65',
    borderTopLeftRadius: '100vh',
    borderTopRightRadius: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  logo:{
    width: '2vw'
  }
}

export default Footer;