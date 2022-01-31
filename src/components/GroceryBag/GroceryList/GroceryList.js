import GroceryItem from '../GroceryItem/GroceryItem'
import './GroceryList.css'

const GroceryList = ({ items, onFilterItems }) => {
  return (
    <ul className='grocery-list'>
      {items.map((item) => (
        <GroceryItem
          key={item.id}
          id={item.id}
          title={item.title}
          onFilterItems={onFilterItems}
        />
      ))}
    </ul>
  )
}

export default GroceryList
