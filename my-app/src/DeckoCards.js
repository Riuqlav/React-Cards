import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import './DeckoCards.css';



export default class DeckoCards extends React.Component{
    render(){
        return(
          <div className = 'body'>
<CardColumns style={{display: 'flex', flexDirection: 'row', width: '70rem'}}>
  <Card>
    <Card.Img variant="top" src={ require('./images/tennisRadar.png') } />
    <Card.Body>
    <Card.Title>2019 Men's US Open Final Comparison</Card.Title>
    <Card.Text>
      Radar chart used to visualize a few statistics from the US Open final betwen Rafael Nadal and Deniil Medvedev
    </Card.Text>
  </Card.Body>
    <Card.Footer>
      <small className="text-muted">Data Source:  usopen.org </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={ require('./images/grandslam.png') } />
    <Card.Body>
    <Card.Title>Grandslam Wins in Last 15 Years</Card.Title>
    <Card.Text>
      Total slam wins at Aus Open, French Open, Wimbledon, and US Open. Big 3 can't be stopped
    </Card.Text>
  </Card.Body>
    <Card.Footer>
      <small className="text-muted">Data Source: Wikipedia lol  </small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={ require('./images/Total_USopen.png') } />
    <Card.Body>
    <Card.Title>US Open Wins in the Open Era</Card.Title>
    <Card.Text>
      Visualized the total amount of grand slam wins at flushing meadows
    </Card.Text>
  </Card.Body>
    <Card.Footer>
      <small className="text-muted">Data Source:  usopen.org </small>
    </Card.Footer>
  </Card>
</CardColumns>
<br></br>
<br></br>
<br></br>
<br></br>
</div>
        );
    }
}
