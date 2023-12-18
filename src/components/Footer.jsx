import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Box bg="#252322" p={"1rem"}>
      <Flex
        align={"center"}
        justify={"center"}
        w={"65%"}
        m={"0 auto"}
        gap={"1rem"}
      >
        <Text color={"#ABABA9"} fontFamily={"Montserrat Variable"}>
          reservations@nuuktaal.com
        </Text>
        <Text color={"#ABABA9"}>|</Text>
        <Text color={"#ABABA9"} fontFamily={"Montserrat Variable"}>
          295 Talisay-Laurel Rd, Km 89, Barangay Berinayan, Laurel, Batangas
        </Text>
        <Text color={"#ABABA9"}>|</Text>
        <Flex align={"center"} justify={"center"} gap={"1rem"}>
          <Text
            color={"#ABABA9"}
            fontFamily={"Montserrat Variable"}
            textDecoration={"underline"}
          >
            +63(0)917 517 6885
          </Text>
          <Text
            color={"#ABABA9"}
            fontFamily={"Montserrat Variable"}
            textDecoration={"underline"}
          >
            +63(0)960 375 5912
          </Text>
        </Flex>
      </Flex>
      <Text
        color={"white"}
        fontFamily={"Montserrat Variable"}
        textAlign={"center"}
      >
        © 2023 by Camp Stone Hill
      </Text>
    </Box>
  );
}
