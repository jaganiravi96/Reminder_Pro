import React, { Component } from 'react'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='App'>
				<div className='title'>Reminder Pro</div>
				<div className='form-inline reminder-form'>
					<div className='form-group'>
						<input className='form-control' placeholder='I have to...' />
						<input className='form-control' type='datetime-local' />
					</div>
					<button type='button' className='btn btn-success'>
						Add Reminder
					</button>
				</div>
				<div className='btn btn-danger'>Clear Reminders</div>
			</div>
		)
	}
}

export default App
