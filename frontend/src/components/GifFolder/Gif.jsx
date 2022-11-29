/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
function Gif({ gif, setSelectedGif }) {
  return (
    <div className="h-40 w-40 m-1">
      <img
        className="gif-image"
        src={gif.images.downsized.url}
        alt={gif.title}
        onClick={() => setSelectedGif(gif)}
      />
    </div>
  );
}

export default Gif;
