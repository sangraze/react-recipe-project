import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import Items from "./Items";
import { useEffect, useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import { getRecipeData } from "../redux/ActionFtns";
import axios from "axios";

function SearchBar() {
  const dispatch = useDispatch();
  const [record, setRecord] = new useState([]);

  const {allRecipe} = useSelector((state)=>state.allRecipe)
  
 

  const fetchRecipes = async () => {
    const res = await axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken")
      .catch((err) => {
        console.log(err);
      });
    setRecord(res.data.meals);
    dispatch(getRecipeData(res.data.meals));
  };
   const searchRecipe = (e) => {
     var query = e.target.value;

     setRecord(
      allRecipe.filter((item) => item.strMeal.toLowerCase().includes(query))
     );
   };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <>
      <div className="rounded-lg shadow-md mx-auto bg-amber-50 p-10 py-20 my-10">
        <div className="flex bg-white border">
          <input
            className="w-full py-4 px-5 outline-none bg-inherit col-span-3"
             onChange={searchRecipe}
            placeholder="Search..."
          />
          <UilSearch className="col-span-1 w-20 my-auto h-7 text-slate-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
          {record.map((recipe) => {
            const recipesObj = {
              id: recipe.idMeal,
              title: recipe.strMeal,
              image: recipe.strMealThumb,
            };
            return <Items {...recipesObj} />;
          })}
        </div>
      </div>
    </>
  );
}
/* https://img.delicious.com.au/Iok992Gi/w759-h506-cfill/del/2022/02/chicken-chickpea-curry-163942-1.jpg */
export default SearchBar;
