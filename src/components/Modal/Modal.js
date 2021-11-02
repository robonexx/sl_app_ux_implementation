import ReactDom from 'react-dom'
import './Modal.css'

export default function Modal({ children, handleModal }) {
    
    return ReactDom.createPortal((
        <div className="modal-backdrop">
            <div className="modal">
                {children}
                <button
                onClick={handleModal}>X</button>
            </div>
            
        </div>
    ), document.body)
}
