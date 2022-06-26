import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            level: 1,
            date: '2001-9-9'
        }
    }
    handleChange = (e)  => {
        console.log(e.target)
        const name = e.target.name;
        const value =e.target.value;

      this.setState({
        [name] : value 
      })

    }
    handleSave = () => {
        console.log('nhấn rồi nè')
        const doituong = {
          name: this.state.name,
          level:this.state.level,
          date: this.state.date,
        }
        this.props.handleAdd(doituong)
        this.setState({
          name: "",
          level: 0,
          date:""
        })
      }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addnew">
                    ADD
                </button>
                <div className="modal fade" id="addnew" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New Target</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body m-3 d-flex flex-column">
                                <div className="input-group flex-nowrap m-auto">
                                    <span className="input-group-text" id="addon-wrapping">Name:</span>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Username" 
                                        aria-label="Username" 
                                        aria-describedby="addon-wrapping"
                                        onChange={this.handleChange}
                                        name="name" 
                                        value = {this.state.name}
                                    />
                                </div>
                                <select 
                                    className="form-select " 
                                    aria-label="Default select example"
                                    onChange={this.handleChange}
                                        name="level" 
                                        value = {this.state.level}
                                >
                                    <option defaultValue={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
                                <div className="input-group flex-nowrap m-auto">
                                    <span className="input-group-text" id="addon-wrapping">Date: </span>
                                    <input 
                                        type="date" 
                                        className="form-control" 
                                        placeholder="Username" 
                                        aria-label="Username" 
                                        aria-describedby="addon-wrapping" 
                                        onChange={this.handleChange}
                                        name="date" 
                                        value = {this.state.date}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.handleSave} data-bs-dismiss="modal" >ADD New</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default AddItem;