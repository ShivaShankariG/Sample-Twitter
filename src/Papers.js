import React from 'react';
import Paper from 'material-ui/Paper';
import ProfileBox from './ProfileBox';
import Toolbar from './Toolbar';
import Newsfeed from './Newsfeed';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4'
;const styles={
  Container1:{
    marginLeft: '100px',
    marginRight: '100px',
    display: 'flex',

    height: '200px',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
},
Child1:{
  flex: 1,
maxWidth: '20%',
},
Child2:{
  flex: 4,
maxWidth: '50%',
},

};


class ExampleComponent extends React.Component {
  render() {
    return (
      <div>
          <div style={styles.Container1}>

            <Paper zDepth={1} style={styles.Child1}>
                <ProfileBox/>
            </Paper>

            <Paper zDepth={1} style={styles.Child2}>
              <Toolbar Id='2'/>
              <br/>
              <Card2/>
              <Card4/>
            </Paper>

            <Paper ZDepth={1} style ={styles.Child1}>
                <Card3/>
            </Paper>



          </div>
      </div>
    )
  }
}
export default ExampleComponent;
