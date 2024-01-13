import { createSlice } from "@reduxjs/toolkit";

export const ChangeColor = createSlice({
    name: "ChangeColor",
    initialState: "#006400", //green color
    reducers: {
        ChangeColorToColor(state,action){
            state.color = '#000'
        }
    }
})