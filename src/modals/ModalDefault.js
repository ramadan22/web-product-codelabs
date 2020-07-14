import { React, useState } from '../libraries'

const ModalDefault = (props) => {

  const { title, desc } = props

  const [modalContent, setModalContent] = useState(false)

  setTimeout(() => {
    setModalContent(true);
  }, 250);

  const handleCloseModal = () => {
    props.onChangeModalClose(false);
  }

  return (
    <>
      <div className={`modal-overlay fixed inset-0 w-full z-20 h-full bg-gray-900 opacity-50`}></div>
      <div className={`modal fixed z-30 w-full h-full top-0 left-0 flex items-center justify-center overflow-y-auto ${(modalContent && 'modal-content-popup')}`} style={{ marginTop: '-10px', opacity: '0', transition: 'all 0.5s' }}>
        <div className="modal-container bg-white my-auto w-3/12 shadow-lg rounded">
          <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-30" onClick={handleCloseModal}>
            <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
            <span className="text-sm">(Esc)</span>
          </div>
          <div className="modal-content pt-4 pb-6 text-left px-5">
            <div className="flex justify-between">
              <div className="w-full pl-5 text-center text-6xl text-green-600">
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
              <div className="modal-close cursor-pointer z-50" onClick={handleCloseModal}>
                <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>
            <div className="my-2 text-center">
              <p className="text-xl font-bold mb-2">{title}</p>
              <p className="text-sm text-teal-600">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalDefault