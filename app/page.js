"use client";
import "./app.css";
import logo from './btcforgirls.png';
import Shop from "./shop";
import shop from './shop.png';
import Shop2 from "./shop2";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import NavBar from "./Header";
const Home = () => {
  return (
    <header>
      <NavBar />
      <Box boxSize={'sm'} position={"absolute"} top={"0px"} right={"0px"} float={"right"} height={"auto"} width={"150px"}>
        <Image  src={logo} />
        </Box>
        <h1 className=" h">Bitcoin For Females</h1>

        <Flex alignItems={"center"}>
        <Box mt={"100px"} top={"50%"} left={"50%"}  ml={"350px"} width={"55%"}
>
          <Image
          src={shop}
          />
        </Box>
        </Flex>
        <Box mt={"100px"}>
        <Shop />
        </Box>
        <Box mt={"100px"}>
        <Shop2 />
        </Box>

    </header>
  )
}
export default Home;