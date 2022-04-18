import React from 'react';
import './App.css';
import Data from './Data';
import Input from './Input';

class App extends React.Component {
  constructor(props){
  super(props)
  this.state = { nama: 'Rosyid', umur : 21}
  }

  _UbahNama = () => this.setState({ nama : 'Diah', umur : 22})
  _UbahNama2 = (namabaru) => this.setState({nama : namabaru})
  _UbahUmur2 = (umurbaru) => this.setState({umur : parseInt(umurbaru)})

  render() {
    return (
        <div className="App">
        <div className="Header">
          COMPONENT REACT.JS STATE DAN PROPS
        </div>
        <Data
          nama={this.state.nama}
          umur={this.state.umur}>
        </Data>
        <Input
          _UbahNama={this._UbahNama}
          _UbahNama2={this._UbahNama2}
          _UbahUmur2={this._UbahUmur2}>
        </Input>
      </div>
    );
  }
}

export default App;