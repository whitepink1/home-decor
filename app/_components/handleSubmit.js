"use server";

import { createRequest } from "../_lib/data-service";

export const handleSubmit = async (payload) => {
    try {
        const {data, error} = await createRequest(payload);
        console.log('Response: ', data)
        return { data, error };
      } catch (error) {
        throw error;
      }
}