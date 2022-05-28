
import { useState, useEffect } from "react"
import Card from "../components/Card"
import Main from "../components/Main"
import ProjectsContainer from "../components/ProjectsContainer"

export default function Projects(props) {
    //state
    const [projects, setProjects] = useState(null)

    //create function to make api call
    const getProjectsData = async () => {
        //api call response
        const response = await fetch(props.URL + "projects")
        //turn response into javascript object
        const data = await response.json()
        //set state
        setProjects(data)
    }

    //initial call
    useEffect(() => {getProjectsData()}, [])
    
    //define function to return
    const loaded = () => {
       return (<ProjectsContainer>
             {projects.map((project) => (
                <Card>
                    <h3>{project.name}</h3>
                    <img src={project.image} />
                    <a href={project.git}>
                        <button>Github Link</button>
                    </a>
                    <a href={project.live}>
                        <button>Live Site Link</button>
                    </a>
                </Card>
            ))}
        </ProjectsContainer>)

    }
    return projects ? loaded() : <h1>Loading...</h1>

}