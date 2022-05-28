import {Link} from "react-router-dom"
import styled from "styled-components"

const NavStyle = styled.div`
display: flex;
justify-content: space-around;
border: 3px solid black;
padding: 8px;
width: 90%;
margin: auto;
font-style: italic;
flex-flow: row nowrap;
`

const HeaderArea = styled.div`
min-height: 160px;
// border: 1px solid black  
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
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
    <HeaderArea>
        <h1>Rich's Portfolio Page (Kinda)</h1>
        <NavStyle>
                <div>
                    <Link to="/">HOME</Link>
                </div>
                <div>
                    <Link to="/about">ABOUT</Link>
                </div>
                <div>
                    <Link to="/projects">PROJECTS</Link>
                </div>
        </NavStyle>
    </HeaderArea>
        )
}