import axios from "axios";

export const BASE_URL="http://localhost:8000";

const API = axios.create({
    baseURL: BASE_URL,
});

export const getAllRestaurents = async () => API.get("/api/restaurent/");
export const getRestaurent = async (id: string) => API.get(`/api/restaurent/${id}`);


export const getAllMenuItems = async () => API.get(`/api/menu`);


export const getMenuItem = async (id: string) => API.get(`/api/menu/${id}`);


export const getAllCategories = async () => API.get(`/api/category`);


export const getCategory = async (id: string) => API.get(`/api/category/${id}`);
