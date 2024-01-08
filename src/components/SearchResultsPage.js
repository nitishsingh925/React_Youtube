import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { GOOGLE_API_KEY, Search_results_api } from "../utils/contants";
import { setChannelId } from "../utils/channelIdSlice";
import SearchVideoCard from "./searchVideoCard";

const SearchResultsPage = () => {
  const [params] = useSearchParams();
  const query = params.get("q");
  console.log(query);
  const [searchresults, setSearchResults] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getSearchData();
    dispatch(closeMenu());
  }, [query]);

  const getSearchData = async () => {
    try {
      const apiUrl = Search_results_api + query + "&key=" + GOOGLE_API_KEY;
      const response = await fetch(apiUrl);
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        setSearchResults(json?.items);
      }
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  };

  return (
    <div className="p-2 w-full dark:bg-slate-800 overflow-y-hidden">
      {searchresults.map((result, key) => (
        <Link
          key={key}
          to={"/watch?v=" + result?.id?.videoId}
          onClick={() => {
            dispatch(setChannelId(result?.snippet?.channelId));
          }}
        >
          <SearchVideoCard data={result?.snippet} />
        </Link>
      ))}
    </div>
  );
};
export default SearchResultsPage;
