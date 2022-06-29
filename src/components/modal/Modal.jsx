import { createPortal } from 'react-dom';

const Modal = ({ children, className = '', onHide = () => {} }) => {
  const modalContentClickHandler = (e = new MouseEvent()) => {
    e.stopPropagation();
  };

  const modalElement = (
    <div className={`modal modal-backdrop ${className}`} onClick={onHide}>
      <div className="modal-content" onClick={modalContentClickHandler}>
        {children}
      </div>
    </div>
  );

  return createPortal(modalElement, document.getElementById('modal'));
};

export default Modal;
