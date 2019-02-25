import React, { Component } from 'react'
import styles from './container.module.css'

class Container extends Component {
  render() {
    return (
      <div className={syltes.container}>
        {children}
      </div>
    )
  }
}

export default Container
