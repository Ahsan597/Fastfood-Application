import React,{useState} from 'react';
import "./Product.css"
import { TextField } from '@mui/material';
import axios from 'axios';

export default function Product() {
    const [name, setName ] =useState('');
    const [price, setPrice ] =useState('');
    const [type, setType ] =useState('');
    // const [productQuantity, setProductQuantity] =useState('');
  

  // const handleProductNameChange = (e) => {
  //   setProductName(e.target.value);
  // };
  // const handleProductPriceChange = (e) => {
  //   setProductPrice(e.target.value);
  // };
  // const handleProductQuantityChange = (e) => {
  //   setProductQuantity(e.target.value);
  // };

  const submitHandler = (e) => {
    // e.preventDefault();
    axios.post('http://localhost:4000/foods/postfoods',{
      name,
      price,
      type
    })
    .then(response => { 
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    });
    if (!name || !price ||!type) {
      alert('Please fill in all fields');
    }
  }

  const handleChange = (func, value) => {
    func(value)
  }

  

    
  return (
    <div className='form101'>
      <div className='form1'>
        <p className='p1'>Enter Item name:</p>
        <TextField
          type='text'
          value={name}
          onChange={e => handleChange(setName, e.target.value)}
        /><br/>
        <p className='p1'>Enter Item price:</p>
        <TextField
          type='number'
          value={price}
          onChange={e => handleChange(setPrice, e.target.value)}
        /><br/>
        <p className='p1'>Enter type:</p>
        <TextField
          type='text'
          value={type}
          onChange={e => handleChange(setType, e.target.value)}
        /><br/>
        <button className='button' onClick={submitHandler}>Post</button>
      </div>
    </div>
  );
}
