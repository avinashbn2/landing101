import React from 'react'

import styles from './header.module.scss'
import Button from '../Button/index'
import { Col, Container, Row } from 'react-grid-system'
interface IHeader {
  active?: string
}

const Header = ({ active = '' }: IHeader): JSX.Element => {
  return (
    // <header className={styles.header}>
    <Container fluid>
      <Row align="center">
        <Col sm={10} md={5} offset={{ sm: 1, md: 1 }}>
          <ul className={styles.headerNav}>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/about">
              <li className={active === 'about' ? styles.active : ''}>About</li>
            </a>
            <a href="/contact">
              <li className={active === 'contact' ? styles.active : ''}>Contact</li>
            </a>
          </ul>
        </Col>
        <Col sm={10} md={2} offset={{ sm: 1, md: 5 }} style={{ marginLeft: 'auto' }}>
          <Button value="- 01 702 904213" />
        </Col>
      </Row>
    </Container>
    // </header>
  )
}
export default Header
