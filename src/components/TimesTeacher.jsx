import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const times = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
];

const TimesTeacher = ({ date, id }) => {
    const [bookedTimes, setBookedTimes] = useState([]);

    useEffect(() => {
        var query = firebase.firestore().collection("booked_times");
        query = query.where("date", "==", date.toDateString());
        query = query.where("teacher", "==", id);
        query.get().then((querySnapshot) => {
            let data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data().time);
            });
            setBookedTimes(data);
        });
    }, [date, id]);

    firebase.initializeApp({
        apiKey: "AIzaSyAQBqjjdIlBqUdenhEOfGg9Z_4gNRYs2M8",
        authDomain: "bookingapp-92a69.firebaseapp.com",
        databaseURL:
            "https://bookingapp-92a69-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "bookingapp-92a69",
        storageBucket: "bookingapp-92a69.appspot.com",
        messagingSenderId: "79355875629",
        appId: "1:79355875629:web:25794a2103ac27707103a4",
    });

    return (
        <div>
            {times.map((time, index) => (
                <div key={index} className="times">
                    <button
                        disabled={bookedTimes.includes(time)}
                    >
                        {time}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TimesTeacher;
