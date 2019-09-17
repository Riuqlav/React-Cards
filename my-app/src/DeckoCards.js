import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

export default class DeckoCards extends React.Component{
    render(){
        return(
<CardColumns style={{display: 'flex', flexDirection: 'row'}}>
  <Card style={{flex: 1}}>
    <Card.Img variant="top" src="https://cdn2.iconfinder.com/data/icons/data-visualization-color/64/line-chart-graph-data-visualization-128.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{flex: 1}}>
    <Card.Img variant="top" src="https://cdn2.iconfinder.com/data/icons/data-visualization-color/64/wave-chart-graph-data-visualization-128.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{flex: 1}}>
    <Card.Img variant="top" src="http://vizhealth-assets.s3.amazonaws.com/static/img/waitloop.gif" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardColumns>
        );
    }
}