import React from 'react'
import './style.css';

export default function Cell({ item, idx, handleClick }) {
	let itemColor
	if (item.status === 'active') {
		itemColor = item.color
	}
	if (item.status === 'correct') {
		itemColor = item.color
	}
	if (item.status === 'close') {
		itemColor = '#ccc'
	}
	if (item.status === 'wrong') {
		itemColor = 'white'
	}

	return (
		<>
			<div className='cell'
				style={{ backgroundColor: itemColor }}
				onClick={() => {
					handleClick(idx, item)
				}}>
				{/* {item.id} */}
			</div>
		</>
	)
}
