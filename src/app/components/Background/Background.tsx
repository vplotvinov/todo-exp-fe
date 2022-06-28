import React from 'react'
import usePortal from 'react-useportal'
import classNames from 'classnames'

import styles from './Background.scss'

export function Background() {
  const { Portal } = usePortal({
    bindTo: document.querySelector('#theme') as HTMLElement,
  })

  return (
    <Portal>
      <div className={classNames(styles.root, styles.authed)} />
    </Portal>
  )
}
