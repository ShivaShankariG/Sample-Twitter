import React from 'react';
import Paper from 'material-ui/Paper';
import ProfileBox from './ProfileBox';
import Toolbar from './Toolbar';
import Newsfeed from './Newsfeed';
import News1 from './News1';
import Suggestion from './Suggestion';
import News2 from './News2';
import Trends from './Trends';
const styles={
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
bottom: {
  flex: 1,
  maxwidth: '20%',
}

};


class ExampleComponent extends React.Component {
  render() {
    return (
      <div>
          <div style={styles.Container1}>

            <Paper zDepth={1} style={styles.Child1}>
                <ProfileBox/>
                <Paper zDepth={1} style={styles.bottom}>
                <hr/>
                  <Trends/>
                </Paper>
            </Paper>

            <Paper zDepth={1} style={styles.Child2}>
              <Toolbar Id='2'/>
              <br/>
              <News1/>
              <News2/>
            </Paper>

            <Paper ZDepth={1} style ={styles.Child1}>
                <Suggestion/>
            </Paper>



          </div>
      </div>
    )
  }
}
export default ExampleComponent;
