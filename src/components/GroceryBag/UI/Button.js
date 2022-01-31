import styled from 'styled-components'

const Button = styled.button`
  width: 20%;
  padding: 0.5rem;
  outline: none;
  border: 1px solid #000;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    background-color: #23072c;
    border-color: #fff;
    color: #fff;
  }
`

export default Button
