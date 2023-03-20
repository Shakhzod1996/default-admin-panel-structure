import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import sidebarReducer from "./reducers/SidebarSlice/SidebarSlice";

const store = configureStore({
  reducer: {
    sideBarData: sidebarReducer,
    // reducers...
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
