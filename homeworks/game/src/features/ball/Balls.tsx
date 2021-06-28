import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeSelectedBall, selectSelectedBall } from './ballsSlice'
import eventBus from '../../utils/pubSub'
import { BusEvent } from '../../busTypes/eventTypes'

export const Balls = () => {
  const selectedBall = useAppSelector(selectSelectedBall)

  const dispatch = useAppDispatch()

  useEffect(() => {
    eventBus.subscribe(BusEvent.CHANGE_SELECTED_BALL, (payload) => {
      dispatch(changeSelectedBall(payload))
    })
  }, [])

  return null
}
