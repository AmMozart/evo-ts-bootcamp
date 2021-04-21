import React from 'react'
import ControlPanel from './ControlPanel'
import Status from './Status'
import SortField from './SortField'
import bubbleSort from '../utils/bubbleSort'
import style from './App.module.css'
import icon from '../Bolle.svg'
import { createRandomArray } from '../utils/createRandomArray'

interface Props {
  arraySize: number,
  speed: number
}

interface State {
  array: number[],
  isSolved: boolean,
  inProcess: boolean
}

class App extends React.Component<Props, State> {
  private timer?: NodeJS.Timeout

  state = {
    array: createRandomArray(this.props.arraySize),
    isSolved: false,
    inProcess: false
  }

  constructor(props: Props) {
    super(props)
  }

  private update: React.MouseEventHandler<HTMLButtonElement> = event => {
    this.clearTimer(this.timer)

    this.setState({
      array: createRandomArray(this.props.arraySize),
      isSolved: false,
      inProcess: false
    })
  }

  private start: React.MouseEventHandler<HTMLButtonElement> = event => {
    const { array, inProcess } = this.state
    const iterator = bubbleSort(array)

    if (inProcess) {
      this.clearTimer(this.timer)
    }
    else {
      this.timer = setInterval(() => {

        const newArray = iterator.next().value

        if (newArray) {
          this.setState({ array: newArray })
        } else {
          if (this.timer) clearInterval(this.timer)
          this.setState({ inProcess: false, isSolved: true })
        }

      }, this.props.speed)
    }
    this.setState({ inProcess: !inProcess })
  }

  private clearTimer = (timer: undefined | NodeJS.Timeout) => {
    if (timer) clearInterval(timer);
  }

  render() {
    const { array, isSolved, inProcess } = this.state
    return (
      <main className={style.app}>
        <h1>Bubble Sort</h1>
        <img className={style.icon} src={icon} alt="bubble" />
        <SortField array={array} />
        <ControlPanel
          inProcess={inProcess}
          start={this.start}
          update={this.update}
          isSolved={isSolved} />
        <Status text={isSolved ? 'Solved' : 'Not Solved'} />
      </main>
    )
  }
}

export default App