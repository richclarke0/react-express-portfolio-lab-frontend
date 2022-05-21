
import { useState, useEffect } from "react"

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
        return projects.map((project) => (
            <div>
                <h1>{project.name}</h1>
                <img src={project.image} />
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>live site</button>
                </a>
            </div>
        ))

    }
    return projects ? loaded() : <h1>Loading...</h1>

}