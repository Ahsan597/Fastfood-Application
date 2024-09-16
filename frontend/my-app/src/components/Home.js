import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Card1 from "./Card/Card1";
import axios from "axios";


export default function Home() {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([]);
  // const [data, setData] = useState({
  //   burger: [],
  // })
  const sectionRef = useRef(null);
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);
  const sectionRef5 = useRef(null);

  const handleScroll = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScroll1 = () => {
    sectionRef1.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScroll2 = () => {
    sectionRef2.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScroll3 = () => {
    sectionRef3.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScroll4 = () => {
    sectionRef4.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScroll5 = () => {
    sectionRef5.current.scrollIntoView({ behavior: "smooth" });
  };


  useEffect(() => {
    axios.get('http://localhost:4000/foods/getfoods')
      .then(response => {
        setItems(response.data);
        console.log(response.data)
        // console.log(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the items!', error);
      });
  }, []);
  // useEffect(()=>{
  //  const getData = async() => {
  //   try{
  //     setLoading(true)
  //     const res = await axios.get('http://localhost:4000/foods/getfoods')

  //     setData({
  //       burger: res.data.filter(item=> item.type === "burger"),

  //     })
  //     }
  //     catch(error){
  //       console.log(error)
  //     }
  //     finally{
  //       setLoading(false)
  //     }
  //  }
  //  getData();
  //  console.log(data)
  // },[])


  // if(loading){
  //   return <h1>Loading</h1>
  // }

  return (
    <div className="homeheight">
      <div className="">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{objectFit: "contain"}}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-item active">
              <img src="" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900×700/?fruit" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900×700/?fruit" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
      <div className="offer mid">
        <button className="button" onClick={handleScroll}>
          Burger
        </button>
        <button className="button" onClick={handleScroll1}>
          Pizza
        </button>
        <button className="button" onClick={handleScroll2}>
          Pasta
        </button>
        <button className="button" onClick={handleScroll3}>
          Fries
        </button>
        <button className="button" onClick={handleScroll4}>
          Special deals
        </button>
        <button className="button" onClick={handleScroll5}>
          {" "}
          Special duo
        </button>
        {/* <li className='button'>Special Pizza</li>
            <li className='button'>Special Burger</li>
            <li className='button'>Drinks</li>
            <li className='button'>Ice Cream</li> */}
      </div>
      <div className="alloffers m-3">
        <div className=" bcom burger">
          <h2 className="bottom" ref={sectionRef}>
            Burger
          </h2>
          <div className="CARDDIVS">
          {items.map(item => (
          <li key={item._id}>{item.name} - {item.price}</li>
        ))}
            {/* { */}
              {/* // data?.burger?.map(item => */}
              {/* //   <Card1 item={item} key={item.id}/> */}
              {/* // ) */}
            {/* // } */}
          </div>
        </div>
        <div className="bcom pizza"></div>
        <h2 className="bottom" ref={sectionRef1}>
          Pizza
        </h2>
        <div className="CARDDIVS">
            <Card1/>
            <Card1/>
            <Card1/>
          </div>
        {/* <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Pizza</h5>
            <p className="card-text">Extra beef + cheese</p>
            <Link to="/" className="btn btn-primary">
              Add to cart
            </Link>
          </div>
        </div> */}
        <div className=" bcom burger">
          <h2 className="bottom" ref={sectionRef2}>
            Pasta
          </h2>
          <div className="CARDDIVS">
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
          </div>
          {/* <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">small burger</h5>
              <p className="card-text">Extra beef + cheese</p>
              <Link to="/" className="btn btn-primary">
                Add to Cart
              </Link>
            </div> */}
          {/* </div> */}
        </div>
        <div className=" bcom burger">
          <h2 className="bottom" ref={sectionRef3}>
            Fries
          </h2>
          <div className="CARDDIVS">
            <Card1/>
            <Card1/>
            <Card1/>
          </div>
          {/* <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">small burger</h5>
              <p className="card-text">Extra beef + cheese</p>
              <Link to="/" className="btn btn-primary">
                Add to Cart
              </Link>
            </div>
          </div> */}
        </div>
        <div className=" bcom burger">
          <h2 className="bottom" ref={sectionRef4}>
            Special Deals
          </h2>
          <div className="CARDDIVS">
            <Card1/>
            <Card1/>
            <Card1/>
          </div>
          {/* <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">small burger</h5>
              <p className="card-text">Extra beef + cheese</p>
              <Link to="/" className="btn btn-primary">
                Add to Cart
              </Link>
            </div>
          </div> */}
        </div>
        <div className=" bcom burger">
          <h2 className="bottom" ref={sectionRef5}>
            Special Duo
          </h2>
          <div className="CARDDIVS">
            <Card1/>
            <Card1/>
          </div>
          
          {/* <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">small burger</h5>
              <p className="card-text">Extra beef + cheese</p>
              <Link to="/" className="btn btn-primary">
                Add to Cart
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
