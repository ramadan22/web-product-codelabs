import { React } from '../../libraries';
import { TitleDescComponent, ThumbnailContentComponent } from '../../components';

class SectionContainer extends React.Component {
  render() {
    const { displayType } = this.props;
    return (
      <>
        <div className="section-container w-full px-32">
          <div className="container px-20">
            <TitleDescComponent title={this.props.title} description={this.props.description} />
            <div className="mt-5 flex content-center flex-wrap">
              {this.props.thumbnail && this.props.thumbnail.length > 0 &&
                this.props.thumbnail.map(row => {
                  return (
                    <ThumbnailContentComponent
                      key={row.id}
                      image={row.cd_image} 
                      altImage={row.cd_alt_image} 
                      title={row.cd_title}
                      description={row.cd_desc}
                      displayType={displayType} />
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