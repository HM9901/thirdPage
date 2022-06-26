import React, { Component } from 'react';
import Item from './Item.js'

class List extends Component {
    render() {
        return (
            <div className="p-5  row">
                {
                    this.props.danhsach.map((i, index) => 
                    <Item 
                        key={index} 
                        tv = {i}
                        handleDelete = {this.props.handleDelete}
                        handleEdit = {this.props.handleEdit}
                    /> )
                }
            </div>
        )
    }
}
export default List;