import * as React from 'react'
import { Chart } from 'react-google-charts'

const chartEvents = [
	{
		callback: ({ chartWrapper, google }) => {
			const chart = chartWrapper.getChart()
			chart.container.addEventListener('click', ev => console.log(ev))
		},
		eventName: 'ready'
	}
]

const data = [
	['age', 'weight'],
	[8, 12],
	[4, 5.5],
	[11, 14],
	[4, 5],
	[3, 3.5],
	[6.5, 7]
]

const options = {
	title: 'Age vs. Weight comparison',
	hAxis: { title: 'Age', viewWindow: { min: 0, max: 15 } },
	vAxis: { title: 'Weight', viewWindow: { min: 0, max: 15 } },
	legend: 'none'
}
const ExampleChart = () => {
	return (
		<Chart
			chartType='ScatterChart'
			data={data}
			options={options}
			graphID='ScatterChart'
			width='100%'
			height='400px'
			chartEvents={chartEvents}
		/>
	)
}

export default ExampleChart
