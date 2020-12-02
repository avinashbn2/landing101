import React from 'react'

import styles from './header.module.scss'
import Button from '../Button/index'
import { Col, Row } from 'react-grid-system'
interface IHeader {
  active?: string
}

const Header = ({ active = '' }: IHeader): JSX.Element => {
  return (
    <header className={styles.header}>
      <Col offset={{ md: 1 }} md={4}>
        <ul className={styles.headerNav}>
          <a href="/">
            <li className={!active ? styles.active : ''}>Home</li>
          </a>
          <a href="/about">
            <li className={active === 'about' ? styles.active : ''}>About</li>
          </a>
          <a href="/contact">
            <li className={active === 'contact' ? styles.active : ''}>Contact</li>
          </a>
        </ul>
      </Col>
      <Col md={2}>
        <Button value="- 01 702 904213" />
      </Col>
    </header>
  )
}
export default Header
