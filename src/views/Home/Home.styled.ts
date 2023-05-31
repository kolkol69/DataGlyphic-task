import styled from 'styled-components'

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`

export const ListItem = styled.li`
  cursor: pointer;
  padding: 10px 15px;
  background-color: #f8f8f8;
  border-radius: 5px;

  &:hover {
    background-color: #e8e8e8;
  }
`
