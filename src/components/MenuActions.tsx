// import { useContext } from "react";
// import appContext from "../context/appContext";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import appContext from "../context/appContext";
import { useContext } from "react";
import { ACTIONS } from "../utils/constants";

const MenuActions = () => {
  const { selectedAction, setSelectedAction } = useContext(appContext);

  return (
    <>
      <Show below="lg">
        <Menu>
          <MenuButton m={1} as={Button} rightIcon={<ChevronDownIcon />}>
            {selectedAction}
          </MenuButton>
          <MenuList>
            {ACTIONS.map((action) => (
              <MenuItem key={action} onClick={() => setSelectedAction(action)}>
                {action}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Show>
      <Show above="lg">
        <Tabs
          me={3}
          p={2}
          variant="soft-rounded"
          defaultIndex={ACTIONS.indexOf(selectedAction)}
          onChange={(index) => {
            setSelectedAction(ACTIONS[index]);
          }}
        >
          <TabList>
            {ACTIONS.map((action) => (
              <Tab key={action}>{action}</Tab>
            ))}
          </TabList>
        </Tabs>
      </Show>
    </>
  );
};

export default MenuActions;
