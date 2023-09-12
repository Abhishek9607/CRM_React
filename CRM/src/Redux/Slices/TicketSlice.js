import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import toast  from "react-hot-toast";

// import  AxiosInstance  from  '../../config/axiosInstance';
import axiosInstance from "../../config/axiosInstance";



const initialState = {
    ticketList: []
};

export const getAllTicketsforTheUser = createAsyncThunk('tickets/getallTicketsforTheUser',async() => {
    try {
        const repsponse = axiosInstance.get("getMyAssignedTickets", {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        });
        toast.promise(repsponse, {
            success: 'Successfully loaded all the tickets',
            loading: 'Fetching tickets belonging to you',
            error: 'Something went wrong'
        });
        return await repsponse;
    } catch(error) {
        console.log(error);
    }
});

const ticketSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllTicketsforTheUser.fullfilled, (state, action) => {
                if(!action?.payload?.data) return;
                state.ticketList = action?.payload?.data?.result;       
            });
    }
});

export default ticketSlice.reducer;