
import {axiosInstance} from "./axios.service";


 export class MoviesServices {
    async getMovies() {
        const {data} = await axiosInstance.get('/discover/movie?language=ru')
        return data
    }

}

 const moviesServices = new MoviesServices();
