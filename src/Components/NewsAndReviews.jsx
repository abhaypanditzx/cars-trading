import { Link } from "react-router-dom";
function NewsAndReviews() {
  return (
    <div className="w-full flex justify-center h-[100vh] ">
 <div className="w-[80%]">
 <div >
        <Link to="/">home</Link>
        <Link to="/NewsAndReviews"> {window.location.pathname}</Link>
      </div>
      <div className="flex flex-col">
        <h1 className="roboto text-3xl p-212 text-gray-700">Latest Car News in India</h1>
        <p className="w-[70%] text-gray-600 sans  p-2">
          New car launches, Launch date, Car Images, Expo and Events, Price
          updates, Latest Discounts, Facelifts, Recalls, and much more - Read
          all news, updates, and insights on the Indian car Industry
        </p>
      </div>
 </div>
    </div>
  );
}

export default NewsAndReviews;
