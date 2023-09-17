import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/product_reducer";
import axios from 'axios';
import { products_url as url } from "../utils/constant";
import {
     GET_PRODUCTS_BEGIN,
     GET_PRODUCTS_ERROR, 
     GET_PRODUCTS_SUCCESS, 
     GET_SINGLE_PRODUCT_BEGIN, 
     GET_SINGLE_PRODUCT_ERROR, 
     GET_SINGLE_PRODUCT_SUCCESS, 
     SIDEBAR_CLOSE, 
     SIDEBAR_OPEN 
    } from "../actions";


const ProductContext = React.createContext()
const initialState = {
    isSidebarOpen: false,
    error: false,
    products: [],
    featured_products: [],
    products_loading: false,
    products_error: false,
    single_product: {},
    single_product_loading: false,
    single_product_error: false,
}



export const ProductProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const openSidebar = ()=>{
        dispatch({type: SIDEBAR_OPEN})
    }
    const closeSidebar = ()=>{
        dispatch({type: SIDEBAR_CLOSE})
    }
    const fetchProducts = async ()=>{
        dispatch({type: GET_PRODUCTS_BEGIN})
        try{
            const response = await axios.get(url)
            const products = response.data
            dispatch({type: GET_PRODUCTS_SUCCESS, payload: products})
        }catch(error){
            dispatch({type: GET_PRODUCTS_ERROR})
        }
    }
    const fetchSingleProduct = async (url)=>{
        dispatch({type: GET_SINGLE_PRODUCT_BEGIN})
        try{
            const response = await axios.get(url)
            const singleProduct = response.data
            dispatch({type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct})
        }catch(error){
            dispatch({type: GET_SINGLE_PRODUCT_ERROR})
        }
    }
    
    useEffect(()=>{
        fetchProducts(url)
    }, [])
    return(
        <ProductContext.Provider value={{
            ...state,
            openSidebar,
            closeSidebar,
            fetchSingleProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = ()=>{
    return useContext(ProductContext)
}
