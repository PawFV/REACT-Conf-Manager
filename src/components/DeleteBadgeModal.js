import React from 'react'
import Modal from './Modal'

function DeleteBadgeModal(props) {
    return (
        <Modal isOpen={props.isOpen} openModal={props.openModal} closeModal={props.closeModal} >
            <div className="DeleteBadgeModal">
                <h1>Are you sure?</h1>
                <p>You are about to delete this badge.</p>
            </div>

            <div>
                <button onClick={props.deleteBadge} className="btn btn-danger">Delete</button>
                <button onClick={props.closeModal} className="btn btn-secondary">Cancel</button>
            </div>
        </Modal>
    )
}
export default DeleteBadgeModal;