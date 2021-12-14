import './style.css';
import React, { useState } from 'react'

import Cell from "../Cell/index"

export default function Board() {

	let startArr =
		[
			{ color: "#627525", id: 12, status: "close" },



			{ color: "#18B09D", id: 0, status: "close" },



			{ color: "#352593", id: 1, status: "close" },



			{ color: "#14B30A", id: 13, status: "close" },


			{ color: "#847A31", id: 7, status: "close" },


			{ color: "#32C10E", id: 2, status: "close" },


			{ color: "#AAAA64", id: 9, status: "close" },


			{ color: "#B8B63C", id: 10, status: "close" },


			{ color: "#6647CA", id: 3, status: "close" },


			{ color: "#FE5BEC", id: 15, status: "close" },



			{ color: "#627525", id: 12, status: "close" },


			{ color: "#AAAA64", id: 9, status: "close" },



			{ color: "#847A31", id: 7, status: "close" },


			{ color: "#51DFE9", id: 17, status: "close" },


			{ color: "#51DFE9", id: 17, status: "close" },



			{ color: "#1C44D4", id: 5, status: "close" },


			{ color: "#0C714C", id: 6, status: "close" },


			{ color: "#18B09D", id: 0, status: "close" },


			{ color: "#B2E9E1", id: 14, status: "close" },



			{ color: "#6647CA", id: 3, status: "close" },


			{ color: "#5CE4BF", id: 8, status: "close" },


			{ color: "#0C714C", id: 6, status: "close" },


			{ color: "#B2E9E1", id: 14, status: "close" },


			{ color: "#76FCE0", id: 16, status: "close" },


			{ color: "#352593", id: 1, status: "close" },


			{ color: "#34C15A", id: 11, status: "close" },


			{ color: "#14B30A", id: 13, status: "close" },


			{ color: "#5CE4BF", id: 8, status: "close" },


			{ color: "#B8B63C", id: 10, status: "close" },


			{ color: "#32C10E", id: 2, status: "close" },


			{ color: "#FE5BEC", id: 15, status: "close" },


			{ color: "#756B7C", id: 4, status: "close" },


			{ color: "#1C44D4", id: 5, status: "close" },


			{ color: "#34C15A", id: 11, status: "close" },


			{ color: "#76FCE0", id: 16, status: "close" },


			{ color: "#756B7C", id: 4, status: "close" }
		]
	const [items, setItems] = useState(startArr)
	const [prev, setPrev] = useState(-1)

	// game data
	const sortFunc = (arr) => {
		return arr.sort(() => Math.random() - 0.5)
	}
	const getColors = () => {
		let colors = []
		for (let i = 0; i < 18; i++) {
			let color = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
			colors.push(color)
		}
		return colors
	}

	//start game whith game data
	const arrCell = []
	const startGame = () => {
		getColors()
		getColors().map((color, index) => {
			let cell = {
				id: index,
				color: color,
				status: 'close'
			}
			arrCell.push(cell)
			return arrCell
		})
		// setItems(sortFunc([...arrCell, ...arrCell]))
		return startArr = sortFunc([...arrCell, ...arrCell])
	}

	//game logic

	const check = (current) => {
		if (items[current].id === items[prev].id) {
			items[current].status = "correct"
			setItems([...items])
			items[prev].status = "correct"
			setTimeout(() => {
				setItems(items.filter(item => item.status !== 'correct'))
			}, 600)
			setItems([...items])
			setPrev(-1)
		} else {
			items[current].status = 'active'
			setItems([...items])
			setTimeout(() => {
				items[current].status = "wrong"
				items[prev].status = "wrong"
				setItems([...items])
			}, 400)
			setTimeout(() => {
				items[current].status = "close"
				items[prev].status = "close"
				setItems([...items])
				setPrev(-1)
			}, 600)
		}
	}

	const handleClick = (idx, item) => {
		if (prev === -1) {
			items[idx].status = 'active'
			setItems([...items])
			setPrev(idx)
		} else if (idx !== prev) {

			check(idx)
		}
	}

	return (
		<><button type="" onClick={startGame}>start</button>
			<div className="board">
				{items.map((item, i) => (
					<Cell key={i.toString()} item={item} idx={i.toString()} handleClick={handleClick} />
				))}
			</div>
		</>
	)

}