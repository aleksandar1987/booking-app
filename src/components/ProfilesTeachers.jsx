import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useState, useEffect } from "react";


const ProfilesTeachers = () => {
    const [account, setAccount] = useState([]);
    // eslint-disable-next-line
    const [user, loading] = useAuthState(auth);

    const getAccount = async () => {

        const response = await fetch(
            `https://bookingapp-92a69-default-rtdb.europe-west1.firebasedatabase.app/Teacher.json`,
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

    return (
        <div className="home2">
            <div className="container">
                {account.map((a) => {
                    return (
                        <div key={a[0]}>
                            <div>
                                <img src={a[1].img} alt="" />
                            </div>
                            <div>
                                <h2>Last name: {a[1].lastname}</h2>
                            </div>
                            <div>
                                <h2>Name: {a[1].name}</h2>
                            </div>
                            <div>
                                <h2>Average Score: {a[1].score}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProfilesTeachers;
