import React, { Component } from 'react';
class milesCounter extends Component {
    state={
        recentRun: 0,
        totalMiles: 0,
        finalObject: {
            recentRun: 0
        }
    }
    handleChange = (event)=>{
        this.setState({
            recentRun: event.target.value
        })
    }
    handleSubmit = (event) =>{
        this.setState({
            totalMiles: Number(this.state.totalMiles) + Number(this.state.recentRun),
            finalObject:{
                recentRun: this.state.recentRun
            }
        })
    }
    render(){

    return (
      <div >
           <input placeholder='miles rans' onChange={(event)=>this.handleChange(event)}/>
            <button onClick={this.handleSubmit}>add new run</button>
            <h3>Recent Run: {this.state.finalObject.recentRun} miles</h3>
            <h3>Total Ran: {this.state.totalMiles} miles</h3>

      </div>
  );
 }
}

export default milesCounter;