import React, { Component } from 'react';
import DeleteItem from './DeleteItem.js'
import EditItem from './EditItem.js'

class Item extends Component {
    render() {
        return (
            <div className="box text-center m-4 col-xl-3">
                    <span className="ID">ID: <span>{this.props.tv.ID}</span> </span>
                    <h3 className="title"> {this.props.tv.name} </h3>
                    <h4 className="level">level: <span>{this.props.tv.level === 0 ? "Small" : this.props.tv.level === 1 ? "Medium" : "High"}</span></h4>
                    <h4 className="date">date: <span>{this.props.tv.date}</span></h4>
                    <div className="btn d-flex ms-4">
                        {/* edit */}
                            <EditItem
                                tv={this.props.tv}
                                handleEdit = {this.props.handleEdit}
                            />
                        {/* delete */}
                            <DeleteItem
                                idItem={this.props.tv.ID}
                                handleDelete = {this.props.handleDelete}
                            />
                    </div>
                </div>
        )
    }
}

export default Item