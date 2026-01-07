//libs
import { createContext } from "react";

//context
const AndromedaContext = createContext();

function Provider({children}) {
    //state management
    //fetch
    //lifecycle methods
    return (
        <AndromedaContext.Provider value={{}}>
            {children}
        </AndromedaContext.Provider>
    )
}

export {AndromedaContext, Provider}