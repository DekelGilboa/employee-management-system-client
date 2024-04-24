import { Stack } from "@chakra-ui/react";
import ThemeSwitch from "./ThemeSwitch";
import Logo from "./Logo";
import MenuActions from "./MenuActions";

const NavigationBar = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justifyContent={"space-between"}
      align={"center"}
      mb={2}
    >
      <Stack direction={{ base: "column", md: "row" }}>
        <Logo />
        <ThemeSwitch />
      </Stack>
      <MenuActions />
    </Stack>
  );
};

export default NavigationBar;
