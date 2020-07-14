import { React } from '../../libraries';
import { PropTypes } from 'prop-types'

export const TitleDescComponent = (props) => {
    const { title, description } = props

    return(
        <>
            <div className="flex content-center flex-wrap text-center xl:pt-16 xl:mb-20 pt-8 mb-6">
                <h1 className="w-full text-base w-4/6 xl:text-3xl lg:text-3xl md:text-2xl text-xl mb-3 font-bold px-50">{title}</h1>
                <p className="text-green-300 w-full xl:px-40 lg:px-56 md:px-32 sm:text-base text-sm px-3" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
        </>
    );
}

TitleDescComponent.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

TitleDescComponent.defaultProps = {
    title: 'Title',
    description: 'lorem ipsum dola sit amet nmun dotalambe sir agus fergison'
};