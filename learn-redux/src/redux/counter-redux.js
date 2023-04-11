export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// 액션 생성함수
export function increase(amount) {
  return {
    type: INCREMENT,
    amount,
  };
}

export function decrease(amount) {
  return { type: DECREMENT, amount };
}

function counter(state = 0, action) {
  //amount 전달 받아서 amount 만큼 증가, 감소
  switch (action.type) {
    case INCREMENT:
      return state + action.amount;
    case DECREMENT:
      return state - action.amount;
    default:
      return state;
  }
}

export default counter;
