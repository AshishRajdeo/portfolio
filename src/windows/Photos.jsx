// import { WindowControls } from "#components"
// import { gallery, photosLinks } from "#constants"
// import WindowWrapper from "#hoc/WindowWrapper"
// import useWindowStore from "#store/window"
// import { Mail, Search } from "lucide-react"


// const Photos = () => {
//   const { openWindow } = useWindowStore();

//   return (
//     <>
//     <div id="window-header">
//       <WindowControls target="photos" />

//       <div className=" w-full flex justify-end items-center gap-3 text-grey-500">
//         <Mail className="icon" />
//         <Search className="icon" />
//       </div>
//     </div>

//     <div className="flex w-full">
//       <div className="sidebar">
//         <h2>Photos</h2>

//         <ul>
//           {photosLinks.map(({ id, icon, title }) => (
//             <li key={id}>
//               <img src={icon} alt={title} />
//               <p>{title}</p>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="gallery">
//         <ul>
//           {gallery.map(({ id, img }) => (
//             <li 
//             key={id}
//             onClick={() => 
//               openWindow("imgfile", {
//                 id,
//                 name : "Gallery image",
//                 icon : "/images/image.png",
//                 kind : "file",
//                 fileType : "img",
//                 imageUrl : img,
//               })
//             }
//             >
//               <img src={img} alt={`Gallery image ${id}`} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//     </>
//   );
// };


// const PhotosWindow = WindowWrapper(Photos, "photos");
// export default PhotosWindow;

import { WindowControls } from "#components"
import { gallery, photosLinks } from "#constants"
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window"
import { Mail, Search } from "lucide-react"

const Photos = () => {
  const { openWindow } = useWindowStore();

  // Our bulletproof path fixer from the previous step!
  const getAsset = (path) => {
    if (!path) return '';
    return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\.\/|^\//g, '')}`;
  };

  return (
    <>
    <div id="window-header">
      <WindowControls target="photos" />

      <div className=" w-full flex justify-end items-center gap-3 text-grey-500">
        <Mail className="icon" />
        <Search className="icon" />
      </div>
    </div>

    <div className="flex w-full">
      <div className="sidebar">
        <h2>Photos</h2>

        <ul>
          {photosLinks.map(({ id, icon, title }) => (
            <li key={id}>
              {/* Wrapped in getAsset() */}
              <img src={getAsset(icon)} alt={title} />
              <p>{title}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="gallery">
        <ul>
          {gallery.map(({ id, img }) => (
            <li 
            key={id}
            onClick={() => 
              openWindow("imgfile", {
                id,
                name : "Gallery image",
                icon : "/images/image.png",
                kind : "file",
                fileType : "img",
                imageUrl : img,
              })
            }
            >
              {/* Wrapped in getAsset() */}
              <img src={getAsset(img)} alt={`Gallery image ${id}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;