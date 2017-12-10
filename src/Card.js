import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import './App.css';

const handle=<a href="www.google.com ">Shiva</a>
export default class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {

    return (
      <Card>
        <CardHeader
          title= {handle}
          subtitle="@TheOneShiva"
          avatar="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=1280"/>
        <CardActions>
          <FlatButton label="Tweets 0 "  />
          <FlatButton label="Followers 89"  />
        </CardActions>

      </Card>
    );
  }
}
