import { createSlice } from "@reduxjs/toolkit"

export const appSlice = createSlice({

  name: "app", 
  initialState:{

  }
})



export const selectapp = (state) => state.app.value

export default appSlice.reducer