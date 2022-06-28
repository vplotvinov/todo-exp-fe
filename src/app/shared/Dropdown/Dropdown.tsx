import React, { useRef, useEffect, RefObject } from 'react'
import classNames from 'classnames'

import styles from './Dropdown.scss'
import usePortal from 'react-useportal'

interface DropdownProps {
  className?: string
  onClose(): void
  open: boolean
  children: React.ReactNode
  parent: RefObject<HTMLDivElement>
}

export function Dropdown({
  children,
  className,
  open,
  onClose,
}: DropdownProps) {
  const rootElem = useRef<HTMLDivElement>(null)
  // useOnClickOutside(rootElem, () => onClose())

  // useEffect(() => {
  //   if (open) {
  //     setTimeout(() => {
  //       rootElem.current.style.opacity = '1'
  //     })
  //   }
  // }, [open])

  const { Portal } = usePortal()

  return open ? (
    <Portal>
      <div className={styles.backdrop}></div>
      <div className={classNames(styles.menu, className)} ref={rootElem}>
        {children}
      </div>
    </Portal>
  ) : null
}

// function useOnClickOutside(ref, handler: () => void) {
//   useEffect(() => {
//     const listener = (event) => {
//       // Do nothing if clicking ref's element or descendent elements
//       if (!ref.current || ref.current.contains(event.target)) {
//         return
//       }
//       handler(event)
//     }
//     document.addEventListener('mousedown', listener)
//     document.addEventListener('touchstart', listener)
//     return () => {
//       document.removeEventListener('mousedown', listener)
//       document.removeEventListener('touchstart', listener)
//     }
//   }, [ref, handler])
// }
