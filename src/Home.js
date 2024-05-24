import React, { useState } from 'react';

function Home() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');//store tempory input value
  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const updateItem = (index, newValue) => {
    const newItems = [...items];
    newItems[index] = newValue;
    setItems(newItems);
  };

  return (
    <div>
      <h1>Simple CRUD App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter an item..."
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button>
            <button
              onClick={() => {
                const newValue = prompt('Enter new value', item);
                if (newValue !== null) {
                  updateItem(index, newValue);
                }
              }}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

