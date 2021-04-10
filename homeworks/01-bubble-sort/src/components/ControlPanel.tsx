import React from 'react'

type Props = {
  isSolved: boolean
  inProcess: boolean,
  update: React.MouseEventHandler<HTMLButtonElement>,
  start: React.MouseEventHandler<HTMLButtonElement>,
}

function ControlPanel({ isSolved, inProcess, update, start }: Props): JSX.Element {
  let btnName: string = inProcess ? 'Stop' : 'Start'

  return <>
    <button onClick={update}>
      New Set
    </button>

    <button disabled={isSolved} onClick={start}>
      {btnName}
    </button>
  </>
}

export default ControlPanel