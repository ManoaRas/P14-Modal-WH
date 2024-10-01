# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

`npm install p14-modal-wh`

## To build the modal

`npm run build` or `yarn build`

## Utilisation

```
import Modal from 'p14-modal-wh'

import { useState } from 'react'

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClose = () => {
    setIsModalOpen(false)
  };

  return (
    <div className="App">
      <button onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <h2>Employee Created!</h2>
      </Modal>
    </div>
  );
}
```

## Props

The `Modal` component accepts the following props:

- `isOpen` (Boolean) : Boolean that can determine if the modal must be displayed or not.
- `onClose` (Function) : Function that close the modal.
- `children` (Object) : Can add element in the component.
