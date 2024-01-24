import React from 'react'
import data from '../data/data.json'

class Skills extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return data.Skills.map((skill) => {
            const area = skill.Area;
            const skillSet = skill.SkillSet;
            return(
            <>
            <p>{area}</p>
            {skillSet.map(set => <li>{set.Name}</li>)}
            </>
            );
        })
    }
}

export default Skills