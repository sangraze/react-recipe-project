import React from "react";
import SearchBar from "./SearchBar";
import Cart from "./Cart";

function Home() {
  return (
    <div>
      
        <div className="w-5/6 grid grid-cols-2 gap-4 mx-auto sm:grid-cols-3">
          <div className="sm:col-span-2">
            <SearchBar />
          </div>
          <div className="sm:col-span-1">
              <Cart />
          </div>
        </div>
    </div>
  );
}

export default Home;
