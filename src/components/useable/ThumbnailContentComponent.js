import { React } from '../../libraries';

export const ThumbnailContentComponent = (props) => {
    const { 
        image, 
        altImage, 
        width, 
        title, 
        description, 
        displayType, 
        display, 
        font_color_thumbnail, 
        background_color_thumbnail 
    } = props;

    const handleCounterChange = (newValue) => {
        props.onChangeCounter(true+","+newValue);
    }

    let display1 = null;
    let display2 = null;
    let display3 = null;
    let display4 = null;

    display1 = (<div className={`display-1 text-center pr-3 mb-3 xl:mb-10 xl:flex-1 ${width}`}>
        <div style={{color: font_color_thumbnail, backgroundColor: background_color_thumbnail}} className="h-full rounded px-4 pb-4">
            {image && <img src={image} alt={altImage} className="object-scale-down w-full h-50 mb-0" />}
            <p className="font-bold text-md mb-3">{title}</p>
            <p className="text-sm">{description}</p>
        </div>
    </div>);

    display2 = (<div className={'display-2 xl:px-4 xl:mb-10 pr-3 mb-3 ' + width}>
        <div 
            style={{color: font_color_thumbnail, backgroundColor: background_color_thumbnail}} 
            className="flex flex-col xl:px-10 px-2 py-5 w-full xl:h-auto h-full border-solid border-2 rounded border-gray-200">
            <img src={image} alt={altImage} className="object-scale-down w-full xl:h-24 h-10 mb-6 mt-5" />
            <div className="w-full text-center">
                <p className="font-bold text-md mb-3">{title}</p>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    </div>)

    display3 = (<div className={'display-3 xl:px-2 xl:mb-10 pr-3 mb-3 ' + width}>
        <div 
            style={{color: font_color_thumbnail, backgroundColor: background_color_thumbnail}} 
            className="flex items-center px-2 py-2 w-full rounded border-solid border-2 border-gray-200 xl:h-auto h-full">
            <img src={image} alt={altImage} className="rounded object-scale-down xl:w-2/4 w-1/5" />
            <div className="pl-2 xl:w-2/4 w-4/5">
                <p className="font-bold text-md xl:mb-3 text-sm">{title}</p>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    </div>)

    display4 = (<div className={'display-4 text-center xl:px-2 xl:mb-10 pr-3 mb-3 ' + width} id={displayType}>
        <div 
            style={{color: font_color_thumbnail, backgroundColor: background_color_thumbnail}} 
            className="flex flex-col xl:px-10 xl:py-5 px-3 py-3 w-full rounded border-solid border-2 border-gray-200">
            {/* {image && <img src={image} alt={alt} className="object-scale-down w-full h-48 mb-5" />} */}
            <div className="w-full text-center">
                <p className="font-bold text-md mb-5 text-xl">{title}</p>
                <p className="text-lg">{description}</p>
                {(display.is_button) ? <button className="mt-24 bg-green-500 py-2 xl:px-10 px-3 text-white rounded" onClick={(value) => {handleCounterChange(title)}}>Daftar</button> : ""}
            </div>
        </div>
    </div >)


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
    width: 'w-1/2 xl:w-2/6',
    title: 'Cocok untuk Usaha Mikro Maupun Makro',
    description: 'Dapat digunakan untuk beberapa jenis usaha Anda, antara lain : Ritel & restaurant, Petshop dan Salon.',
    // displayType: "1"
}