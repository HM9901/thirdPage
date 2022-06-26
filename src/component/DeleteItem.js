import React, { Component } from 'react';

class DeleteItem extends Component {
    handleDelete = () => {
        this.props.handleDelete(this.props.idItem)
    }
    render() {
        return (
            <div >
                <button type="button" className="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target={"#delete" + this.props.idItem}>
                    <i class="fa-solid fa-trash"></i>
                </button>
                <div className="modal fade" id={"delete" + this.props.idItem} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{"Mission " + this.props.idItem}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                Are you sure to complete this mission ?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick = {this.handleDelete} data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default DeleteItem