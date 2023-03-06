import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    lastName: '',
    jobTitle: '',
    department: '',
    businessEmail: '',
    businessName: '',
    industry: '',
    hearingSource: '',
    messageContent: '',
    newsLetter: true
}


export const formSlice = createSlice({
    name: 'formState',
    initialState,
    reducers:{
        setFormData: (state,action) => {
           state[action.payload.name] = action.payload.value
        },
    }
});

export const {setFormData} = formSlice.actions;

 export default formSlice.reducer;