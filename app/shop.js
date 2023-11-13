import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import Images from "./Images";
import "./Images";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//             for line 34 and other price lines.(change eventually to https://www.youtube.com/watch?v=tEMrD9t85v4 in case that button is price.)

import Image from "next/image";
import {useMemo} from 'react';
const Shop = () => {
  const product = useMemo(() =>
  [
    {
      id: 1,
      name: "Save The Tatas",
      pic: Images.savethetatas,
      pic2: Images.savethetataspanties,
      price: 99.99
    },
    {
      id: 2,
      name: 'Purple Flowers',
      pic1: Images.purpleflowers,
      pic2:Images.purplepanties,
      price:69.99
    },
    {
      id:3,
      name: 'Dark Wave',
      pic1:Images.darkwavebralette,
      pic2: Images.darkflowers,
      price:29.99
    },
    {
      id:4,
      name:'Red Beauty',
      pic1:Images.red,
      pic2:Images.redbow,
      price:49.99
    },
        {
      id: 5,
      name: "Like A Sunflower",
      pic1: Images.sunflowersfront,
      pic2: Images.sunflowersfront,
      price: 39.99
    },    {
      id: 6,
      name: "Kimonos",
      pic1: Images.kimono,
      pic2: Images.orange_kimono,
      price: 89.99
    }

  ],
  
  []
  )

  return (
    <>
    <h1 className='shop'>Shop</h1>
    <br></br>
    <Flex>

      {product.map((val, key) => {
        return (
          <div key={key} >
            <h2>{val.name}</h2>
            <h2>${val.price}</h2>
          <Box>
            <Carousel width={"40vmin"} 
>
          
          <Image 
          src={val.pic1}
          className='slide1'
          width={"30vmin"}


          
          />
          <Image
          src={val.pic2}
          className='slide1'
          width={"30vmin"}
        
          />
         

          
         
          
          </Carousel>
</Box>
          
            </div>
            
       )
      })}
      
    </Flex>
    </>
  )
}

export default Shop;