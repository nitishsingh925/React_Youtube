import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

function WatchPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const [searchParams] = useSearchParams();
  const video_id = searchParams.get("v");
  const iframe_url = `https://www.youtube.com/embed/${video_id}`;
  return (
    <div className="flex flex-col w-full">
      <div className="px-8">
        <div className="flex">
          <iframe
            className="flex h-[25rem] w-[50rem] mr-6"
            src={iframe_url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div>
            <LiveChat />
          </div>
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
}

export default WatchPage;
