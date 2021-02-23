import './TableStyle.css';
import React from 'react';


class Table extends React.Component {
   
  constructor(props) {
     super(props)
     this.state = {
        players: [
           { number: null, points: null }
           ]
     }
  }

  renderTableHeader() {
     const header = Object.keys(this.state.players[0])
     return header.map((key) => {
        return <th className="thStyle">{key.toUpperCase()}</th>
     })
  }

  renderTableData() {
     return this.state.players.map((player) => {
        const { number, points } = player 
        return (
           <tr className="tableStyle" >
              <td className="tdStyle">{number}</td>
              <td className="tdStyle">{points}</td>
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           <h1 className="title">Individual Points</h1>
           <table className="ui compact table">
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}


export default Table;