import React from "react";
import { UilShoppingCart } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {addToCart} from '../redux/ActionFtns'



function Items({id, title, image}) {

  const passURL = `itemdetails/${id}`
  const dispatch = useDispatch()
  
  const {allRecipe} = useSelector(state => state.allRecipe)
  
  const handleClick = (itemID)=>{
  
    const data = allRecipe.find(finditem => finditem.idMeal == itemID)
    localStorage.setItem('favourites', JSON.stringify(data))
    const getFavourites = localStorage.getItem('favourites')
    dispatch(addToCart(JSON.parse(getFavourites)))
  }
  
  return (
  
      
      <div key={id} className="bg-white border shadow-sm rounded-xl hover:-translate-y-1 hover:scale-105 hover:duration-300 overflow-hidden">
      <Link to={passURL}><img
        src={image}
        className="w-full rounded-t-xl object-fill h-48"
      /></Link>
      <div className="px-5 py-8">
        <p className="text-amber-500 font-bold text-xl">{title}</p>
        <button onClick={() => handleClick(id) } className="bg-white rounded-full text-solet-50 flex border p-2 hover:bg-amber-200">
          Add to Favourites <UilShoppingCart className="pl-2" />
        </button>
      </div>
    </div>
    )

}


export default Items;
