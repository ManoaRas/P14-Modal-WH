import React from 'react'

/**
 * Custom Modal :
 * Renders a modal controlled by `isOpen`.
 * Closes when clicking outside or on the close button.
 * Displays content passed via `children`.
 */
export default function Modal({ isOpen, onClose, children }) {
  // Close the modal if user click outside the modal
  const handleModal = (e) => {
    e.preventDefault()
    if (e.target === e.currentTarget) onClose()
  }

  // Prevent closing the modal when clicking inside the content
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
