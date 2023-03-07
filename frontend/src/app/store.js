import { configureStore } from '@reduxjs/toolkit';
import tourReducer from '../features/tour/tourSlice';
import tourPlanReducer from '../features/tourPlan/tourPlanSlice';

export const store = configureStore({
  reducer: {
    tours: tourReducer,
    plan: tourPlanReducer,
  },
});
