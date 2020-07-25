import React, { Component } from 'react';
import styles from '../assets/styles/Home.module.css';
import Excavator from '../assets/images/excavator.svg';
import Footer from '../components/Footer'

export default class Home extends Component{
  constructor(){
    super()
  }
  
  render(){
    return(
      <div className={styles.window_container}>
        <div className={styles.header}>

        </div>
        <div className={styles.main}>
          <div className={styles.excavator_container}>
            <div className={styles.excavator_1}>
              <img className={styles.excavator} src={Excavator}/>
            </div>
            <div className={styles.excavator_2}>
              <img className={styles.excavator} src={Excavator}/>
            </div>
          </div>
          <div className={styles.warning_paragraph_container}>
            <p className={styles.warning_paragraph}>
              Our Page is Under Construction
            </p>
          </div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    )
  }
}