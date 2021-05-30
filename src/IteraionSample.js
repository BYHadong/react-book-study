import React, { useState } from 'react';

const IterationSample = () => {
  const [users, setUsers] = useState([{ id: 1, name: 'Name' }]);
  const [number, setNumber] = useState(2);
  const [inputData, setInputData] = useState('');

  const handleDoubleClick = (user) => {
    setUsers((users) => users.filter((userData) => userData.id !== user.id));
  };

  const handleOnChange = (e) => {
    setInputData(e.target.value);
  };

  const handleOnClick = () => {
    var name = inputData;
    setUsers([...users, { id: number, name: name }]);
    setNumber((number) => number + 1);
    setInputData('');
  };

  const namesList = users.map((user, index) => (
    <li key={index} onDoubleClick={() => handleDoubleClick(user)}>
      User Num : {user.id} User Name : {user.name}
    </li>
  ));

  return (
    <div>
      <input value={inputData} onChange={handleOnChange} />
      <ul>{namesList}</ul>
      <button onClick={handleOnClick}>button</button>
    </div>
  );
};

export default IterationSample;
