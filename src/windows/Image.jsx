import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window';

const ImageWindowContent = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    // Our trusty path fixer
    const getAsset = (path) => {
        if (!path) return '';
        return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\.\/|^\//g, '')}`;
    };

    if(!data) return null;

    const { name, imageUrl } = data;

  return (
    <>
    <div id='window-header'>
        <WindowControls target="imgfile"/>
        <h2>{name}</h2>
    </div>

    <div className='p-5 bg-white'>
        {imageUrl ? (
            <div className='w-full'>
                {/* Apply getAsset to the incoming imageUrl */}
                <img 
                src={getAsset(imageUrl)}
                alt={name}
                className='w-full h-auto max-h-[70vh] object-contain rounded' />
            </div>
        ) : null}
    </div>
    </>
  )
}

const ImageWindow = WindowWrapper(ImageWindowContent, "imgfile");

export default ImageWindow;