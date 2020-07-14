import { React } from '../../libraries'
import { TitleDescComponent, ThumbnailContentComponent } from '../../components'
import GlobalStyle from '../../assets/style/GlobalStyle'
import ModalRegister from '../../modals/ModalRegister'

class SectionContainer extends React.Component {
  state = {
      overflow: false,
      jenisPaket: null
  }
  
  handleCounterChange = (newValue) => {
    const splitValue = newValue.split(",")
    this.setState({
      overflow: splitValue[0],
      jenisPaket: splitValue[1]
    })
  }

  handleCloseModal = (newValue) => {
    this.setState({
      overflow: newValue
    })
  }

  render() {
    const { jenisPaket } = this.state;
    const { 
      displayType, 
      id, 
      display, 
      thumbnail, 
      font_color, 
      background_color, 
      font_color_thumbnail, 
      background_color_thumbnail, 
      idProduct
    } = this.props;
    return (
      <>
        {(this.state.overflow) 
          ? 
            <>
              <GlobalStyle overflow={"hidden"} paddingRight={"17px"} /> 
              <ModalRegister 
                idProduct={idProduct} 
                jenisPaket={jenisPaket} 
                modalActive={true} 
                onChangeCloseModal={(value) => this.handleCloseModal(value)} />
            </>
          : "" }
        <div id={id} style={{color: font_color, backgroundColor: background_color}} className="section-container w-full xl:px-32 px-0">
          <div className="container mx-auto xl:px-20 pl-3">
            <TitleDescComponent 
              title={this.props.title} 
              description={this.props.description} />
            <div className="mt-5 flex content-center flex-wrap items-stretch">
              {thumbnail && thumbnail.length > 0 &&
                thumbnail.map(row => {
                  return (
                    <ThumbnailContentComponent
                      key={row.id}
                      image={row.cd_image} 
                      altImage={row.cd_alt_image} 
                      title={row.cd_title}
                      description={row.cd_desc}
                      displayType={displayType} 
                      display={display} 
                      font_color_thumbnail={font_color_thumbnail} 
                      background_color_thumbnail={background_color_thumbnail} 
                      onChangeCounter={(value) => this.handleCounterChange(value)} />
                  )
                })
              }
              <div className="w-full mx-8 mt-12 border-solid border-b-2 border-green-100"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SectionContainer;