import {useState} from 'react'
import superheroes from '../json/superheroes.json'
import { Card } from 'react-bootstrap';

const Game = () => {

    const [heroes, setHeroes] = useState(superheroes);
    const [score, setScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [heroToChoose, setHeroToChoose] = useState([]);

    console.log(heroes);

    return(
        <div className="container"> 
        <div className="row">  
            {heroes.map(hero => (  
            <div className="col-sm-2">
                <Card style={{ 'marginTop': '10px' }}>
                    <Card.Img variant="top" src={hero} />
                    <Card.Body>  
                        <h5 className="card-title">{hero.image}</h5>
                            <p>{"Author: " + book.volumeInfo.authors}</p>
                            <p>{"Published year: " + book.volumeInfo.publishedDate}</p>
                    </Card.Body>  
                </Card>  
            </div>
            ))}
        </div>  
    </div>
    );

}

export default Game