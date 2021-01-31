export const initialState = {
    basket: []
}

// selector

export const getBasketTotal = (basket) => basket?.reduce((acc, item) => item.price + acc, 0)


export const reducer = (state, action) => {
    console.log(state.basket)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state, basket: [...state.basket, action.item]
            }
        case 'REMOVE_TO_BASKET':
            return {
                ...state, basket: [...state.basket.filter(el => el.id !== action.id)]
            }

    }
}