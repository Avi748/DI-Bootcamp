import {useState} from 'react'
import superheroes from '../json/superheroes.json'
import { Card } from 'react-bootstrap';

const Game = () => {

    const [heroes, setHeroes] = useState(superheroes.superheroes);
    const [score, setScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [heroToChoose, setHeroToChoose] = useState([]);

    // console.log(heroes.map((hero) => {hero.id}));

    const handleClick = (choosenHero) => {
        const newScore = heroToChoose.includes(choosenHero) ? 0 : score + 1;
        const newHeroToChoose = heroToChoose.includes(choosenHero) ? [] : [...heroToChoose, choosenHero]
        setHeroes([...heroes].sort(() => Math.random() > 0.5 ? -1 : 1))
        setHeroToChoose(newHeroToChoose)
        setScore(newScore)
        setTotalScore(Math.max(newScore, totalScore))
    }
    // console.log(heroToChoose);

    return(
    <div>
        <div className="card-header main-search">  
            <div className="row">  
                <div className="container col-12 col-md-6 col-xl-3 b-5">
                    <nav className='navbar'>
                        <div>Superheros Memory Game</div>
                        <div>Score: {score}</div>
                        <div>Top Score: {totalScore}</div>
                        <div>Get Points by clicking on an images but dont't click on any more than once!</div>
                    </nav>
                </div>  
            </div>  
        </div>
        <div className="container"> 
            <div className="row">  
                {heroes.map((hero) => (  
                <div className="col-sm-2" onClick={() => handleClick(hero.name)}>
                    <Card style={{ 'marginTop': '10px' }}>
                        <Card.Img variant="top" src={hero.image} />
                        <Card.Body>  
                            <h5 className="card-title">{hero.name}</h5>
                                <p>{hero.occupation}</p>
                        </Card.Body>  
                    </Card>  
                </div>
                ))}
            </div>  
        </div>
    </div>
    );
}

export default Game