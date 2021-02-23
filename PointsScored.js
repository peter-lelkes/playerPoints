import React from 'react';

class PointsScored extends React.Component {
  constructor(props) {
    super(props)
    this.state = {number: null};
  }
  
  
  onAddOneClick = () => {
    this.setState = ((state) => ({
     ...state, number: this.state.players.number,
     ...state, points: this.state.players.points + 1}))
     console.log(this.state.number)
     console.log(this.state.points)
  } 
 
      
  onNumberEntered = (event) => {
      event.preventDefault();
      this.setState({number: event.target.value});
    }

  render() {
    return(
      <div>
        <div>
          <form>
            <input
              type="text"
              onChange={this.onNumberEntered}
            />
          </form>
        </div>
        <br />
        <br />
        <br />
        <div>
          <button className="button" onClick={this.onAddOneClick}>One Point</button>
          <button className="button">Two Points</button>
          <button className="button"> Tree Points</button>
        </div>
      </div>
    )
  }
  }
export default PointsScored;
