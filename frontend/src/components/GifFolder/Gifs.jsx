/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from "react";
import axios from "axios";
import Selected from "./Selected";
import Search from "./Search";

function Gifs({ setGifUser, selectedGif, setSelectedGif }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState("Robot");

  const accessToken = import.meta.env.VITE_API_PUBLIC_KEY;
  const limit = 50;

  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${accessToken}&q=${value}&limit=${limit}&rating=g`
      )
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  }, [value, limit]);

  return isLoading ? (
    <section>
      <h2 className="title">Loading...</h2>
    </section>
  ) : (
    <section className="mt-44">
      {selectedGif && (
        <Selected selectedGif={selectedGif} setGifUser={setGifUser} />
      )}
      <Search
        data={data}
        value={value}
        setValue={setValue}
        setSelectedGif={setSelectedGif}
      />
    </section>
  );
}

export default Gifs;
