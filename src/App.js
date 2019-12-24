import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card, CardColumns, Badge,ResponsiveEmbed } from 'react-bootstrap';

class App extends Component {
  
  state = {
    text: "test",
    error: ""
  }

  handleDateChange = (e) => {
    const value = this.refs.number.value;
    //console.log(value); 
    fetch(`https://danepubliczne.imgw.pl/api/data/synop/station/warszawa`)
      .then(res => {
        if(res.ok){
          return res
        }
        throw Error("Bład !!! Błąd !!!")
      })
      .then(res => res.json())
      .then(data => this.setState({
        text: data.temperatura
      }))
      .catch(err => console.log(err))  
  }

  render(){
    return (
      <div style={{ width: 660, height: 'auto' }}>
      <ResponsiveEmbed aspectRatio="16by9">
          <CardColumns>
            <Card bg="dark" border="secondary" text="white" className="text-center">
              <Card.Header>Temperatura Zew.</Card.Header>
              <Card.Body>
                <Card.Text>
                  -1&deg;C
              </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card bg="dark" border="secondary" text="white" className="text-center">
              <Card.Header>Temperatura Pokój A</Card.Header>
              <Card.Body>
                <Card.Text>
                  <input onChange={this.handleDateChange} type="text" size="3" ref="number" /> 
                  <b>Odpowiedz: {this.state.text} </b>
              </Card.Text> 
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card bg="dark" border="secondary" text="white" className="text-center">
              <Card.Header>Temperatura Pokój J</Card.Header>
              <Card.Body>
                <Card.Text>
                  -1&deg;C
          </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card bg="dark" border="secondary" text="white" className="text-center">
              <Card.Header>Temperatura Salon</Card.Header>
              <Card.Body>
                <Card.Text>
                  -1&deg;C
            </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card bg="dark" border="secondary" text="white" className="text-center">
              <Card.Header>Temperatura Pokój R</Card.Header>
              <Card.Body>
                <Card.Text>
                  19&deg;C
        </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card bg="dark" border="secondary" text="white" className="text-center">
              <Card.Header>Temperatura Przedpokój</Card.Header>
              <Card.Body>
                <Card.Text>
                  19&deg;C
    </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card bg="dark" border="secondary" text="white" className="text-center">
              <Card.Header>Temperatura Łazienka</Card.Header>
              <Card.Body>
                <Card.Text>
                  -1&deg;C
    </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card bg="dark" border="secondary" text="white" className="text-center">
              <Card.Header>Temperatura Kuchnia</Card.Header>
              <Card.Body>
                <Card.Text>
                  19&deg;C
    </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardColumns>
          </ResponsiveEmbed>
          <Badge variant="secondary">Temperatura Zew. -7&deg;C</Badge>
      </div>
    );
  }
}

export default App;
