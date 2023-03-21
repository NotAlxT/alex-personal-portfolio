import React, { useEffect, useState } from 'react'


let seconds=0
let minutes=0
let hours=0


export default function Timer (props){
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);
setInterval(() =>{
    console.log(seconds);
    seconds = seconds+1;
    if (seconds==60){
        minutes+=1
        seconds=0
    }
    if(minutes==60){
        hours+=1
        minutes=0
    }
	return(
		<div className="Timer">
			hours={props.hours} minutes={props.minutes} seconds={props.seconds}
		</div>
	)
})
}

