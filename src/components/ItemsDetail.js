import { UilShoppingCart } from "@iconscout/react-unicons";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import {getSingleRecipe} from '../redux/ActionFtns'
import { useParams } from "react-router-dom";

function ItemsDetail() {
  const URLparms = useParams('id')
  const dispatch = useDispatch()
  const {singleRecipe} = useSelector((state)=>state.singleRecipe)
  const getRecipeDetails = async (id) => {
    const res = await axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .catch((err) => {
        console.log(err);
      });
      console.log('data:',res.data.meals)
      dispatch(getSingleRecipe(res.data.meals))


  };
  

  useEffect(()=>{
    getRecipeDetails(URLparms.id)
  },[])

  

  return (
    <div className="container m-auto">    
       {singleRecipe.map(items =>{
       console.log('items',items)
       
       return (
      <div className="flex flex-wrap">
        <img
          src={items.strMealThumb}
          className="w-full rounded-t-xl object-cover"
        />
        <div className="py-8 overflow-hidden">
          <h1 className="text-sovet-500 font-bold text-xl">{items.strMeal}</h1>
          <p className="text-lg text-solet-50 my-3">
           {items.strInstructions}           
          </p>
         <h2 className="text-sovet-500 font-bold text-xl">Category</h2>
         <p className="my-4">{items.strCategory}</p>

          <button className="bg-white rounded-full text-solet-50 flex border p-2 hover:bg-amber-200">
            Add to cart <UilShoppingCart className="pl-2" />
          </button>
        </div>
      </div>
      )})}
    </div>
  );
}

export default ItemsDetail;
