import React from 'react'
import data from '../data/data.json'

class Experiences extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const experiences = data.Experiences.map(exp => {
            return (
                <>
                <img src={exp.logo}></img>
                <p>{exp.companyName}</p>
                {exp.roles.map((role) => (
                    <>
                    <p>{role.title}</p>
                    <p>{role.startDate}</p>
                    <p>{role.location}</p>
                    <p>{role.description}</p>
                    </>
                ))}
                </>
            )
        })
        return experiences
    }
}

export default Experiences