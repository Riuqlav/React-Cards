import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import './DeckoCards.css';



export default class DeckoCards extends React.Component{
    render(){
        return(
<CardDeck style={{display: 'flex', flexDirection: 'row', width: '70rem'}}>
  <Card>
    <Card.Img variant="top" src={ require('./images/tennisRadar.png') } />
    <Card.Body>
    <Card.Title>2019 Men's US Open Final Comparison</Card.Title>
    <Card.Text>
      Radar chart used to visualize a few statistics from the US Open final betwen Rafael Nadal and Deniil Medvedev
    </Card.Text>
  </Card.Body>
    <Card.Footer>
      <small className="text-muted">Source:  usopen.org </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={ require('./images/Sunrun2018.png') } />
    <Card.Body>
    <Card.Title>Personal Running Data</Card.Title>
    <Card.Text>
      Tracked paces and times for runs betwen the 2018 and 2019 Sun Run in Vancouver
    </Card.Text>
  </Card.Body>
    <Card.Footer>
      <small className="text-muted">Source:  Nike+ Training Data </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={ require('./images/vicHousing.png') } />
    <Card.Body>
    <Card.Title>Victoria Rental Prices</Card.Title>
    <Card.Text>
      Web-scraped rental prices rentals in the Victoria BC area to compare prices per bedrooms
    </Card.Text>
  </Card.Body>
    <Card.Footer>
      <small className="text-muted">Source:  kijiji.ca </small>
    </Card.Footer>
  </Card>
</CardDeck>
        );
    }
}
