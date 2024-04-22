import { createContext } from "react";

export interface AppContext {
    selectedAction: string;
    setSelectedAction: (action: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultFunction = (action: string) => {};

const context : AppContext = {selectedAction: "", setSelectedAction: defaultFunction};

const appContext = createContext(context);

export default appContext;
