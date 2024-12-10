import { PhotoAlbum } from "react-photo-album";

const photos = [
  { src: '/photos/1.webp' , width:600, height:800},
  { src: '/photos/4.webp' , width:800, height:600},
  { src: '/photos/3.webp' , width:600, height:800},
  { src: '/photos/2.webp' , width:800, height:600},
  { src: '/photos/5.webp' , width:800, height:600},
  { src: '/photos/6.webp' , width:600, height:800},
  { src: '/photos/1.webp' , width:600, height:800},
  { src: '/photos/4.webp' , width:800, height:600},
  { src: '/photos/5.webp' , width:800, height:600},
  { src: '/photos/6.webp' , width:600, height:800},
  { src: '/photos/2.webp' , width:800, height:600},
  { src: '/photos/5.webp' , width:800, height:600},
  { src: '/photos/6.webp' , width:600, height:800},
  

];

const Portfolio_dogs = () => {
  return (
      <>
        <div className="h-full w-full pt- ">
          <PhotoAlbum photos={photos}  columns={3} layout={"columns"} padding={10} spacing={0}
          />
        </div>
      </>
  );
}

export default Portfolio_dogs;