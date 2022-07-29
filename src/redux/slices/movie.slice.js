import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MoviesServices} from "../../services/movie.service";


const initialState = {
    movies: [],
    errors: null
}


const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            let moviesServices = new MoviesServices();
            const {data} = await moviesServices;

        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{

    },
    extraReducers:(builder) =>{
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
                state.errors = null
                console.log(state.movies)
                console.log('fullfilled')
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
                console.log('rejected')
            })
    }
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    getAll
}

export {
    movieReducer,
    movieActions
}