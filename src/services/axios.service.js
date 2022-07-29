import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGVhMjk2NzA0NzVhZDRhMDUwMDYzZTI5NTFmYzhhNSIsInN1YiI6IjYyZTJkM2I4ZDRmZTA0MDA1ZDEyNGI1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RS1kIh7trM1ZQrVR4bhuOSPqCaBFdEtZrg80WGR_jnY'
    }
})
export {axiosInstance}


