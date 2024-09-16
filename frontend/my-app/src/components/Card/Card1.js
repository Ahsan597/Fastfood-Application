import React from 'react';
import { Link } from "react-router-dom";
import "./Card1.css";

export default function Card1({item}) {
  const handlecart=()=>{
    
  }
  return (
    <div>
       <div className="card card2" style={{ width: "18rem", height:"20vh" }}>
            <img src="https://source.unsplash.com/random/900×700/?pasta" className="card-img-top imgcard rounded" alt="..." />
            <div className="card-body ">
              <p className="card-text contentbee">{item?.name}</p>
              <div className="container w-100 marginbox">
                <select className=" h-100 bg-success rounded">
                  {Array.from(Array(6),(e,i)=>{
                    return(
                      <option key={i+1} value={i+1}>{i+1}</option>
                    )
                  })}
                </select>
                <select className="m-1 h-100 bg-success rounded">
                  <option value="half">Small</option>
                  <option value="full">Medium</option>
                  <option value="full">Large</option>
                </select>
                <div className="h-100 d-inline fs-5">Total price: {item?.price}</div>
                <hr></hr>
                <button className='btn btn-success justify-center ms-2' onClick={handlecart}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
  );
}
