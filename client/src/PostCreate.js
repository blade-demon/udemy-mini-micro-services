/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import axios from 'axios';

export default () => {
  const [title, setTitle] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:4000/posts', { title });
    console.log(response);
  }
  return (
    <div>
      <form onSubmit={onSubmit} >
        <div className="form-group">
          <label>Title</label>
          <input value={title} className="form-control" onChange={e => setTitle(e.target.value)}></input>
        </div>
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}