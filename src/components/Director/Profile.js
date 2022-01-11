import React, { useEffect } from "react";
import "./Profile.css";

function Profile(person) {

  return (
    <div className="profiler">
      <div className="profile_image">
        <img src={person.image} />
        <i
          className="fa fa-info-circle fa-2x"
          id="button"
          aria-hidden="true"
          onClick={person.showProfile}
        ></i>
      </div>
      <div className="profile_info">
        <h3 className="profile_name">{person.name}</h3>
        <p className="profile_desc">{person.title}</p>
        <p className="profile_desc">{person.desc}</p>
        <div className="profile_social">
          <a href={person.mail}>
            <i class="fas fa-envelope fa-lg"></i>
          </a>
          <a href={person.linkedIn}>
            <i class="fab fa-linkedin-in fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
