import React from "react"
import {Bar} from "react-chartjs-2"

export default function BarGraphComponent({labels, data, colors}) {
	if ( labels.length === 0 || data.length === 0) return null
	
	
	// Style with cool colors! Monochromatic scale
	// Define options = {} before return
	
	const state = {
		labels: labels,
		datasets: [
			{
			label: "Years",
			backgroundColor: colors.length === labels.length? colors : colors[0],
			//borderColor: 'white',
			borderWidth: 2,
			data: data
			}
		]
  }
	
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		title:{
			display:false,
			text: "Years of experience",
			fontSize:20
		},
		legend:{
			display:false,
			position: "right"
		},
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true,
					min: 0,
					max: 6
				}
			}]
		}
	}
	
	return (
		<div className="bargraph-component">
			<Bar
				height={200}
				width={365}
				data={state}
				options={options}
			/>
		</div>
	)
}

BarGraphComponent.defaultProps ={
	labels: [],
	data: [],
	colors: ["whitesmoke"]
}