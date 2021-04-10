import React from 'react'
import ControlPanel from './ControlPanel'
import Status from './Status'
import SortField from './SortField'
import bubbleSort from '../utils/bubbleSort'
import style from './App.module.css'
import icon from '../Bolle.svg'

interface Props {
  arraySize: number,
  speed: number
}

interface State {
  array: number[],
  isSolved: boolean,
  inProcess: boolean
}

type CreateRandomArray = (size: number) => number[]

class App extends React.Component<Props, State> {
  timer: any

  constructor(props: Props) {
    super(props)
    this.state = {
      array: this.createRandomArray(props.arraySize),
      isSolved: false,
      inProcess: false
    }
  }

  createRandomArray: CreateRandomArray = size =>
    Array(size)
      .fill(0)
      .map(() => ~~(Math.random() * 200))

  update: React.MouseEventHandler<HTMLButtonElement> = event => {
    clearInterval(this.timer)
    this.setState({
      array: this.createRandomArray(this.props.arraySize),
      isSolved: false,
      inProcess: false
    })
  }

  start: React.MouseEventHandler<HTMLButtonElement> = event => {
    const { array, inProcess } = this.state
    const iterator = bubbleSort(array)

    if (inProcess) {
      clearInterval(this.timer)
    }
    else {
      this.timer = setInterval(() => {

        const newArray = iterator.next().value

        if (newArray) {
          this.setState({ array: newArray })
        } else {
          clearInterval(this.timer)
          this.setState({ inProcess: false, isSolved: true })
        }

      }, this.props.speed)
    }
    this.setState({ inProcess: !inProcess })
  }

  componentWillUnmount() {
    clearInterval(this.timer)
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