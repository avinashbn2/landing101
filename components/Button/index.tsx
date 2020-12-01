
import React from 'react';
import styles from './button.module.scss'
interface IButton {
  value: string
}

  const Button= ({value}:IButton ): JSX.Element => {

  return  (
    <button className={styles.button}>{value}</button>
  )
}
export default Button
