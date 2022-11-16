// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    input: '',
    count: 0,
  }

  render() {
    const {input, count} = this.state

    this.onTrigger = event => {
      this.setState({input: event.target.value})

      this.setState(prevState => ({count: prevState.count + input.length}))
    }

    this.resetToZero = () => {
      this.setState({count: 0})
      this.setState({input: ''})
    }

    return (
      <div className="bg-conatiner">
        <div className="content-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-container">
            <label className="span-element" htmlFor="input">
              Enter the phrase
            </label>
            <input
              onChange={this.onTrigger}
              value={input}
              className="input-element"
              id="input"
              type="text"
              placeholder="Enter the phrase"
            />
          </div>
          <button
            onClick={this.resetToZero}
            className="button-style"
            type="button"
          >
            <p>No.of letters: {count}</p>
          </button>
        </div>

        <img
          className="image"
          alt="letters calculator"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
      </div>
    )
  }
}

export default LettersCalculator
