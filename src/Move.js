import React, { useState } from 'react';

function Move() {
  const [items, setItems] = useState([]); //original all values are stored 
  const [inputName, setInputName] = useState('');//these three are tempory varaible for current storage
  const [inputAge, setInputAge] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const addItem = () => {
    if (inputName.trim() !== '' && inputAge.trim() !== '' && inputEmail.trim() !== '') {
      const newItems=[...items,{name:inputName,age:inputAge,email:inputEmail}];
      setItems(newItems);
      setInputName('');
      setInputAge('');
      setInputEmail('');
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
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="Enter name..."
      />
      <input
        type="text"
        value={inputAge}
        onChange={(e) => setInputAge(e.target.value)}
        placeholder="Enter age..."
      />
      <input
        type="text"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
        placeholder="Enter email..."
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            Name: {item.name}, Age: {item.age}, Email: {item.email}
            <button onClick={() => deleteItem(index)}>Delete</button>
            <button
              onClick={() => {
                const newName = prompt('Enter new name', item.name);
                const newAge = prompt('Enter new age', item.age);
                const newEmail = prompt('Enter new email', item.email);
                if (newName !== null && newAge !== null && newEmail !== null) {
                  updateItem(index, { name: newName, age: newAge, email: newEmail });
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

export default Move;
