import {create} from "zustand";
import axios from "axios";

const BASE_URL="https://foodbackend-2-fjv5.onrender.com/api/products";

export const useProduct=create((set,get)=>({
    products:[],
    loading:false,
    error:null,

    fetchProducts:async ()=>{
        set({loading:true});
        try{
            const response=await axios.get(`${BASE_URL}/api/products`);
            set({products:response.data.data,error:null});
        }catch(err){
            set({error:"Something went wrong"});
        }finally{
            set({loading:false});
        }
    }
}));

export const searchProduct=create((set,get)=>({
    products:[],
    loading:false,
    error:null,

    fetchProducts:async (item)=>{
        set({loading:true});
        try{
            const response=await axios.get(`${BASE_URL}/api/products/search?item=${encodeURIComponent(item)}`);
            set({products:response.data.data,error:null});
        }catch(err){
            set({error:"Something went wrong"});
        }finally{
            set({loading:false});
        }
    }
}));
