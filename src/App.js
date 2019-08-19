import './App.css';
import React, { Component } from 'react';
import 'whatwg-fetch';
import PokeList from './Components/PokeList';
import { Col, Pagination, Button, PageItem } from "react-bootstrap";

export default class PokePage extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       pokemonList: [],
       activePage: 0,
       limit: 5,
       url: '',
       totalPages: 0
    }
  }

  componentDidMount() {
    this.loadPokemon(this.props.baseUrl);
  }
  
  loadPokemon(url) {

    fetch(url).then(response => {
      return response.json()
    }).then(json => {
      console.log(json.results.length);
      this.setState({
        pokemonList: json.results,
        url: json.next,
        totalPages: Math.round(json.results.length / this.state.limit)
      })
    }).catch(ex => {
      console.log(ex);
    })
  }
  
  render() {
    

    return (
      <div>
        <Col sm={{ span: 8}} md={{ span: 6, offset: 4}} >
          <PokeList listOfPokemon={this.state.pokemonList}></PokeList>
        </Col>
        <Col sm={{span: 12}}>
          <Pagination>
            
          </Pagination>
        </Col>
      </div>
    )
  }
}
