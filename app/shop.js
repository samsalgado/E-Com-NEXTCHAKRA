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
      name: "Save The Tatas Set",
      pic: Images.savethetatas,
      pic2: Images.savethetataspanties,
      price: 99.99
    },
    {
      id: 2,
      name: 'Purple Flowers Set',
      pic1: Images.purpleflowers,
      pic3:Images.purplepanties,
      price:69.99
    },
    {
      id:3,
      name: 'Dark Wave',
      pic1:Images.darkwavebralette,
      pic3: Images.darkflowers,
      price:29.99
    },
    {
      id:4,
      name:'Red Beauty Set',
      pic1:Images.red,
      pic3:Images.redbow,
      price:49.99
    },
        {
      id: 5,
      name: "Like A Sunflower",
      pic: Images.sunflowersfront,
      pic2: Images.sunflowersfront,
      price: 39.99
    },    {
      id: 6,
      name: "Kimonos",
      pic: Images.kimono,
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
          <div key={key}>
            <h2>{val.name}</h2>
            <h2>${val.price}</h2>
          <Box>
            <Carousel width={"30vmin"} 
>
            <Image
          src={val.pic}
          className='slide1'


          
          />
          <Image
          src={val.pic2}
          className='slide1'
        
          />
          </Carousel>
</Box>
            <Carousel width={"30vmin"}
>
            <Image
          src={val.pic1}
          className='slide1'


          
          />
          <Image
          src={val.pic3}
          className='slide1'
          />
          </Carousel>
            </div>

            

        )
      })}
    </Flex>
    </>
  )
}

export default Shop;