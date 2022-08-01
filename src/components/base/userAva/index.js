import React from 'react'
import styles from './UserAva.module.css'

const UserAva = ({source, style, onMouseOver, onMouseLeave, className, children}) => {
  return (
    <div 
      style={style}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      className={className}
    >
        <img
            src={source} 
            alt=''
            className={`${styles['image']}`}
        />
        {children}
    </div>
  )
}

export default UserAva