import React from 'react'

import styles from './Workspace.css'
import { Background } from "../../components/Background";

export const Workspace: React.FC = () => {
  return (
    <React.Fragment>
      <Background />
      <div>
        <div className={styles.regionNorth}>
          Header {/*// todo: create new component */}
        </div>
        <div className={styles.regionCenter}>
          <div className={styles.left}>
            List menu {/*// todo: create new component */}
          </div>
          <div className={styles.center}>
            <div className={styles.todoListContainer}>
                task lists {/*// todo: create new component */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
