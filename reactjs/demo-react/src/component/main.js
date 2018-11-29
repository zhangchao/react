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

import Display from './display'
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
      birthday : '1980-06-07',
      newDate : '',
      flag : false
    }
  }

  changeBirthday(event){
    console.log(this.state)
    this.setState({ birthday: event.target.value ,flag :true })
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
        <Input action={{ icon: 'search' }}
          placeholder={this.state.birthday}
          onChange={ event => this.setState({ newDate: event.target.value })}/>
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit' onClick={ event => this.changeBirthday(event)}>Submit</Button>
    </Form>
    </Segment>
    <Segment>
      {
        this.state.flag ?
         <div>
            <Display date={this.state.newDate}></Display>
         </div>
         :
         <div>Chao</div>
      }

    </Segment>
  </Segment.Group>
</Container>
</div>

    )
  }
}

export default Main;
