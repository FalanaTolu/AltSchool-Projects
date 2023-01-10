import React from 'react';

export default function InputUser({ onChange, onClick }) {
  return (
    <div className="input-bar">
      <input type="text" name="name" onChange={onChange} placeholder="Enter GitHub Username" />
      <button onClick={onClick}>Enter</button>
    </div>
  );
}
