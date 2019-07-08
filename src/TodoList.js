import React from 'react';
import styled from '@emotion/styled';
import TodoItem from './TodoItem';

const UL = styled.ul(props => ({
  listStyle: 'none',
  padding: 0,
  margin: '0 auto',
  maxWidth: '400px',
  perspective: '150px',
  'li:nth-of-type(even)': {
    backgroundColor: 'lightgray',
    transform: 'rotate3d(.5, 0, 0, 3deg)'
  },
  'li:nth-of-type(odd)': {
    backgroundColor: 'gray',
    transform: 'rotate3d(.5, 0, 0, -3deg)'
  },
  ...props.css
}));

export default function TodoList({ items, onComplete, onDelete }) {
  const renderItems = () => {
    const todoItems = items.map(item => (
      <TodoItem key={`item-${item.id}`} item={item} onComplete={onComplete} onDelete={onDelete} />
    ));
    return todoItems;
  };

  return (
    <UL>
      {renderItems()}
    </UL>
  );
}
