import React from 'react'
import pic from './btcforgirls.png';
import { Box, Flex } from "@chakra-ui/react";
import './App.css';

const Footer = () => {
  return (
 <div>
     <Box boxSize={'sm'} position={"absolute"} top={"0px"} right={"0px"} float={"right"} height={"auto"} width={"150px"}>
        <Image  src={pic} />
        </Box>
                   <div><h1 className='header'>Bitcoin for Females</h1></div>

           <div className='contact'> <button className='mail' onClick={() => window.location = 'mailto:samueljuansalgado@gmail.com'}>Contact Me</button></div>
        </div>
    )
}

export default Footer