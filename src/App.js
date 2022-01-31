import GroceryList from './components/GroceryBag/GroceryList/GroceryList'
import GroceryInput from './components/GroceryBag/GroceryInput/GroceryInput'

import './index.css'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([
    { title: 'Egg', id: 'el1' },
    { title: 'Brade', id: 'el2' },
    { title: 'Orange', id: 'el3' },
  ])

  const filterItemHandler = (itemsID) => {
    const filterItems = items.filter((item) => item.id !== itemsID)
    setItems(filterItems)
  }
  return (
    <div className='App'>
      <GroceryInput setItems={setItems} />
      {items.length === 0 ? (
        <h2 className='noitem-text'>No items in bag</h2>
      ) : (
        <GroceryList items={items} onFilterItems={filterItemHandler} />
      )}
    </div>
  )
}

export default App
