import React from 'react';
import TextField from 'material-ui/TextField';
import logo from './logo.svg';
import IconButtonExampleComplex from './IconButtonExampleComplex';
class TextFieldExampleSimple extends React.Component
{
  render()
  {
 return (

  <div>
    <TextField
      hintText={this.props.hinttext}
      hasIcon={true}
      iconButton={<IconButtonExampleComplex/>}
      />
  </div>
);
}
}
 export default TextFieldExampleSimple;
