import { createSlice, current } from "@reduxjs/toolkit";


const initialState = {
    filterProducts: [],
    allProducts: [],
    gridView: true,
    setSort: "ascending",
    filters: {
        text: " ",
        category: "all",
        maxPrice: 0,
        minPrice: 0,
        price: 0,
    }

};
export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setGridView(state) {
            return {
                ...state,
                gridView: true,
            }
        },
        setListView(state) {

            return {
                ...state,
                gridView: false,
            }

        },
        loadProducts: (state, action) => {
            state.filterProducts = action.payload
            state.allProducts = action.payload
            let priceArr = action.payload.map((element) => element.price)
            let price = Math.max(...priceArr)
            // console.log(current(price))
            state.filters.maxPrice = Math.ceil(price)
            state.filters.price = Math.ceil(price)
        },
        sorting(state) {

            const sortProducts = (a, b) => {
                if (state.setSort === "ascending") {
                    return a.title.localeCompare(b.title)
                }
                if (state.setSort === "decending") {
                    return b.title.localeCompare(a.title)
                }
                if (state.setSort === "lowest") {
                    return a.price - b.price
                }
                if (state.setSort === "highest") {
                    return b.price - a.price
                }
            }

            const tempData = [...state.filterProducts]
            const sortedData = tempData.sort(sortProducts)
            state.filterProducts = sortedData

        },
        setSorting: (state, action) => {
            return {
                ...state,
                setSort: action.payload
            }
        },
        setFilters: (state, action) => {
            state.filters[action.payload.name] = action.payload.value;
        },
        updateFilters: (state) => {
            const { filters: { text, category, price } } = state;
            let tempProducts = [...state.allProducts];

                if (text) {
                tempProducts = tempProducts.filter((element) =>
                    element.title.toLowerCase().includes(text))
                if (category !== "all") {
                    tempProducts = tempProducts.filter((element) => {
                        return element.category === category;
                    })
                }
                if ( price === 0) {
                    tempProducts = tempProducts.filter(
                        (curElem) => curElem.price == price
                    )
                } else {
                    tempProducts = tempProducts.filter(
                        (curElem) => curElem.price <= price
                    )
                }
                state.filterProducts = tempProducts;
            }
        }
    },
});

export const { setGridView, setListView, loadProducts, sorting, setSorting, setFilters, updateFilters } = productSlice.actions

export default productSlice.reducer

