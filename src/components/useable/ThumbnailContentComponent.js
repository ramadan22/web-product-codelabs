import { React } from '../../libraries';

export const ThumbnailContentComponent = (props) => {
    const { image, altImage, width, title, description, displayType } = props;

    let display1 = null;
    let display2 = null;
    let display3 = null;
    let display4 = null;

    display1 = (<div className={'text-center px-8 mb-10 ' + width}>
        {image && <img src={image} alt={altImage} className="object-scale-down w-full h-50 mb-0" />}
        <p className="font-bold text-md mb-3">{title}</p>
        <p className="text-sm text-green-300">{description}</p>
    </div>);

    display2 = (<div className={'px-4 mb-10 ' + width}>
        <div className="flex flex-col px-10 py-5 w-full border-solid border-2 border-gray-200">
            <img src={image} alt={altImage} className="object-scale-down w-full h-24 mb-6 mt-5" />
            <div className="w-full text-center">
                <p className="font-bold text-md mb-3">{title}</p>
                <p className="text-sm text-green-300">{description}</p>
            </div>
        </div>
    </div>)

    display3 = (<div className={'px-2 mb-10 ' + width}>
        <div className="flex items-center px-2 py-2 w-full border-solid border-2 border-gray-200">
            <img src={image} alt={altImage} className="rounded object-scale-down w-2/4" />
            <div className="pl-2 w-2/4">
                <p className="font-bold text-md mb-3">{title}</p>
                <p className="text-sm text-green-300">{description}</p>
            </div>
        </div>
    </div>)

    display4 = (<div className={'text-center px-8 mb-10 ' + width} id={displayType}>
        {/* {image && <img src={image} alt={alt} className="object-scale-down w-full h-48 mb-5" />} */}
        <p className="font-bold text-md mb-3">{title}</p>
        <p className="text-sm text-green-300">{description}</p>
    </div>)


    return (
        <>
            {displayType && displayType === "0" ? display1 : ""}
            {displayType && displayType === "1" ? display2 : ""}
            {displayType && displayType === "2" ? display3 : ""}
            {displayType && displayType === "3" ? display4 : ""}
        </>
    );
}

ThumbnailContentComponent.defaultProps = {
    image: 'https://dummyimage.com/250x200/faedfa/c7c9ed.png&text=images',
    altImage: 'Image Default',
    width: 'w-2/6',
    title: 'Cocok untuk Usaha Mikro Maupun Makro',
    description: 'Dapat digunakan untuk beberapa jenis usaha Anda, antara lain : Ritel & restaurant, Petshop dan Salon.',
    // displayType: "1"
}