import { combineReducers, createStore } from "redux";
import {gioHangReducer} from './Reducers/gioHangReducer'

let stateGioHangDefault = [
  {
    maSP: 1,
    tenSP: "Iphone",
    giaBan: 1000,
    soLuong: 1,
    hinhAnh: "https://i.pravatar.cc?u=1",
  },
];
//rootReducer xem như state tổng của ứng dụng
const rootReducer = combineReducers({
  //Nơi chứa các state của ứng dụng
  gioHangReducer,
//   numberReducer: (state = 1) => {
//     return state;
//   },
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
