import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
const billStore = createSlice({
  name: 'bill',
  initialState: {
    billList: []
  },
  reducers: {
    setBillList: (state, action) => {
      state.billList = action.payload;
    }
  }
})
export const { setBillList } = billStore.actions;
const setBillListAsync = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:8888/ka')
    dispatch(setBillList(response.data))
  }
}
export {setBillListAsync}
const reducer = billStore.reducer;
export default reducer;