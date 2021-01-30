import React from 'react';
import './Modal.styles.scss';
import './Modal.styles.css';

const Modal = ({ onClose = () => { }, children }) => {
  return (
    <div className="modal">
      <div className="scatola">
        <button className="close" onClick={onClose} />
        <div className="content">{children}</div>
      </div>
    </div>
  )
};

export default Modal;
