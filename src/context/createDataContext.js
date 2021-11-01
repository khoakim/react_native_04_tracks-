import React, { useReducer} from "react";

// the exported function will be called with a reducer, some "actions" object, and default Values/default states
export default (reducer, actions, defaultValue) => {

    // create our context
    const Context = React.createContext();

    // create helper Provider function which is a comp which takes children as props
    const Provider = ({ children }) => {
        // when calling useReducer, we need to pass in a reducer function (function with different "switch" statement)
        const [state,dispatch]= useReducer(reducer,defaultValue);

        // call each of "action" with dispatch
        // React will automatically take the action and send to reducer for us
        const boundActions = {}
        // looping
        for (let key in actions){
            // call each "action" with dispatch
            boundActions[key]=actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state,...boundActions}}>
                {children}
            </Context.Provider>
        )
    };

    return { Context, Provider };
}