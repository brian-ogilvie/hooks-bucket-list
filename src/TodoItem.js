import React from 'react';
import styled from '@emotion/styled';

const ListItem = styled.li(props => ({
  '> p': {
    display: 'inline',
    margin: 0,
    fontSize: '1.5rem',
    textDecoration: props.completed ? 'line-through' : 'none'
  },
  transition: 'color .3s linear',
  color: props.completed ? 'rgba(0,0,0,.5)' : 'black',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,.3)',
  ...props.css
}));

const Checkbox = styled.input(props => ({
  transform: 'scale(1.5,1.5)',
  ...props.css
}));

export default function TodoItem({ item, onComplete, onDelete }) {
  const { id, title, completed } = item;
  return (
    <ListItem completed={completed}>
      <Checkbox type="checkbox" checked={completed} onChange={() => onComplete(id)} />
      <p>{title}</p>
      <button type="button" onClick={() => onDelete(id)}>X</button>
    </ListItem>
  );
}
