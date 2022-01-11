import React,{useState} from 'react';
import { useEffect } from 'react';
import './Director.css';
import Profile from './Profile';
import DirectorInfo from './DirectorInfo';
function Director() {
    const [viewProfile, setViewProfile] = useState(false);
    const Profiler = () => {
        setViewProfile(true);
    document.body.classList.add("disable_scroll");
}
const ProfileHide = () => {
    setViewProfile(false);
    document.body.classList.remove("disable_scroll");
    }
    
    return (
        <div className="directors">
            <img src="/Image/blackhexagon.png" alt="image" className="tr_hex" />
                <img src="/Image/blackhexagon.png" alt="image" className="b_hex" />
                <img src="/Image/blackhexagon.png" alt="image" className="tl_hex" />
                <div className="page_title">
                <h1>Our Directors</h1>
                </div>
                <div className="Profile_directors">
                <Profile image="https://picsum.photos/200/300"
                name="Dr. Lorem Ipsum"
                title="Consectetur"
                desc="Sit Amet"
                showProfile={Profiler}
                />
                <Profile image="https://picsum.photos/200/300"
                name="Dr. Lorem Ipsum"
                title="Consectetur"
                desc="Sit Amet"
                showProfile={Profiler}
                />
                <Profile image="https://picsum.photos/200/300"
                name="Dr. Lorem Ipsum"
                title="Consectetur"
                desc="Sit Amet"
                showProfile={Profiler}
                />
                <Profile image="https://picsum.photos/200/300"
                name="Dr. Lorem Ipsum"
                title="Consectetur"
                desc="Sit Amet"
                showProfile={Profiler}
                />
                <Profile image="https://picsum.photos/200/300"
                name="Dr. Lorem Ipsum"
                title="Consectetur"
                desc="Sit Amet"
                showProfile={Profiler}
                />
                <Profile image="https://picsum.photos/200/300"
                name="Dr. Lorem Ipsum"
                title="Consectetur"
                desc="Sit Amet"
                showProfile={Profiler}
                />
                </div>
                {viewProfile?<div id='directorInfo'><DirectorInfo
                image="https://picsum.photos/200/300"
                name="Dr. Lorem Ipsum"
                title="Consectetur"
                desc="Sit Amet"
                about="Sit AmetSit AmetSit AmetSit AmetSit AmetSit Amet"
                hide={ProfileHide}
                />
                </div>:""}
                </div>
    )
}

export default Director;
