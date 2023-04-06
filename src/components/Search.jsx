import React, { useEffect, useState } from "react";
import Subject from "./Subject";


const Search = () => {
    const [value, setValue] = useState("");
    const [result, setResult] = useState([]);
    const [subject, setSubject] = useState([]);

    useEffect(() => {
        if (value.length > 0) {
            fetch(`https://bookingapp-92a69-default-rtdb.europe-west1.firebasedatabase.app/Teacher.json`).then(
                response => response.json()
            ).then(responseData => {
                setResult([])
                let searchQuery = value.toLowerCase();
                for (const key in responseData) {
                    let predmet = responseData[key].predmet.toLowerCase();
                    if (predmet.slice(0, searchQuery.length).indexOf(searchQuery) !== -1) {
                        setResult(prevResult => {

                            return [...prevResult, responseData[key].predmet]
                        });
                    }
                }
            }).catch(error => {
                console.log(error);
            })
        } else {
            setResult([])
        }


    }, [value]);

    const getSubjectData = async () => {

        const response = await fetch(
            `https://bookingapp-92a69-default-rtdb.europe-west1.firebasedatabase.app/Teacher.json?orderBy="predmet"&equalTo="${result[0]}"`
        );
        const data = await response.json();


        const res = [];
        for (let i in data) {
            res.push([i, data[i]]);
        }

        setSubject(res);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getSubjectData();
    }


    return (
        <div className="home">
            <div className="searchForm">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Find a class"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                </form>
            </div>
            <div className="container">
                {subject.map((sub, index) => {
                    return <Subject id={sub[1].uid} img={sub[1].img} lastname={sub[1].lastname} name={sub[1].name} score={sub[1].score} key={index} />
                })
                }
            </div>
        </div>
    );
};

export default Search;