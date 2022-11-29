/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
function Selected({ selectedGif, setGifUser }) {
  const handleClickGif = () => {
    // 👇️ push to end of state array
    setGifUser((current) => [...current, selectedGif.images.downsized.url]);
  };
  return (
    <div className="selected w-36 h-36">
      <img
        src={selectedGif.images.downsized.url}
        alt={selectedGif.title}
        onClick={handleClickGif}
      />
    </div>
  );
}

export default Selected;
