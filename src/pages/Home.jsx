import Main from "../components/Main";
import styled from "styled-components";

const Homer = styled.div`
padding-left: 5em;
`
export default function Home(props) {
    return <Main>
        <Homer>
            Hi, welcome to the homepage of my portfolio.
            <br /><br />Feel free to click on the links above to see stuff.
            <br /><br />I will be using Alex's portfolio thing later instead of this one.
            <br /><br />Here's a picture of a cat.
            <br /><br />
            <img src="https://i.ebayimg.com/images/g/tyQAAMXQ9rVQ6SAz/s-l400.jpg" alt="" />
        </Homer>
    </Main>
}