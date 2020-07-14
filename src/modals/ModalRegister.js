import { React, axios, useState } from '../libraries'
import ModalDefault from '../modals/ModalDefault'
import GlobalStyle from '../assets/style/GlobalStyle'

const ModalRegister = (props) => {

  const [modalContent, setModalContent]   = useState(false)
  const [namaUsaha, setNamaUsaha]         = useState("")
  const [jenisUsaha, setJenisUsaha]       = useState("")
  const [noTelp, setNoTelp]               = useState("")
  const [alamat, setAlamat]               = useState("")
  const [modalShow, setModalShow]         = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  setTimeout(() => {
    setModalContent(true);
  }, 250);

  const changeNamaUsaha = (event) => {
    setNamaUsaha(event.target.value);
  }

  const changeJenisUsaha = (event) => {
    setJenisUsaha(event.target.value);
  }

  const changeNoTelp = (event) => {
    setNoTelp(event.target.value);
  }

  const changeAlamat = (event) => {
    setAlamat(event.target.value);
  }

  const handleSubmit = (evt) => {
    // props.onChangeCloseModal(false);
    evt.preventDefault();
    axios.post('http://128.199.125.236/web-products/webproducts-gateway/public/api/send-reg', {
      p_id        : props.idProduct,
      nama_usaha  : namaUsaha,
      jenis_usaha : jenisUsaha,
      no_hp       : noTelp,
      alamat      : alamat,
      jenis_paket : props.jenisPaket,
    })
    .then(function (response) {
      (response.status === 200 && (response.data.STATUS === 200 && setModalShow(true)))
      setSubmitSuccess(true)
    })
    .catch(function (error) {
      console.log(error)
    });

    setNamaUsaha("")
    setJenisUsaha("")
    setNoTelp("")
    setAlamat("")
  }

  const handleCloseModal = () => {
    props.onChangeCloseModal(false);
  }

  return (
    <>
      {modalShow && 
        <GlobalStyle overflow={"hidden"} paddingRight={"17px"} /> && 
        <ModalDefault 
          onChangeModalClose={(value) => handleCloseModal(value)} 
          title="Registration has been sent." 
          desc="Please wait we will process your registration!" />}
      <div className={`${(!props.modalActive ? 'hidden' : '')} ${(submitSuccess ? 'hidden' : '')} modal-overlay fixed inset-0 w-full z-20 h-full bg-gray-900 opacity-50`}></div>
      <div className={`modal fixed z-30 w-full h-full top-0 left-0 flex items-center justify-center overflow-y-auto ${(submitSuccess ? 'hidden' : '')} ${(modalContent && 'modal-content-popup')}`} style={{ marginTop: '-10px', opacity: '0', transition: 'all 0.5s' }}>
        <div className="modal-container bg-white pt-5 h-full w-11/12 md:max-w-md shadow-lg">
          <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-30" onClick={handleCloseModal}>
            <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
            <span className="text-sm">(Esc)</span>
          </div>
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">Form Pendaftaran</p>
              <div className="modal-close cursor-pointer z-50" onClick={handleCloseModal}>
                <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-5">
                <div className="w-full mb-6">
                  <p className="mb-1 text-sm text-orange-400">Nama Usaha</p>
                  <input onChange={changeNamaUsaha} required className="shadow appearance-none border rounded w-full text-sm py-2 px-2 text-gray-700 leading-tight outline-none shadow-none focus:shadow-none" />
                </div>
                <div className="w-full mb-6">
                  <p className="mb-1 text-sm text-orange-400">Jenis Usaha *</p>
                  <input onChange={changeJenisUsaha} required className="shadow appearance-none border rounded w-full text-sm py-2 px-2 text-gray-700 leading-tight outline-none shadow-none focus:shadow-none" />
                </div>
                <div className="w-full mb-6">
                  <p className="mb-1 text-sm text-orange-400">No. WA/Telp</p>
                  <input onChange={changeNoTelp} required className="shadow appearance-none border rounded w-full text-sm py-2 px-2 text-gray-700 leading-tight outline-none shadow-none focus:shadow-none" />
                </div>
                <div className="w-full mb-6">
                  <p className="mb-1 text-sm text-orange-400">Alamat</p>
                  <input onChange={changeAlamat} required className="shadow appearance-none border rounded w-full text-sm py-2 px-2 text-gray-700 leading-tight outline-none shadow-none focus:shadow-none" />
                </div>
                <div className="w-full mb-6">
                  <p className="mb-1 text-sm text-orange-400">Jenis Paket *</p>
                  <input value={props.jenisPaket} readOnly className="shadow appearance-none border rounded w-full text-sm py-2 px-2 text-gray-700 leading-tight outline-none shadow-none focus:shadow-none" />
                </div>
                <div className="w-full">
                  <button type="submit" className="bg-black hover:bg-blue-700 text-sm text-white font-bold py-3 px-12 rounded">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalRegister