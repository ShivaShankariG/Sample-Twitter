import React from 'react';
import {lightBlue500 ,grey700 ,yellowA700,white, cyan500, brown900  } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Rectangle from 'react-rectangle';
import Card from './Card';


 class ProfileBox extends React.Component
{
  render(){
    return (
    <div>
      <Rectangle aspectRatio={[2, 1]}>
        <div style={{ background: '#2196F3', width: '100%', height: '100%' }}/ >
      </Rectangle>
      <Card/>
</div>
    )
  }
}
export default ProfileBox;
