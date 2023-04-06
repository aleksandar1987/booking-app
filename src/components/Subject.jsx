import React from "react";
import { useNavigate } from "react-router-dom";


const Subject = ({ id, img, lastname, name, score }) => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/booking/` + id;
        navigate(path);
    }
    return (
        <div>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2>Last name: {lastname}</h2>
            </div>
            <div>
                <h2>Name: {name}</h2>
            </div>
            <div>
                <h2>Score: {score}</h2>
            </div>
            <div className="times1">
                <button onClick={routeChange}>Book a class</button>
            </div>
        </div>
    );
}

export default Subject;