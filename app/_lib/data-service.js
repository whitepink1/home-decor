import { supabase } from "./supabase";

export async function getProduct(id) {
    const {data, error} = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

    if(error) {
        console.error(error);
    }
    return data;
}

export const getProducts = async function(){
    const {data, error} = await supabase
    .from('products')
    .select('*')
    .order('id');

    if(error) {
        console.error(error);
    }
    return data;
}

export const getReviews = async function(){
    const {data, error} = await supabase
    .from('reviews')
    .select('*')
    .order('id');

    if(error) {
        console.error(error);
    }
    return data;
}

export async function createRequest(newRequest) {
    const { data, error } = await supabase
      .from("contactUS")
      .insert([newRequest]);
  
    if (error) {
      console.error(error);
      throw new Error("Request could not be send");
    }
    return data;
  }