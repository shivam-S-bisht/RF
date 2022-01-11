import React from 'react';
import './Schedule.css';

function Schedule(schedule) {
    return (
        <div className='schedule'>
        <div className='schedule_modal'>
            <i
              className="fas fa-times-circle fa-5x close__modal" onClick={schedule.hide}
            ></i>
            <div className="Hexagons">
        <img src="/Image/purplehexagon.png" className="tr_hex" alt="loading" />
        <img src="/Image/purplehexagon.png" className="bl_hex" alt="loading" />
        </div>
            <div className='Schedule_action'>
                <div className='option'><h1>{schedule.option}</h1></div>
                <div className='button'><a href="#" className="schedule_ctabtn">Schedule A Meet</a></div>
            </div>
            <div className='Schedule_desc'><p>Dr. Lorem IpsumConsecteturSit AmetLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
           </p></div>
        </div>
        </div>
    )
}

export default Schedule;
