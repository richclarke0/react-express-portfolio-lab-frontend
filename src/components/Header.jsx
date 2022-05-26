import {Link} from "react-router-dom"
import styled from "styled-components"

const navStyle = styled.div`
display: flex;
justify-content: space-around;
border: 3px solid black;
padding: 8px;
width: 90%;
margin: auto;
font-style: italic;
flex-flow: row nowrap;
`

export default function Header(props) {
    //this is inline css
    // const navStyle = {
    //     display: "flex",
    //     justifyContent: "space-around",
    //     border: "3px solid black",
    //     padding: "8px",
    //     width: "90%",
    //     margin: "auto"
    // }
    // would have <nav style={navStyle}> to use it
    return (
    <header>
        <h1>My portfolio page</h1>
        <navStyle>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/projects">PROJECTS</Link>
        </navStyle>
    </header>
        )
}