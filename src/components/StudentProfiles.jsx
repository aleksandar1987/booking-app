import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StudentProfiles = () => {
  const [account, setAccount] = useState([]);
  // eslint-disable-next-line
  const [user, loading] = useAuthState(auth);

  const getAccount = async () => {

    const response = await fetch(
      `https://bookingapp-92a69-default-rtdb.europe-west1.firebasedatabase.app/Student.json?orderBy="uid"&equalTo="${user.uid}"`
    );
    const data = await response.json();


    const res = [];
    for (let i in data) {
      res.push([i, data[i]]);
    }

    setAccount(res);
  };

  useEffect(() => {
    getAccount();
    // eslint-disable-next-line
  }, []);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/search`;
    navigate(path);
  }


  return (
    <div>
      {account.map((a) => {
        return (
          <div key={a[0]}>
            <div>
              <img src={a[1].img} alt="" />
            </div>
            <div>
              <h2>Name: {a[1].name}</h2>
            </div>
            <div>
              <h2>Last Name: {a[1].lastname}</h2>
            </div>
            <div>
              <h2>Course: {a[1].study}</h2>
            </div>
            <div className="times1">
              <button onClick={routeChange}>Search</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StudentProfiles;
