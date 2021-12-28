import axios from "axios";

const baseUrl = "http://localhost:8000/posts";

function fetchItems() {
    return axios.get(baseUrl);
}


export  { fetchItems };