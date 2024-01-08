import { useState, useEffect } from "react";
import { channelImage_api } from "../utils/contants";

// Each Video Card in Search Results Page
const SearchVideoCard = ({ data }) => {
  const [details, setDetails] = useState(null);
  const imgUrl = details?.items[0].snippet?.thumbnails?.high?.url || {};

  useEffect(() => {
    getChannelImage();
  }, []);

  // Getting Channel Data with Channel Id
  const getChannelImage = async () => {
    const api_data = await fetch(channelImage_api + "&id=" + data?.channelId);
    const json = await api_data.json();
    setDetails(json);
  };

  // Removed the section related to PublishedTimeOfVideo

  return (
    <div className="flex max-sm:flex-col flex-row bg-gray-50 py-2 max-sm:px-10 max-sm:pb-10">
      {/* Thumbnail */}
      <img
        className="flex justify-center rounded-lg h-40 max-sm:w-full"
        src={data?.thumbnails?.medium?.url}
      />
      {/* Video Details */}
      <div className="px-2 w-full flex flex-col">
        <span className="font-semibold text-lg ">{data?.title}</span>
        {/* Removed the line related to PublishedTimeOfVideo */}
        <div className="flex items-center">
          <img
            className="w-8 my-2 rounded-full"
            src={imgUrl}
            alt="Channel Thumbnail"
          />
          <span className="flex items-center px-2 text-sm">
            {data?.channelTitle}
          </span>
        </div>
        {/* Video Description */}
        <span className="text-sm ">{data?.description}</span>
      </div>
    </div>
  );
};

export default SearchVideoCard;
