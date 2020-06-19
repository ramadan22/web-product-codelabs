import { React } from '../../libraries';
import { PropTypes } from 'prop-types'

export const TitleDescComponent = (props) => {
    const { title, description } = props

    return(
        <>
            <div className="flex content-center flex-wrap text-center mt-16 mb-20">
                <h1 className="w-full text-base w-4/6 text-3xl mb-3 font-bold px-50">{title}</h1>
                <p className="w-full text-green-300 w-4/6 px-40">{description}</p>
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