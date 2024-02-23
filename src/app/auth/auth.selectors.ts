import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

// safe way to selec a feature of a store, considere feature cada chave do objeto store
export const selecAuthState = createFeatureSelector<AuthState>('auth')

// usando createSelector a saída tem in memory cache
export const isLoggedIn = createSelector(
  selecAuthState,
  (auth) => !!auth.user
);


export const isLoggedOut = createSelector(
  isLoggedIn,
  (loggdIn) => !loggdIn
);
