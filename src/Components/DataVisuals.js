import React, {useState} from "react"
import {Bar, Doughnut} from "react-chartjs-2"
import personalFinancesData from "../personalfinancialdata.js"
import "./DataVisuals.css"

export default function DataVisuals() {

	function compileAccountsMonthly(data) {
		let monthlyAccounts = []
		let lookupTable = {}
		const categories = [
			"FOOD","GAS","RENT || UTILS","MAINTENANCE","WORK","TREAT || LUXURY",
			"CHARITY","TAKEOUT","OTHER","STUDENT LOANS","Investment","SAVINGS"]

		// Iterate data
		for (let i=0; i<data.length; i++) {
			const currentMonth = data[i].Date.slice(0,3) + data[i].Date.slice(-5)
			const currentRevenue =  Math.round(parseFloat( data[i]["Revenue"].replace("$","") ))
			const currentCosts = Math.round(-1*parseFloat( data[i]["Costs"].replace("$","") ))
			const currentCategories = data[i].Category.split(",")
			// Get index of currentMonth in array via lookupTable
			const monthIndex = lookupTable[currentMonth]

			if ( monthIndex >= 0 ) {
				// An object with currentMonth exists in array.
				// Access object via index and update its values
				monthlyAccounts[monthIndex]["Revenue"] += currentRevenue
				monthlyAccounts[monthIndex]["Costs"] += currentCosts

				for (let j=0; j<currentCategories.length; j++) {
					monthlyAccounts[monthIndex][currentCategories[j]] += (currentCosts === 0? currentRevenue: currentCosts)
				}
			}

			else {
				// An object with currentMonth does NOT exists in array.
				// Create new object, set values, push to array, and update lookupTable
				let newMonth = {}
				newMonth["Month"] = currentMonth
				newMonth["Revenue"] = currentRevenue
				newMonth["Costs"] = currentCosts
				for (let k=0; k<categories.length; k++) {
					newMonth[categories[k]] = currentCategories.includes(categories[k])? (currentCosts === 0? currentRevenue: currentCosts): 0
				}
				monthlyAccounts.push(newMonth)
				lookupTable[currentMonth] = (monthlyAccounts.length - 1)
			}
		}

		for (let i=0; i<monthlyAccounts.length; i++) {
			monthlyAccounts[i]["Total"] = monthlyAccounts[i]["Revenue"] + monthlyAccounts[i]["Costs"]
			for (let j=0; j<categories.length; j++) {
				monthlyAccounts[i][categories[j]] = Math.abs( monthlyAccounts[i][categories[j]] )
			}
		}

		/* REMOVE AUG 2018 and OCT 2019 */
		/* this will all data in year-long period */
		monthlyAccounts.shift()
		monthlyAccounts.pop()

		return (monthlyAccounts)
	}

	// Keeps index of object using an identifier key
	function createLookTable(arrayOfObjects) {
		const lt = {}
		const identifier = "Month"
		for(let i=0; i<arrayOfObjects.length; i++) {
			lt[arrayOfObjects[i][identifier]] = i
		}
		return ( lt )
	}


	const monthlyAccounts = compileAccountsMonthly(personalFinancesData)
	const lookupTableMonthly = createLookTable(monthlyAccounts)

	const expenseCategories = ["FOOD","GAS","RENT || UTILS","MAINTENANCE","TREAT || LUXURY","TAKEOUT","STUDENT LOANS"]
	const [currentMonth, setCurrentMonth] = useState(monthlyAccounts[0]["Month"])
	const [monthCategories, setMonthCategories] = useState( expenseCategories.map(cat => monthlyAccounts[0][cat]) )

	const selectOptions = monthlyAccounts.map((m, i) => {return <option key={m["Month"]} value={m["Month"]}>{m["Month"]}</option>})

	function handleChangeMonth(event) {
		const indexOfMonth = lookupTableMonthly[event.target.value]
		setCurrentMonth(event.target.value)
		setMonthCategories( expenseCategories.map(cat => monthlyAccounts[indexOfMonth][cat] ))
		console.log( monthlyAccounts[indexOfMonth] )
	}


	const doughnutChartMonthly = {
  	labels: expenseCategories,
  	datasets: [
    	{
      	label: 'Monthly expenses breakdown',
      	backgroundColor: [
        	'#B21F00',
        	'#C9DE00',
        	'#2FDE00',
        	'#00A6B4',
        	'#6800B4',
					'#B21FF0',
        	'#C9DEF0',
        	'#2FDEF0',
        	'#00A604',
        	'#680004',
					'#B21FF0'

      	],
      	hoverBackgroundColor: [
      		'#501800',
      		'#4B5000',
      		'#175000',
      		'#003350',
      		'#35014F',
					'#501800',
      		'#4B5000',
      		'#175000',
      		'#003350',
      		'#35014F',
					'#501800'
      	],
      	data: monthCategories
    	}
  	]
	}


	const barChartMonthly = {
  	labels: [currentMonth],
  	datasets: [
    	{
      	label: "Revenue",
      	backgroundColor: "green",
      	borderColor: "rgba(0,0,0,0)",
      	borderWidth: 1,
      	data: [ monthlyAccounts[lookupTableMonthly[currentMonth]]["Revenue"] ]
    	},
			{
      	label: "Costs",
      	backgroundColor: "firebrick",
      	borderColor: "rgba(0,0,0,0)",
      	borderWidth: 1,
      	data: [ Math.abs(monthlyAccounts[lookupTableMonthly[currentMonth]]["Costs"]) ]
    	}
  	]
	}



	const months = monthlyAccounts.map((m) => {return m["Month"]} )
	const monthlyRevenues = monthlyAccounts.map((m) => {return m["Revenue"]} )
	const monthlyCosts = monthlyAccounts.map((m) => {return -1*m["Costs"]} )

	const barChartAnnually = {
  	labels: months,
  	datasets: [
    	{
      	label: "Revenue",
      	backgroundColor: "green",
      	borderColor: "rgba(0,0,0,0)",
      	borderWidth: 1,
      	data: monthlyRevenues
    	},
			{
      	label: "Costs",
      	backgroundColor: "firebrick",
      	borderColor: "rgba(0,0,0,0)",
      	borderWidth: 1,
      	data: monthlyCosts
    	}
  	]
	}


	/*
		Start styling, then MOVE ON. (Take Scrimba TicTacToe course)
	*/

	return (
		<div className="DataVisuals-container">
			<h1>Data Visuals</h1>
			<p>
				Thinking about what data I could visualize, I searched the internet for datasets and APIs I could
				use but nothing really stood out. Until it dawned on me that I could use my own data! A couple years
				ago I decided to keep track of my expenses and I used airtable.com as my tool of choice. I kept track
				of all my paychecks and expenses and categorized them by type (maintanance, food (takeout?), luxury, etc). I took
				a year's worth of data as my sample data set and here are some conclusions I was able to make from that data
			</p>
			<br />
			<select
       value={currentMonth}
       onChange={handleChangeMonth}
       name="selectMonth"
			 className="selectMonth"
      >
				{selectOptions}
      </select>
			<br />

			<div className="charts-container">
			<div className="doughnutChart-container">
			<Doughnut
				data={doughnutChartMonthly}
				options={{
					responsive: true,
					maintainAspectRatio: false,
					title:{
						display:true,
						text:'Monthly expenses breakdown (USD)',
						fontSize:20
					},
					legend:{
						display:true,
						position:'left'
					}
				}}
			/>
			</div>

			<div className="barChart-container">
				<Bar
          data={barChartMonthly}
          options={{
						responseive: true,
						maintainAspectRatio: false,
            title:{
              display:true,
              text:'Monthly total revenue and expenses (USD)',
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom'
            },
						scales: {
      				yAxes: [{
          			ticks: {
              		beginAtZero:true
          			}
        			}]
     				}
          }}
        />
			</div>
			</div>

			<div style={{"width":"80%","display":"none"}}>
				<Bar
          data={barChartAnnually}
          options={{
						responseive: true,
						maintainAspectRatio: true,
            title:{
              display:true,
              text:'Total revenue and Costs per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom'
            }
          }}
        />
			</div>
			<br />
		</div>
	)
}
