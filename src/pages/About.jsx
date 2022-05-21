import React from "react";
import {useState,useEffect} from React

export default function About(props) {
    //here is our state
    const [about, setAbout] = useState(null)

    //create function for api call
    const getAboutData = async () => {
        // make api call get response 
        const response = await fetch(`${props.url}about`)
        //jsonify
        const data = await response.json()
        //set about state to the data
    }
    return "a"
}