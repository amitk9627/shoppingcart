import React, { useState, useEffect, useContext } from 'react'
import axios from "axios";
import Navbar from '../Component/Navbar'
import { Cartcontext } from '../context/Context';

const Home = () => {
    const [data, setdata] = useState([]);
    const fetchData = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        setdata(response.data);
        // console.log(data);
    };
    useEffect(() => {
        fetchData();
    },[]);
    const Globalstate = useContext(Cartcontext);
    const dispatch = Globalstate.dispatch;
    // console.log(Globalstate);
    return (
        <>
            <Navbar />
            <div className="home">
                {data.map((item, index) => {
                    item.quantity = 1;
                    return (
                        <div className="card" key={index}>
                            <img src={item.image} alt="" />
                            <p>{item.title}</p>
                            <h3>$. {item.price}</h3>
                            <button onClick={()=>dispatch({ type: "ADD", payload: item })}>
                                Add to cart
                            </button>
                        </div>
                    );
                })}
            </div>

        </>
    )
}

export default Home
