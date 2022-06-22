import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './teamstyle.css'
import { Navigate, useNavigate } from 'react-router';

function Team() {
    const navigate = useNavigate();

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const [team, setTeam] = useState({
        teamname: "", tourney: "", captain: "", contactno: "", address: ""
    });


    var name, value;
    const handleInputs = (e) => {
        console.log(e);

        name = e.target.name;
        value = e.target.value;
        // alert(`${name} ${value}`);
        setTeam({ ...team, [name]: value });
    }


    const PostData = async (e) => {
        e.preventDefault();

        const { teamname, tourney, captain, contactno, address } = team;

        const resp = await fetch("/teamadd", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                teamname, tourney, captain, contactno, address
            }),
        });
        alert("Team Created");
        navigate("/Showtourney");
        const data = await resp.json();
    }



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



    return (
        <div class="jumbotron">
            <section class="container-fluid bg">
                <section class="row justify-content-center">
                    <section class="col-12 col-sm-6 col-md-3">
                        <div class="form-main">
                            <h1 id="intro">CREATE TEAM</h1>
                            <form class="form-containers" method="POST">
                                <div className="form-groups">
                                    <label for="teamname">TEAM NAME</label>
                                    <input type="text" className="form-controls" name="teamname"
                                        value={team.teamname}
                                        onChange={handleInputs}
                                        placeholder="Enter teamname" />
                                </div>
                                <br />

                                <div class="custom-control custom-radio">
                                    {
                                        items.map(item => (
                                            <div >
                                                <input type="radio" id="customRadio1" name="tourney" class="custom-control-input" value={item.cafename} onChange={handleInputs} />
                                                <label class="custom-control-label" for="customRadio1">{item.cafename}</label>
                                            </div>
                                        ))
                                    }
                                </div>


                                <div className="form-groups">
                                    <label for="captain">CAPTAIN</label>
                                    <input type="text" className="form-controls" name="captain"
                                        value={team.captain}
                                        onChange={handleInputs}
                                        placeholder="Enter captain name" />
                                </div>
                                <br />
                                <div className="form-groups">
                                    <label for="contactno">CONTACT NO</label>
                                    <input type="number" className="form-controls" name="contactno"
                                        value={team.contactno}
                                        onChange={handleInputs}
                                        placeholder="Enter contact no" />
                                </div>
                                <br />
                                <div className="form-groups">
                                    <label for="address">ADDRESS</label>
                                    <textarea className="form-controls" name="address"
                                        value={team.address}
                                        onChange={handleInputs}
                                        placeholder="Enter address" />
                                </div>
                                <br />

                                <button type="submit" className="btn btn-primary btn-block" id="btn" name="signup-btn" onClick={PostData}>Create</button>
                            </form>
                        </div>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Team
