import React from 'react'

const ShoppingList = ({ list }) => {
	console.log('list = ', list)
	return (
		<div className='ingredients-list'>
      <h3 className='subheader'>
        Your Shopping List
      </h3>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
	)
}

export default ShoppingList