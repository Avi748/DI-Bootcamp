import React from 'react'
import data from '../data/data.json'

class SocialMedias extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const social = data.SocialMedias
        return <div>
            <ul>
                <li>{social[0]}</li>
                <li>{social[1]}</li>
                <li>{social[2]}</li>
            </ul>
        </div>
    }
}

export default SocialMedias