
import React from 'react';
import styles from './header.module.scss'
import Button from '../Button/index'
import { Col, Row } from 'react-grid-system';
interface IHeader {
}

  const Header= ({}:IHeader): JSX.Element => {

  return  (
    <header className={styles.header}>
<Col offset={{md:1}} md={4}>
      <ul className={styles.headerNav}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </Col>
    <Col md={2}>
           <Button value="- 01 702 904213" />
     </Col>
    </header>
  )
}
export default Header
