export const initialState = {
  basket: [],
  user: null,
  flag: false,
};

// Selector || reduce maps through basket  reduce(function(total,currval,index,arr),initialvalue)
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove the product with (id:${action.id})
          as its not in basket
          `);
      }
      return { ...state, basket: newBasket };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_LOGIN_FLAG":
      return {
        ...state,
        flag: action.flag,
      };
    default:
      return state;
  }
};

export default reducer;
