import React from 'react';
import { ListGroup, ListGroupItem, Col} from 'react-bootstrap';

const PokeList = ({listOfPokemon}) => {
    console.log(listOfPokemon);
    
    var pokemon = listOfPokemon.map((pokemon) => {
        return(
            <Col sm={6} md={6} key={pokemon.name}>
                <ListGroupItem>{pokemon.name}</ListGroupItem>
            </Col>
        )
        
    });

    return(
        <ListGroup>
            {pokemon}
        </ListGroup>

    )
}

export default PokeList;