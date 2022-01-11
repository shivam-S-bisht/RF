import React from "react";
import "./DirectorInfo.css";

function DirectorInfo(dir) {
  return (
    <div className="director">
      <div className="director_profile">
        <i
          className="fas fa-times-circle fa-4x close__modal"
          onClick={dir.hide}
        ></i>
        <div className="directors_profile">
          <div className="profileComp">
            <div className="Hexagons">
              <img
                src="/Image/purplehexagon.png"
                className="tr_hex"
                alt="loading"
              />
              <img
                src="/Image/purplehexagon.png"
                className="bl_hex"
                alt="loading"
              />
            </div>
            <div className="director_profiler">
              <div className="profile__image">
                <img src={dir.image} />
              </div>
              <div className="profiler_info">
                <h3 className="profile__name">{dir.name}</h3>
                <p className="profile_desc">{dir.title}</p>
                <p className="profile_desc">{dir.desc}</p>
                <div className="profile_social">
                  <a href="#">
                    <i class="fas fa-envelope fa-lg"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin-in fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="director_info">
              {/* Dr. Lorem IpsumConsecteturSit AmetLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
           */}
              <p>{dir.about}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectorInfo;
