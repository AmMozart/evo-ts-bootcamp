import * as React from 'react'
import { Photo } from '../photo/Photo'
import { useAppSelector } from '../../app/hooks'
import { selectFavoritesPhotos } from './favoritesSlice'
import { selectPhotos} from '../mars/marsSlice'
import styles from './Favorites.module.css'

export const Favorites: React.FC = () => {
  const favorites = useAppSelector(selectFavoritesPhotos)
  const photos = useAppSelector(selectPhotos)

  const status = favorites.length ? null : <p>No favorites photos, add some!</p>

  return (
    <>
      {status}
      <div className={styles.photoField}>
        {favorites.map(id => {
          const element = photos
            .find(x => id === x.id);

          if (element)
            return <Photo key={element.id} {...element} />
          else
            return null
        })}
      </div>
    </>
  )
}
