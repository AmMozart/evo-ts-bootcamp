import * as React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addToFavorites, removeFromFavorites, selectFavoritesPhotos } from '../favorives/favoritesSlice'
import styles from './Like.module.css'

interface PropsLike {
  id: number
}

const COLOR = "#E30A17"

export const Like: React.FC<PropsLike> = ({ id }) => {

  const favorites = useAppSelector(selectFavoritesPhotos)
  const dispatch = useAppDispatch()

  const svgOpacity = favorites.indexOf(id) >= 0 ? "1" : "0.6"

  const handleClick: React.MouseEventHandler<SVGSVGElement> = () => {
    if (favorites.indexOf(id) >= 0)
      dispatch(removeFromFavorites(id))
    else
      dispatch(addToFavorites(id))
  }

  return (
    <>
      <svg className={styles.favorite} onClick={handleClick} viewBox="0 0 98 89" opacity={svgOpacity} xmlns="http://www.w3.org/2000/svg">
        <path d="M89.834 48.974L48.81 8.95 7.786 48.974 48.81 89l41.023-40.026z" fill={COLOR}></path>
        <path d="M59.467 29.381c0 16.022-13.312 29.01-29.733 29.01C13.311 58.391 0 45.403 0 29.381 0 13.36 13.312.371 29.733.371c16.422 0 29.734 12.989 29.734 29.01z" fill={COLOR}></path>
        <path d="M98 29.01c0 16.022-13.312 29.01-29.734 29.01-16.42 0-29.733-12.988-29.733-29.01C38.533 12.988 51.845 0 68.266 0 84.688 0 98 12.988 98 29.01z" fill={COLOR}></path>
      </svg>
    </>
  )
}
