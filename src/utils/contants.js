export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export const OFFSER_LIVE_CHAT = 50;
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;
export const YOUTUBE_SRARCH_API = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;
export const Search_results_api = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=`;
export const channelImage_api =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY;
