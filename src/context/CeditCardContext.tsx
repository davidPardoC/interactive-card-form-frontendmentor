import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { creditCardReducer, initialState } from "../reducers/creditCardReducer";
import { ActionInterface, CreditCardState } from "../reducers/types";

export const CreditCardContext = createContext<CreditCardState>(
  initialState as CreditCardState
);

export const DispatchContext = createContext<React.Dispatch<ActionInterface>>(
  () => {}
);

export const useDispatch = () => useContext(DispatchContext);

export const CreditCardProvider = ({ children }: { children: ReactNode }) => {
  const [state, distpatch] = useReducer(creditCardReducer, initialState);
  return (
    <CreditCardContext.Provider value={state}>
      <DispatchContext.Provider value={distpatch}>
        {children}
      </DispatchContext.Provider>
    </CreditCardContext.Provider>
  );
};
