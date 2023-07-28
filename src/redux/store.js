import { configureStore } from '@reduxjs/toolkit'
import skybagsReducer from '../redux/skybagsSlice'

export default configureStore({
  reducer: {skybagsReducer},
})