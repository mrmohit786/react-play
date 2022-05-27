import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import WithLoading from "../../HigherOrderComponent/withLoading";

const WaifuList = memo(({ randomWaifus }) => {
  return (
    <div className="waifu-image-wrapper">
      {randomWaifus &&
        randomWaifus.map((data) => (
          <div key={data.id}>
            <a href={data.url} target="_blank" rel="noreferrer">
              <img loading="lazy" className="waifu-image" src={data.url} alt={data.id} />
            </a>
          </div>
        ))}
    </div>
  );
});

const WaifusWithLoading = WithLoading(WaifuList);

const tags = ["uniform", "maid", "waifu", "oppai", "selfies"];

const Waifu = () => {
  const [randomWaifus, setRandomWaifus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTags, setSelectedTags] = useState(["waifu"]);

  const API_URLS = {
    RANDOM: "/random/?many=true",
  };

  const request = axios.create({
    baseURL: "https://api.waifu.im",
  });

  const getWaifuList = async () => {
    try {
      setLoading(true);
      const {
        data: { images },
      } = await request.get(`${API_URLS.RANDOM}&${selectedTags}`);
      setRandomWaifus(images);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleSelectedTag = (selectedTag) => {
    if (!selectedTags.includes(selectedTag)) {
      setSelectedTags((prevTag) => [...prevTag, selectedTag]);
    } else {
      const filteredTags = selectedTags.filter((tag) => tag !== selectedTag);
      setSelectedTags((prevTag) => [...filteredTags]);
    }
  };

  useEffect(() => {
    getWaifuList();
  }, [selectedTags]);

  return (
    <div className="waifu-container">
      <h4>Enjoy Waifus</h4>
      <div>
        {tags.map((tag) => (
          <button
            className={`waifu-tags ${
              selectedTags.includes(tag) && `waifu-tag-active`
            }`}
            onClick={() => handleSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <WaifusWithLoading isLoading={loading} randomWaifus={randomWaifus} />
    </div>
  );
};

export default Waifu;
