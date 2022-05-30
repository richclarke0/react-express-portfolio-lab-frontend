import styled from "styled-components"

const Card = styled.div`
width: 25%;
height: 60vh
color: white;   
// background-color: white;
display: flex;
flex-flow: column;
align-items: center;
gap: .5em;
img {
    max-width: 100%;
    border-radius: 10px;
    border: 2px solid grey;    
}
button {
    width: 200px;
    height: 70;  
    color: white;
    background-color: #222; 

}
`

export default Card
