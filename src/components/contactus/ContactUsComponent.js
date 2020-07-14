import { React, axios, useState, useEffect } from '../../libraries'
import { TitleDescComponent } from '../../components'
import contactusImage from '../../assets/images/img_contact.png'
import ModalDefault from '../../modals/ModalDefault'
import GlobalStyle from '../../assets/style/GlobalStyle'

export const ContactUsComponent = (props) => {

  const [valueSubject, setSubject]          = useState("")
  const [valueEmail, setEmail]              = useState("")
  const [valuePesan, setPesan]              = useState("")
  const [valueIdProduct, setValueIdProduct] = useState(null)
  const [modalShow, setModalShow]           = useState(false)

  useEffect(() => {
    setValueIdProduct(props.idProduct)
  })

  const changeSubject = (value) => {
    setSubject(value.target.value)
  }

  const changeEmail = (value) => {
    setEmail(value.target.value)
  }

  const changePesan = (value) => {
    setPesan(value.target.value)
  }

  const handleCloseModal = (newValue) => {
    setModalShow(newValue)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post('http://128.199.125.236/web-products/webproducts-gateway/public/api/send-inquery', {
      id: valueIdProduct,
      i_subject: valueSubject,
      i_email: valueEmail,
      i_message: valuePesan
    })
    .then(function (response) {
      (response.status === 200 && (response.data.STATUS === 200 && setModalShow(true)))
    })
    .catch(function (error) {
      console.log(error)
    });
    setSubject("")
    setEmail("")
    setPesan("")
  }

  return (
    <>
      {modalShow && 
        <GlobalStyle overflow={"hidden"} paddingRight={"17px"} /> && 
        <ModalDefault 
          onChangeModalClose={(value) => handleCloseModal(value)} 
          title="Thank you for contacting us." 
          dessc="Your message has been successfully sent. We will contact you very soon!" />}
      <div className="pt-10 pb-10">
        <TitleDescComponent title="Hubungi Kami" description="" />
        <div className="w-full flex flex-wrap mt-10">
          <div className="md:w-1/2 sm:w-2/5 w-full xl:pr-10 pr-3">
            <img src={contactusImage} alt="Contactus" className="md:w-full xl:mx-0 md:w-1/2 sm:w-full w-3/5 mx-auto sm:mb-0 mb-5" />
          </div>
          <div className="md:w-1/2 sm:w-3/5 w-full flex items-stretch text-left">
            <div className="flex-1">
              <p className="font-bold">Apakah ada pertanyaan?</p>
              <form id="form-submit-contactus" onSubmit={handleSubmit}>
                <div className="form-group md:mt-10 mt-5">
                  <div className="w-full mb-6">
                    <p className="mb-4 text-orange-400">Subject</p>
                    <input value={valueSubject} onChange={(value) => {changeSubject(value)}} required className="shadow appearance-none border rounded w-full lg:py-5 py-3 lg:px-3 px-1 text-gray-700 leading-tight outline-none shadow-none focus:shadow-none" />
                  </div>
                  <div className="w-full mb-6">
                    <p className="mb-4 text-orange-400">Email</p>
                    <input value={valueEmail} onChange={(value) => {changeEmail(value)}} required className="shadow appearance-none border rounded w-full lg:py-5 py-3 lg:px-3 px-1 text-gray-700 leading-tight outline-none shadow-none focus:shadow-none" />
                  </div>
                  <div className="w-full mb-6">
                    <p className="mb-4 text-orange-400">Pesan</p>
                    <textarea value={valuePesan} onChange={(value) => {changePesan(value)}} required className="shadow appearance-none border rounded w-full lg:py-5 py-3 lg:px-3 px-1 text-gray-700 leading-tight outline-none shadow-none focus:shadow-none h-40 resize-none"></textarea>
                  </div>
                  <div className="w-full">
                    <button type="submit" className="bg-black hover:bg-blue-700 text-sm text-white font-bold py-3 px-10 rounded">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}