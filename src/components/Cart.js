import React from "react";
import { useSelector } from "react-redux";
function Cart() {
  const {cartList} = useSelector(state=>state.cartList)

  console.log(cartList)
  return (
    <>
      <div className="rounded-lg shadow-md mx-auto bg-amber-50 p-10 py-20 my-10 ">
      <h2 className="text-xl font-bold text-center">Your Favourites</h2>
          {  cartList ?  cartList.map(item => {
               return  (
                <div key={item.idMeal} className="bg-white border shadow-sm rounded-xl hover:-translate-y-1 hover:scale-105 hover:duration-300 overflow-hidden my-10">
                <img
                    src={item.strMealThumb}
                    className="w-full rounded-t-xl object-fill h-48"
                  />
              <div className="px-5 py-8">
                <p className="text-amber-500 font-bold text-xl">{item.strMeal}</p>
                
              </div>
            </div>
               )
            })  :'' }

      </div>
    </>
  );
}

export default Cart;
