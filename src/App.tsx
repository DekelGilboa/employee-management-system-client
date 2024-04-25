import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import MainContent from "./components/MainContent";
import appContext from "./context/appContext";
import { useState } from "react";
import {GET_MANY} from "./utils/constants";

function App() {

  const [selectedAction, setSelectedAction] = useState(GET_MANY);

  return (
    <>
    <appContext.Provider value={{selectedAction, setSelectedAction}}>
      <Grid templateAreas={`"nav" "main"`} templateColumns={"1fr"}>
        <GridItem area={"nav"}>
          <NavigationBar />
        </GridItem>
        <GridItem area={"main"}>
          <MainContent />
        </GridItem>
      </Grid>
    </appContext.Provider>
    </>
  );
}

export default App;
