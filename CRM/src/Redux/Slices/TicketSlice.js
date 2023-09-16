import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import toast  from "react-hot-toast";

// import  AxiosInstance  from  '../../config/axiosInstance';
import axiosInstance from "../../config/axiosInstance";



const initialState = {
    ticketList: [],
    ticketDistribution: {
        open: 0,
        inProgress: 0,
        resolved: 0,
        onHold: 0,
        cancelled: 0
    }
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
        builder.addCase(getAllTicketsforTheUser.fulfilled, (state, action) => {
                if(!action?.payload?.data) return;
                state.ticketList = action?.payload?.data?.result; 
                const tickets = action?.payload?.data?.result;
                state.ticketDistribution = {
                    open: 0,
                    inProgress: 0,
                    resolved: 0,
                    onHold: 0,
                    cancelled: 0
                };  
                tickets.forEach(ticket => {
                    state.ticketDistribution[ticket.status] = state.ticketDistribution[ticket.status] + 1;
                });
            });
    }
});

export default ticketSlice.reducer;