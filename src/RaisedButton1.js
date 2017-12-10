import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class RaisedButton1 extends React.Component{
  render(){
    return (
  <div>

    <RaisedButton label={this.props.text} primary={true} style={style} />

  </div>
);
}
}

export default RaisedButton1;
