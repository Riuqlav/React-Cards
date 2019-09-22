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
    <Card.Img variant="top" src="https://cdn2.iconfinder.com/data/icons/data-visualization-color/64/line-chart-graph-data-visualization-128.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        optional
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Source: ----- </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://cdn2.iconfinder.com/data/icons/data-visualization-color/64/wave-chart-graph-data-visualization-128.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        optional
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Source: ----- </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="http://vizhealth-assets.s3.amazonaws.com/static/img/waitloop.gif" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        optional
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Source: ----- </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="http://vizhealth-assets.s3.amazonaws.com/static/img/waitloop.gif" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        optional
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Source: ----- </small>
    </Card.Footer>
  </Card>
</CardDeck>
        );
    }
}
