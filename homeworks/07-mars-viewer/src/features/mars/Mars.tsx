import * as React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectSelectedSol, changeSelectedSol, loadDataFromNasa, selectStatus, selectPhotos } from './marsSlice'
import { Photo } from '../photo/Photo'
import styles from './Mars.module.css'

export const Mars: React.FC = () => {

  const selectedSol = useAppSelector(selectSelectedSol)
  const photos = useAppSelector(selectPhotos)
  const loadingStatus = useAppSelector(selectStatus)

  const dispatch = useAppDispatch()

  let textStatus: string

  switch (loadingStatus) {
    case 'idle':
      textStatus = 'Photos are not loaded'
      break
    case 'loading':
      textStatus = 'Loading...'
      break
    default:
      textStatus = 'Failed loaded try again'
  }

  const changeSolNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSelectedSol(+event.target.value))
  }

  const loadData: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(loadDataFromNasa(selectedSol))
  }

  return (
    <>
      <p>Select Sol and press "load"!</p>
      <input type="number" value={selectedSol} min="0" onChange={changeSolNumber} />
      <button onClick={loadData}>Load</button>

      <div className={styles.photoField}>
        {photos.filter(photo => photo.sol === selectedSol).map(photo => <Photo key={photo.id} {...photo} />)}
      </div>

      {photos.find(x => x.sol === selectedSol) ? null : <p>{textStatus}</p>}
    </>
  )
}
