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
        setAbout(data)
    }
    
    //make initial call for data inside useEffect so it only runs at page load
    useEffect(()=> getAboutData(), [])

    //define a function that will return the JSX needed once we get the data
    
    const loaded = () => {
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    }

    //if data arrives return loaded, else loading
    return about ? loaded() : <h1>Loading...</h1>
}