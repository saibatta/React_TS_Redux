import { createSlice, configureStore } from "@reduxjs/toolkit";
import { machineType } from "../model/machineModal";

const machinerySlice = createSlice({
  name: "machinery",
  initialState: {
    machineDatavalue: [],
  },
  reducers: {
    intialLoad: (state: any) => {
      let data: any = localStorage.getItem("machineData");
      state.machineDatavalue.push(...JSON.parse(data));
    },
    addMachinery: (state: any, { payload }) => {
      state.machineDatavalue.push(payload);
      localStorage.removeItem("machineData");
      localStorage.setItem(
        "machineData",
        JSON.stringify(state.machineDatavalue)
      );
    },
    deleteMachinery: (state: any, { payload }) => {
      state.machineDatavalue = [...state.machineDatavalue].filter(
        (obj: machineType) => obj.model !== payload.model
      );
      localStorage.removeItem("machineData");
      localStorage.setItem(
        "machineData",
        JSON.stringify(state.machineDatavalue)
      );
    },
    updateMachinery: (state: any, { payload }) => {
      state.machineDatavalue = [...state.machineDatavalue].map(
        (obj: machineType) => {
          if (obj.model === payload.model) {
            return (obj = { ...payload });
          } else {
            return obj;
          }
        }
      );
      localStorage.removeItem("machineData");
      localStorage.setItem(
        "machineData",
        JSON.stringify(state.machineDatavalue)
      );
    },
  },
});

export const { intialLoad, addMachinery, deleteMachinery, updateMachinery } =
  machinerySlice.actions;

export const store = configureStore({
  reducer: machinerySlice.reducer,
});
store.dispatch(intialLoad());
store.subscribe(() => console.log(store.getState()));
