import React from 'react'

type Props = {
  text: string
}

function Status({ text }: Props): JSX.Element {
  return <>
    <p>{text}</p>
  </>
}

export default Status