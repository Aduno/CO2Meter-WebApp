import React, { useState } from 'react';
import Current from '../components/Current';
import { SENSORS } from '../constants/enum';
import './Live.css'
function Live() {
    const [time, setTime] = useState(new Date().toUTCString());

    function getTime(){
        var date = new Date().toString();
        date = date.split(':');
        date = date[0] + ':' + date[1] +':' + date[2].substring(0,2)
        return date;
    }

    return (
        <div className='live'>
            <h1 className='page-title'>Live data</h1>
            <Current time={time}/>
            <p className='time'>{time}</p>
            <button onClick={()=>setTime(getTime())}>Update</button>
        </div>
    );
}

export default Live;