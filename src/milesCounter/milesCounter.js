import React, { Component } from 'react';
class milesCounter extends Component {
    state={
        recentRun: 0,
        recentTime: 0,
        totalMiles: 0,
        finalObject: {
            recentRun: 0,
            recentTime: 0,
            mph: 0
        },
        longestRun: {
            run: 0,
            time: 0,
            mph: 0
        }
    }
    
    handleSubmit = (event) =>{
        let hoursRan = this.state.recentTime/60;
        this.setState({
            totalMiles: Number(this.state.totalMiles) + Number(this.state.recentRun),
            finalObject:{
                recentRun: this.state.recentRun,
                recentTime: this.state.recentTime,
                mph: this.state.recentRun / hoursRan
            }
        })
        //see if this new run is longer than the current longest run
        if(Number(this.state.recentRun) > Number(this.state.longestRun.run)){
            this.setState({
                longestRun: {
                    run: this.state.recentRun,
                    time: this.state.recentTime,
                    mph: this.state.finalObject.mph
                }
            })
        }
    }
    handleChange = (event, typeOf) => {
        console.log(event.target.value, typeOf);
        this.setState({
            [typeOf]: event.target.value
        })
        
  }
    render(){

    return (
      <div >
            <input placeholder='miles ran' onChange={(event)=>this.handleChange(event, 'recentRun')}/>
            <input placeholder='time in minutes' onChange={(event)=>this.handleChange(event, 'recentTime')}/>
            <button onClick={this.handleSubmit}>add new run</button>
            <h3>Total Ran: {this.state.totalMiles} miles</h3>

            <div>
                <h3>Recent Run </h3>
                <p>Distance: {this.state.finalObject.recentRun} miles</p>
                <p>Time: {this.state.finalObject.recentTime}</p>
                <p>Average mph: {this.state.finalObject.mph}</p>
            </div>
            <div>
                <h3>Longest Run</h3>
                <p>Distance: {this.state.longestRun.run} miles</p>
                <p>Time: {this.state.longestRun.time}</p>
                <p>Average mph: {this.state.longestRun.mph}</p>
            </div>           
      </div>
  );
 }
}

export default milesCounter;