// import axios from "axios";

import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://twelfth-assignment-server-steel.vercel.app'
})
 
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;