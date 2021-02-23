import React from 'react';
import PointsScored from './PointsScored';
import Table from './IndividualPointsTable';



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [
                {number: 9, points: 21},
                {number: 3, points: 7},
                {number: null, points: null},
                {number: 18, points: 33},
            ]
        }
    }
    
    
    

    onPlayerEnter(shirt) {
       // console.log(shirt);
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: '44px'}}>
                <PointsScored onEnteredPlayer={this.onPlayerEnter} />
                <Table />
            </div>
            )
    }
    

};


export default App;