import React from 'react';
import axios from 'axios'
import Smurf from './Smurf'
import { connect } from 'react-redux'

import { getSmurfs } from '../actions/index'

 class SmurfDisplay extends React.Component {

    state = {
        smurfs: []
      }
    
      componentDidMount() {
        axios.get('http://localhost:3333/smurfs').then(res=>{
          console.log(res);
          this.setState({
            smurfs: res.data
          })
        })
        // getSmurfs()
      }

    render() {
        return(<div>
            {this.state.smurfs.map(smurf=>{
               return <Smurf key={smurf.id} smurf={smurf}/>
            })}
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs, 
        appIsLoading: state.appIsLoading,
        error: state.error,
    };
  };
  
  export default connect(mapStateToProps, { getSmurfs })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.