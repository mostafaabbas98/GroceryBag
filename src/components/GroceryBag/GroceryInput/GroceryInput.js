import { useState } from 'react'
import './GroceryInput.css'
import Button from '../UI/Button'
import styled from 'styled-components'

const Controls = styled.div`
  flex: 2;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & input {
    padding: 0.5rem 0.4rem;
    width: 100%;
    border: ${(props) => (props.invalid ? '1px solid #000' : '2px solid red')};
    border-radius: 8px;
    outline: none;
    font-size: 1rem;
    font-weight: 600;
  }

  & label {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.6rem;
  }
`

const GroceryInput = ({ setItems }) => {
  const [userInput, setUserInput] = useState('')
  const [isValid, setIsValid] = useState(true)

  const userInputHandel = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setUserInput(e.target.value)
  }
  const addInputHandel = () => {
    setUserInput('')
    const newItem = { title: userInput, id: Math.random().toString() }
    if (userInput.trim().length === 0) {
      setIsValid(false)
      return
    }
    setItems((prevState) => {
      return [newItem, ...prevState]
    })
  }
  return (
    <div className='grocery-input'>
      <Controls invalid={isValid}>
        <label>Grocery Item:</label>
        <input
          type='text'
          value={userInput}
          onChange={userInputHandel}
          placeholder='Enter grocery item...'
        />
      </Controls>
      <Button onClick={addInputHandel}>Add</Button>
    </div>
  )
}

export default GroceryInput
