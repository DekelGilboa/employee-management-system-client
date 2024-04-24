import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const XL = styled.span`
  font-size: 140%;
`;

const Logo = () => {
  return (
    <Text
      fontSize={20}
      fontWeight={"bold"}
      whiteSpace={"nowrap"}
      my={{ base: 4, md: 0 }}
    >
      👷‍♂️ <XL>E</XL>mployees <XL>M</XL>anagment <XL>S</XL>ystem 👷‍♂️
    </Text>
  );
};

export default Logo;
