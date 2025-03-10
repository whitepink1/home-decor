"use client";

import { useState } from "react";
import FormInput from "./FormInput";
import {handleSubmit} from "./handleSubmit";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);
        const { success, message: responseMessage } = await handleSubmit(payload);  
        setLoading(false);
        setMessage(responseMessage);
        if (success) {
            //setFormData({ fullName: "", email: "", subject: "", description: "" });
        }
    }

    return(
        <form onSubmit={onSubmit} method="POST" className="flex flex-col justify-between h-[625px] w-[625px] bg-green-100 p-[30px]">
            <div>
                <h5 className="text-[28px] font-semibold text-basic-50">Get in touch</h5>
                <p className="text-[16px] text-basic-50/80">Have a question or need assistance? We’re here to help! Reach out to us for inquiries, design advice, or support—we’d love to hear from you.</p>
            </div>
            <div className="flex justify-between gap-x-6">
                <FormInput areaName="fullName" type="text" pH="Full Name">Your name</FormInput>
                <FormInput areaName="email" type="email" pH="Email">Your email</FormInput>
            </div>
            <FormInput areaName="subject" type="text" pH="Subject (e.g., Order Issue, Product Inquiry)">Subject</FormInput>
            <FormInput areaName="description" type="text" d={true} pH="Describe your request in detail...">Your message</FormInput>
            <button className="uppercase w-[230px] h-[50px] bg-basic-600 text-basic-50 text-[20px] font-semibold" type="submit">{loading ? "Sending..." : "Send Message"}</button>
        </form>)
}