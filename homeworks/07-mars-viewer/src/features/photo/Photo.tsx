import * as React from 'react'
import { Photos } from '../mars/nasaAPI'
import { Like } from './Like'
import styles from './Photo.module.css'

export const Photo: React.FC<Photos> = ({ img_src, camera, rover, id }) => {

  const imgTitle = `Rover: ${rover.name}, Camera: ${camera.full_name}`

  return (
    <div className={styles.photo}>
      <Like id={id} />
      <img alt={imgTitle} src={img_src} />
      <span>{imgTitle}</span>
    </div>
  )
}
