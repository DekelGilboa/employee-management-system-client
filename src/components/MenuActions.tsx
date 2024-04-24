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

const MenuActions = () => {
  const actions = ["Get many", "Get single", "Add", "Update", "Delete"];
  const { selectedAction, setSelectedAction } = useContext(appContext);

  return (
    <>
      <Show below="lg">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {selectedAction}
          </MenuButton>
          <MenuList>
            {actions.map((action) => (
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
          defaultIndex={actions.indexOf(selectedAction)}
          onChange={(index) => {
            setSelectedAction(actions[index]);
          }}
        >
          <TabList>
            {actions.map((action) => (
              <Tab key={action}>{action}</Tab>
            ))}
          </TabList>
        </Tabs>
      </Show>
    </>
  );
};

export default MenuActions;
