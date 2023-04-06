import React from "react";
import { useNavigate } from "react-router-dom";



const StartPage = () => {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/login`;
        navigate(path);
    }
    let navigate1 = useNavigate();
    const routeChange1 = () => {
        let path = `/teachers`;
        navigate1(path);
    }
    let navigate2 = useNavigate();
    const routeChange2 = () => {
        let path = `/students`;
        navigate2(path);
    }



    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">❤❤Taca School❤❤</span>
                <div className="times2">
                    <button onClick={routeChange}>Login  to  Profile</button>
                </div>
                <div className="times2">
                    <button onClick={routeChange1}>Teachers Profiles</button>
                </div>
                <div className="times2">
                    <button onClick={routeChange2}>Students Profiles</button>
                </div>
            </div>
        </div>
    );
};

export default StartPage;
