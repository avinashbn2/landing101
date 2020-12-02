import React from 'react'
import styles from './footer.module.scss'
import { Col, Row } from 'react-grid-system'

interface IFooter {}

const Footer = ({}: IFooter): JSX.Element => {
  return (
    <footer>
      <img src="/assets/logo.svg" alt="moo" />

      <div className={styles.footer}>
        <ul className={styles.footerNav}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
