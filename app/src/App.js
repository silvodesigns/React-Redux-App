import React from 'react';
import {connect} from 'react-redux';
import './App.css';

function App(props) {

  console.log(props.state);
  return (
    <div className="App">
      <h1>{props.state}</h1>
    </div>
  );
}

const mapStateToProps= state => {
  return {
   state: state.title
  }

}

export default connect(mapStateToProps, {})(App);
