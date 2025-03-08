import React, { useEffect, useState } from "react";
import axiosInstance from "../utility/axios-instance";
import { useParams } from "react-router-dom";

const CheckIn = () => {
    const [bookingDetails, setBookingDetails] = useState({});
    const { id } = useParams();

    // Fetch booking details
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axiosInstance.get(`/bookings/${id}`);
                if (response?.data?.success) {
                    setBookingDetails(response?.data?.data);
                } else {
                    alert(response?.data?.message);
                }
            } catch (error) {
                console.error("Error fetching booking details:", error);
                alert("Failed to fetch booking details.");
            }
        };
        fetchDetails();
    }, [id]);

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        const fileInputs = event.target.querySelectorAll('input[type="file"]');
        let allFilesPresent = true;

        fileInputs.forEach((input) => {
            const files = input.files;
            if (files.length === 0) {
                allFilesPresent = false;
            } else {
                for (let i = 0; i < files.length; i++) {
                    formData.append(input.name, files[i]);
                }
            }
        });

        if (!allFilesPresent) {
            alert("All Adhar Card uploads are required!");
            return;
        }

        try {
            const response = await axiosInstance.put(`/bookings/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response?.data?.success) {
                alert("Files uploaded successfully!");
            } else {
                alert(response?.data?.message);
            }
        } catch (error) {
            console.error("Error uploading files:", error);
            alert("Upload failed. Please try again.");
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Check-In</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Adhar Card for Adults */}
                {Array.from({ length: bookingDetails?.adult || 0 }).map((_, index) => (
                    <div key={`adult-${index}`} className="flex flex-col">
                        <label className="font-medium">{`Upload Adhar Card (Adult) ${index + 1}`}</label>
                        <input type="file" name="adharCardAdult" required />
                    </div>
                ))}

                {/* Adhar Card for Children */}
                {Array.from({ length: bookingDetails?.children || 0 }).map((_, index) => (
                    <div key={`child-${index}`} className="flex flex-col">
                        <label className="font-medium">{`Upload Adhar Card (Child) ${index + 1}`}</label>
                        <input type="file" name="adharCardChild" required />
                    </div>
                ))}

                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CheckIn;