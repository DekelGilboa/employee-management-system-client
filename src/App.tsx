import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "18vw 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <div>nav</div>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
            <div>aside</div>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <div>main</div>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
