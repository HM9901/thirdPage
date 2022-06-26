import React, { Component } from 'react';

class EditItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            level: 0,
            date: ""
        }
    }
    componentDidMount() {
        this.setState({
            name: this.props.tv.name,
            level:this.props.tv.level,
            date: this.props.tv.date,
        })
    }
    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })
        console.log(this.state)
    }
    handleSave = () => {
            this.props.handleEdit({
                ID: this.props.tv.ID,
                name: this.state.name,
                level: this.state.level,
                date: this.state.date,
            }
        )
    }
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target={"#change" + this.props.tv.ID}>
                    <i className="fas fa-tools"></i>
                </button>
                <div className="modal fade" id={"change" + this.props.tv.ID} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{"Change Item" + this.props.tv.ID}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping">@</span>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Username" 
                                        aria-label="Username" 
                                        aria-describedby="addon-wrapping" 
                                        value={this.state.name}
                                        name="name"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <select 
                                    className="form-select" 
                                    aria-label=" select example"
                                    value={this.state.level}
                                    name="level"
                                    onChange={this.handleChange}
                                >
                                    <option value={1}>Small</option>
                                    <option value={2}>Medium</option>
                                    <option value={3}>High</option>
                                </select>
                                <div className="input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping">@</span>
                                    <input 
                                        type="date" 
                                        className="form-control" 
                                        placeholder="Username" 
                                        aria-label="Username" 
                                        aria-describedby="addon-wrapping" 
                                        value={this.state.date}
                                        name="date"
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.handleSave} data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditItem