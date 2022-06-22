import React, { useEffect, useState } from 'react';
import './showtourney.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'


function Showtourney() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/tournament', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        const items = await data.json();
        setItems(items);
    };


    const clickMe = async (item) => {

        // const oneItem = item;

        const res = await fetch('/cart', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                item
            }),
            credentials: "include"
        });

        const data = await res.json();

        console.log(item);
    };

    return (
        <div className="jumbotron">
            <section class="container-fluid bg">
                <section class="row justify-content-center">
                    <section class="col-12 col-sm-6 col-md-3">
                        <div className="bigbox">
                            <Link to ='/Team'><button type="button" className="btn btn-primary" id="btn1">CREATE YOUR TEAM</button></Link>
                            <div className="box">
                                <h1 className="h1">Active tournaments</h1>
                                {
                                    items.map(item => (
                                        <Link to='/Team'> <button type="button" class="btn btn-primary" id="btn"> Tournament by {item.cafename} for {item.game}</button></Link>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Showtourney
