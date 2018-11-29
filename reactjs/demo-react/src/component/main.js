import React , { Component} from 'react';
import {
  Header,
  Form,
  Checkbox,
  Button,
  Container,
  Segment,
  Input,
} from 'semantic-ui-react';

import './main.css';

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

class Main extends Component {
  constructor() {
    super();
    this.state  = {
      birthday : '1980-06-07'
    }
  }

  changeBirthday(event){
    console.log(this.state)
    this.setState({ birthday: event.target.value })
  }

  render() {
    return (
      <div>
      <Header as='h1' content='Login' style={style.h1} textAlign='center'/>

    <Container>
  <Segment.Group>
    <Segment>
    <Form>
      <Form.Field>
        <Input action={{ icon: 'search' }} placeholder={this.state.birthday} onChange={ event => this.changeBirthday(event)}/>
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' value={this.state.birthday}/>
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
    </Segment>
  </Segment.Group>
</Container>
</div>

    )
  }
}

export default Main;
