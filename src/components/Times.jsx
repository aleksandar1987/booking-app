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

const Times = ({ date, id }) => {
  const [event, setEvent] = useState(null);
  const [info, setInfo] = useState(false);
  const [user, setUser] = useState(null);
  const [bookedTimes, setBookedTimes] = useState([]);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.uid);
        firebase
          .firestore()
          .collection("profiles")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setProfile(doc.data());
            }
          });
      }
    });

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

  const handleBooking = (time) => {
    setInfo(true);
    setEvent(time);

    firebase
      .firestore()
      .collection("booked_times")
      .add({
        time,
        date: date.toDateString(),
        user: user,
        teacher: id,
        profile,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div>
      {times.map((time, index) => (
        <div key={index} className="times">
          <button
            disabled={bookedTimes.includes(time)}
            onClick={() => handleBooking(time)}
          >
            {time}
          </button>
        </div>
      ))}
      {info ? (
        <div>
          Your class is set to {event} {date.toDateString()}
        </div>
      ) : null}
    </div>
  );
};

export default Times;
