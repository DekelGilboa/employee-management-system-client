import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <Grid templateAreas={`"nav" "main"`} templateColumns={"1fr"}>
        <GridItem area={"nav"}>
          <NavigationBar />
        </GridItem>
        <GridItem area={"main"}>
          <div>main</div>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
