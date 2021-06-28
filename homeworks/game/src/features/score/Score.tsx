import React, { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectPlayer1Score, selectPlayer2Score } from './scoreSlice'
import styles from './Score.module.css'

export const Score = () => {
  const player1Score = useAppSelector(selectPlayer1Score)
  const player2Score = useAppSelector(selectPlayer2Score)


  useEffect(() => {
    // publisherSubscriper.subscribe('changeBall', (type, payload) => {
    //   console.log(type, payload)
    // })
  }, [])

  useEffect(() => {
    console.log('player1Score: ', player1Score)
    console.log('player2Score: ', player2Score)
  }, [player1Score, player2Score])

  return (
    <>
      <div className={styles.scorePlayer1}>
        Player1 Score: {player1Score}
      </div>
      <div className={styles.scorePlayer2}>
        Player2 Score: {player2Score}
      </div>
    </>
  )
}
