import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      // Redux Toolkit允许我们在化简器中编写“变异”逻辑。 它实际上不会改变状态，因为它使用了Immer库，
      // 该库可检测到“草稿状态”的更改并根据这些更改生成全新的不可变状态

      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// 下面的函数称为thunk，它使我们能够执行异步逻辑。 它可以像常规动作一样被调度：`dispatch（incrementAsync（10））`。 
// 这将以`dispatch`函数作为第一个参数调用thunk。 然后可以执行异步代码并可以调度其他操作

export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

// 下面的函数称为选择器，它使我们可以从状态中选择一个值。 
// 选择器也可以内联定义而不是在切片文件中使用。
//  例如：`useSelector((state) => state.counter.value)`

export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
