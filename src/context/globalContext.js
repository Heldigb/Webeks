import React, { createContext, useReducer, useContext } from "react"

const defaultState = {
  currentTheme: 'dark',
  cursorType: false,
  cursorStyle: ["pointer", "hovered"],
}



// Define the context
const GlobalStateContext = createContext(defaultState)
const GlobalDispatchContext = createContext()




//Reducer
const globalReducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME': {
        return {
          ...state,
          currentTheme: action.theme
        }
      }

      case "CURSOR_TYPE": {
        return {
          ...state,
          cursorType: action.cursorType,
        }
      }

      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
  }





export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(globalReducer, {
      currentTheme:window.localStorage.getItem('theme') == null ? 'dark' : window.localStorage.getItem('theme'),
      cursorType: false,
      cursorStyle: ["pointer", "hovered", "locked"],
    })





    return (
      <GlobalDispatchContext.Provider value={dispatch}>
        <GlobalStateContext.Provider value={state}>
          {children}
        </GlobalStateContext.Provider>
      </GlobalDispatchContext.Provider>
    )
  }

//custom hooks for when we want to use our global state
export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
