import React, { Component } from 'react';
import './App.css';
import { CSDL, AutoIncreaseID } from './data/Data.js'
import List from './component/List.js'
import AddItem from './component/AddItem.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ds: CSDL,
      AutoIncrease: AutoIncreaseID,
      isActive: true,
    }
  }
  handleAdd = (obj) => {
    const ds = [...this.state.ds]
    
    ds.push(
      {
        ID: this.state.AutoIncrease,
        name: obj.name,
        level:obj.level,
        date: obj.date
      }
    )
    console.log(ds);
    console.log(obj)
    this.setState({
      ds: ds,
      AutoIncrease: this.state.AutoIncrease + 1
    })
  }
  handleDelete = (id) => {
    // console.log('log đã qua')
    const ds = [...this.state.ds]
    const dsMoi = ds.filter(i => i.ID !== id)
    this.setState({
      ds: dsMoi
    })
  }
  handleEdit = (obj) => {
    let ds = [...this.state.ds];
    const vt = ds.findIndex(i => i.ID === obj.ID)
    ds[vt] = obj;
    this.setState({
      ds : ds
    })
    console.log(ds)
  }
  onSetstate = () => {
    console.log('đã bấm')
    this.setState({
      isActive : !this.state.isActive
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="header text-center">
            <h1 className="title">Chào bạn</h1>
            <AddItem handleAdd={this.handleAdd} />
          </div>
            <List 
              danhsach = {this.state.ds}
              handleDelete = {this.handleDelete}
              handleEdit = {this.handleEdit}
            />
        </div>
      </div>

    );
  }

}

export default App;
