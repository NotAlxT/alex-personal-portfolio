import React, { useEffect, useState } from 'react'


export default function Timer(props) {
    return (<>
        <div className="Timer">
            <div>{props.time.h >=10 ? props.time.h : "0"+ props.time.h}</div>
            <div>{props.time.m >=10 ? props.time.m : "0"+ props.time.m}</div>
            <div>{props.time.s >=10 ? props.time.s : "0"+ props.time.s}</div>
            <div>{props.time.ms >=10 ? props.time.ms : "0"+ props.time.ms}</div>
        </div>
        <div>
            <button onClick={props.start}>start</button>
        </div>
        <div>
            <button onClick={props.stop}>stop</button>
        </div>
        <div>
            <button onClick={props.reset}>reset</button>
        </div>
        <div>
            <button onClick={props.resume}>resume</button>
        </div>
    </>)
}

