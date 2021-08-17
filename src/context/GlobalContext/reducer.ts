import * as types from "./actionsTypes";

interface accountsProps {
  description: string;
  value: number;
  date: string;
}

interface GlobalState {
  accounts: Array<accountsProps>;
  earnings: number;
  spending: number;
  total: number;
}

export const reducer = (state: GlobalState, action: any) => {
  switch (action.type) {
    case types.MUDA:
      return { ...state };
    case types.ADD_VALUE:
      return { ...state, accounts: [...state.accounts, action.value] };
    case types.REMOVE_VALUE:
      const newAccouts = removeValue(state.accounts, action.key);
      return { ...state, accounts: newAccouts };
  }

  console.log("Action type not found!");
  return { ...state };
};

function removeValue(
  state: Array<accountsProps>,
  key: string
): Array<accountsProps> {
  console.log("state:", state);
  console.log("key: ", key);
  const newAccounts = state.filter((value) => {
    return value.description !== key;
  });

  return newAccounts;
}
