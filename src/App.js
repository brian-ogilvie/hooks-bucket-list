/* eslint-disable arrow-parens */
import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { useLocalStorage } from './hooks';

function App() {
  const [items, setItems] = useLocalStorage('todoItems', [{
    id: 1,
    title: 'My first todo',
    completed: false
  }]);

  const sortItems = () => {
    return [...items].sort((a, b) => {
      if (a.title > b.title) return 1;
      return -1;
    });
  };

  const onComplete = id => {
    const index = items.findIndex(item => item.id === id);
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  const onDelete = id => {
    const index = items.findIndex(item => item.id === id);
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const addItem = item => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = {
      id,
      title: item,
      completed: false
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  return (
    <div className="App">
      <h1>Bucket List</h1>
      <AddTodoForm addItem={addItem} />
      <TodoList items={sortItems()} onComplete={onComplete} onDelete={onDelete} />
    </div>
  );
}

export default App;
