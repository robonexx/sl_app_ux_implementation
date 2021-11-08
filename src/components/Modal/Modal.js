import ReactDom from 'react-dom'
import './Modal.css'

export default function Modal({ children, handleModal }) {
    
    return ReactDom.createPortal((
        <div className="modal-backdrop">
            <div className="modal">
                <button
                    onClick={handleModal}>X</button>
                {children}
            </div>
            
        </div>
    ), document.body)
}
