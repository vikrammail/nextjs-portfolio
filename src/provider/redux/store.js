import { configureStore } from "@reduxjs/toolkit";
import { ChangeColor } from "./ColorChange";

export const store = configureStore({
    reducer: {
        'ChangeColor':ChangeColor.reducer
    }
})