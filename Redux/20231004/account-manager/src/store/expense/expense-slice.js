import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
  name: 'expenseSlice',
  initialState: {
    // 사용자의 지출 목록을 관리한다.
    expenseList: [
      { name: 'coffee', price: 5000 },
      { name: 'icecream', price: 1500 },
    ],
  },
  reducers: {
    // addExpenseAction ==> 액션 type의 이름
    addExpenseAction: () => {
      console.log('addExpenseAction');
    },
  },
});

// action을 디스패치에서 사용할 수 있도록 밖으로 내보낸다.
export const { addExpenseAction } = expenseSlice.actions;

// slice에서 생성한 reducer들을 외부로 내보낸다.
export default expenseSlice.reducer;
