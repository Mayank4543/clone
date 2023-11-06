import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./context/contextapi";
import Header from "./components/header";
import Feed from "./components/feed";
import LeftNav from "./components/leftNav";
import leftNavMenuitem from "./components/leftNavMenuitem";
import SearchResult from "./components/Searchresult";
import Suggestion from "./components/SuggestionVideo";
import VideoCard from "./components/VideoCard";
import VideoDetails from "./components/VideoDetails";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};
export default App;
