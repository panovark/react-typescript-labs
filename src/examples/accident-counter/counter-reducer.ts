export const initialState = {
  count: 0,
};

type Action = {
  type: string;
  payload?: unknown;
};

interface IncrementAction extends Action {
  type: 'increment';
  payload?: never;
}

interface DecrementAction extends Action {
  type: 'decrement';
  payload?: never;
}

interface SetCountAction extends Action {
  type: 'set-count';
  payload: number;
}

export type CounterAction = IncrementAction | DecrementAction | SetCountAction;

// Improvement: Define a proper Action type instead of using 'any'.

export const counterReducer = (state = initialState, action: CounterAction) => {
  console.log({ action });
  const { count } = state;

  switch (action.type) {
    case 'increment': {
      const newCount = count + 1;
      return { count: newCount };
    }
    case 'decrement': {
      const newCount = count - 1;
      return { count: newCount };
    }
    case 'set-count': {
      const newCount = action.payload;
      return { count: newCount };
    }
    default:
      return state;
  }
};
