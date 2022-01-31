import './GroceryItem.css'

const GroceryItem = ({ title, id, onFilterItems }) => {
  const filterHandler = () => {
    onFilterItems(id)
  }
  return (
    <li className='grocery-item' onClick={filterHandler}>
      <p id={id}>{title}</p>
    </li>
  )
}

export default GroceryItem
