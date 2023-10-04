import React from 'react';
import { useDispatch } from 'react-redux ';
import { addExpenseAction } from '../../store/expense/expense-slice';

// store에 data가 바뀌기 위해서 dispatch를 넣어준다.
// store를 변경하는건 reducer
export default function ExpenseInput() {
  const dispatch = useDispatch();
  function submit(event) {
    event.preventDefault();
    dispatch(addExpenseAction());
  }

  return (
    <form onSubmit={submit}>
      <div>
        <label>
          지출 상품 명 :<input type="text" placeholder='예 : "사과"'></input>
        </label>
      </div>
      <div>
        <label>
          지출 상품 금액 :<input type="number" placeholder="예 : 5000"></input>
        </label>
      </div>
      <button type="submit">추가</button>
    </form>
  );
}
