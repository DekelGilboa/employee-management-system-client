import { Stack } from "@chakra-ui/react";
import ThemeSwitch from "./ThemeSwitch";
import Logo from "./Logo";
import MenuActions from "./MenuActions";
// import ThemeSwitch from "./ThemeSwitch";
// import SearchInput from "./SearchInput";

// interface Props {
//   onSearch: (search: string) => void;
// }
const NavigationBar = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justifyContent={"space-between"}
      align={"center"}
    >
      <Logo />
      <MenuActions />
      <ThemeSwitch />
    </Stack>
  );
};

export default NavigationBar;
