/* eslint-disable no-console */
/* eslint-disable arrow-parens */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { createRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { useInput } from './hooks';

const Form = styled.form(props => ({
  '> input': {
    margin: '10px'
  },
  margin: '20px',
  textAlign: 'center',
  ...props.css
}));

export default function AddTodoForm({ addItem }) {
  const [title, resetTitle, inputProps] = useInput('');

  const inputField = createRef();

  useEffect(() => inputField.current.focus());

  const onFormSubmit = e => {
    e.preventDefault();
    addItem(title);
    resetTitle();
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <label htmlFor="item">New Item:</label>
      <input type="text" name="item" {...inputProps} ref={inputField} />
      <button type="submit">Add new item</button>
    </Form>
  );
}
