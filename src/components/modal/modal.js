export const ButtonModal = ({ className, value }) => {
    return (
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" className={className}>{value}</button>
    )
}

export const Modal = ({ modalTitle, modalContent }) => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{modalTitle}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {modalContent}
                    </div>
                </div>
            </div>
        </div>
    )
}