import React from 'react'
import heroes from './json/superheroes.json'
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {heroes : heroes.superheroes, clickHeroes : [], score : 0, topScore : 0}
  }

  handleClick = (heroName) => {
    this.setState((state) => {
    const newScore = state.clickHeroes.includes(heroName) ? 0 : state.score + 1;
    const newClickHeroes = state.clickHeroes.includes(heroName) ? [] : [...this.state.clickHeroes, heroName]
      return{
      heroes : [...this.state.heroes].sort((a,b) => Math.random() > .5? -1 : 1),
      clickHeroes : newClickHeroes,
      score : newScore,
      topScore : Math.max(newScore, state.topScore)
      };
    });
    console.log(this.state);
  }

  render(){
    return(
      <div className='container'>
        <nav className='navbar'>
          <div>Superheros React Memory Game</div>
          <div>Score: {this.state.score}</div>
          <div>Top Score: {this.state.topScore}</div>
        </nav>
        <div className='rules'>
          Get points by clicking on an image but do not click on the same twice
        </div>
        <div className='heroes-container'>
          {this.state.heroes.map((hero, i) => {
            return <div key={i} className='hero-card' onClick={() => this.handleClick(hero.name)}>
              <img src={hero.image} width={100}/>
              <p><span>Name: </span>{hero.name}</p>
              <p><span>Occupation: </span>{hero.occupation}</p>
              </div>
          })}
        </div>
      </div>
    )
  }
}

export default App;
