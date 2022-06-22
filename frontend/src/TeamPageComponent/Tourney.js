import React,{useState} from 'react'
import './tourney11.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigate, useNavigate } from 'react-router';

function Tourney() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        cafename: "", contactno: "", state: "", address: "", game: "", date: "", prizepool: ""
    });

    var name, value;
    const handleInputs = (e) => {
        console.log(e);

        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    

    const PostData = async (e) => {
        e.preventDefault();

        const { cafename, contactno, state, address, game, date, prizepool } = user;

        const resp = await fetch("/tournament", {
            method: "POST",
            headers: {
                 Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cafename, contactno, state, address, game, date, prizepool
            }),
            credentials: "include"
        });

        alert('Tournament Created');
        navigate('/Showtourney')
        const data = await resp.json();

        

    }

    return (
        <div class="jumbotron">
            <section class="container-fluid bg">
                <section class="row justify-content-center">
                    <section class="col-12 col-sm-6 col-md-3">
                        <form class="form-container" method="POST">
                            <div className="start">
                                <h1>TOURNAMENT DETAILS</h1>
                            </div>
                            <div className="form-group">
                                <label for="cafename">cafename</label>
                                <input type="text" className="form-control" name="cafename"
                                    value={user.cafename}
                                    onChange={handleInputs}
                                    placeholder="Enter cafename" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label for="contactno">Contactno</label>
                                <input type="number" className="form-control" name="contactno"
                                    value={user.contactno}
                                    onChange={handleInputs}
                                    placeholder="Enter contactno" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label for="state">State</label>
                                <input type="password" className="form-control" name="state"
                                    value={user.state}
                                    onChange={handleInputs}
                                    placeholder="Enter State" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label for="address">Address</label>
                                <textarea className="form-control" name="address"
                                    value={user.address}
                                    onChange={handleInputs}
                                    placeholder="Enter address" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label for="game">Game</label>
                                <input type="text" className="form-control" name="game"
                                    value={user.game}
                                    onChange={handleInputs}
                                    placeholder="Enter Game" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label for="date">Play Day</label>
                                <input type="date" className="form-control" name="date"
                                    value={user.date}
                                    onChange={handleInputs}
                                    placeholder="Enter date" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label for="prizepool">Prizepool</label>
                                <input type="number" className="form-control" name="prizepool"
                                    value={user.prizepool}
                                    onChange={handleInputs}
                                    placeholder="Enter prizepool" />
                            </div>
                            <br />
                            
                            <button type="submit" className="btn btn-primary btn-block" id="btn" name="signup-btn" onClick={PostData}>Submit</button>
                        </form>


                    </section>
                </section>
            </section>
        </div>
    )
}

export default Tourney
