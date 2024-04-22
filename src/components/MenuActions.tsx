import { ChevronDownIcon } from "@chakra-ui/icons";
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

const MenuActions = () => {
  const actions = ["Get many", "Get Single", "Add", "Update", "Delete"];
  return (
    <>
      <Show below="lg">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            {actions.map((action) => (
              <MenuItem key={action}>{action}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Show>
      <Show above="lg">
        <Tabs>
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
