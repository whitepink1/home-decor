"use server";

import { createRequest } from "../_lib/data-service";

export const handleSubmit = async (payload) => {
    try {
        const response = await createRequest(payload);
    
        if (response.ok) {
          return { success: true, message: "Form submitted successfully!" };
        } else {
          const errorData = await response.json();
          return { success: false, message: errorData.message || "Something went wrong. Please try again." };
        }
      } catch (error) {
        return { success: false, message: "Network error. Please try again later." };
      }
}