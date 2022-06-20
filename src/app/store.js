
import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from '../features/dashboard/dashboard.reducer'
import profileReducer from '../features/profile/profile.reducer'

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})