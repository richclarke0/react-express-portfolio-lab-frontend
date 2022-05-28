import styled from "styled-components"

const AboutContainer = styled.div`
// width: 90%; 
box-sizing: border-box; 
height: calc(100vh - 200px);
max-height: calc(100vh-200px);
color: white;   
// background-color: white;
padding: 6em 10em 6em 10em;
display: flex;
flex-flow: column nowrap;
justify-content: flex-start;
align-items: center;
gap: 1em;
max-width: 100vw;
img {
    width: 170px;
    border-radius: 10px;
}
`

// export default function Main(props) {
//     return <Mainer></Mainer>
// }

export default AboutContainer