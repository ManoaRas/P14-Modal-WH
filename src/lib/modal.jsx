import React from 'react'

export default function Modal({ isOpen, onClose, children }) {
  const handleModal = (e) => {
    e.preventDefault()
    if (e.target === e.currentTarget) onClose()
  }

  const handleContent = (e) => {
    e.stopPropagation()
  }

  return (
    <>
      {isOpen && <div className='modal' onClick={handleModal}>
        <div className="modal-content" onClick={handleContent}>
          <div className="modal-close">
            <button className="modal-btn" aria-label="Close Modal" onClick={onClose}>
              x
            </button>
          </div>
          {children}
        </div>
      </div>}
    </>
  )
}
