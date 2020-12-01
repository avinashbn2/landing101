import React from 'react'
import styles from './text.module.scss'
interface IText {
  value: string
  variant: 'XS' | 'SM' | 'MD' | 'LG' | 'XL'
  type?: 'Italic'
  isBold?: boolean
}
const Text = ({ value, variant, type, isBold }: IText): JSX.Element => {
  return (
    <div
      className={`${styles.text} ${isBold?styles.textBold: '' } ${type ? styles[`text${type}`] : ''} ${
        variant ? styles[`text${variant}`] : ''
      }`}
    >
      {value}
    </div>
  )
}
export default Text
