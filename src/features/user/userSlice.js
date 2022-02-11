import { createSlice} from "@reduxjs/toolkit"
const initialState={
    name:"",
    email:"",
    photo:""
}
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setuserLogin:(state,action)=>{
          state.name=action.payload.name; // save users data here
          state.email=action.payload.email;// save users data here
          state.photo=action.payload.photo;// save users data here
          
          
        },
        setSignout:(state) =>{
            state.name=null;
            state.email=null;
            state.photo=null
        }
    }
})

export const {setuserLogin,setSignout} = userSlice.actions;

export const selectUserName = (state)=> state.user.name;
export const selectUserEmail = (state)=> state.user.email;
export const selectUserPhoto = (state)=> state.user.photo;

export default userSlice.reducer;
