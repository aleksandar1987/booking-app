import React from "react";
import StudentProfiles from "../components/StudentProfiles";
import TeacherProfiles from "../components/TeacherProfiles";



const Profile = () => {
  return (
    <div className="home1">
      <div>
        <StudentProfiles />
      </div>
      <div>
        <TeacherProfiles />
      </div>
    </div>
  );
};

export default Profile;
