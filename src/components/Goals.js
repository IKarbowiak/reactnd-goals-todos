import React from 'react'
import {connect} from 'react-redux'

import {
  handleSaveGoal,
  handleDeleteGoal,
} from '../actions/goals'
import List from './List'


class Goals extends React.Component {
  addGoal = (event) => {
      event.preventDefault()
      this.props.dispatch(
        handleSaveGoal(this.input.value, () => this.input.value = '')
      )
  }
  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(this.input.value))
  }
  render() {
      return (
          <div>
            <h1>Goals</h1>
            <input
                type="text"
                placeholder="Add goal"
                ref={(input) => this.input = input}
            />
            <button onClick={this.addGoal}>Add goal</button>
            <List items={this.props.goals} remove={this.removeItem}/>
          </div>
      )
  }
}

export default connect((state) => ({
  goals: state.goals
}))(Goals)
