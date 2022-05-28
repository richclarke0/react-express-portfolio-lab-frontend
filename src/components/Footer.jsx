import styled from "styled-components"

const Foot = styled.div`
// background-color: grey;
// border-radius: 8px;
// border: 1px solid black;
// color: white;
font-size: 8pt;
width: 100%;
// text-align: center;
min-height: 40px;
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items:center;
`

export default function Footer(props) {
    return (<Foot>©Rich 2022</Foot>)
}