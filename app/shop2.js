import React from 'react'
import { Flex } from '@chakra-ui/react'
import Images from "./Images";
import "./Images";
//             for line 34 and other price lines.(change eventually to https://www.youtube.com/watch?v=tEMrD9t85v4 in case that button is price.)

import Image from "next/image";
import {useMemo} from 'react';
const Shop2 = () => {
  const product = useMemo(() =>
  [
    {
      id: 3,
      name: 'Aqua Panties',
      pic1: Images.aqua,
      price:6.99
    },
    {
      id:4,
      name: 'Space Purple Bralette',
      pic1:Images.darkbra,
      price:9.99
    },
    {
      id:5,
      name:'Butterflies',
      pic1:Images.butterfly,
      price:7.99
    },
    {
      id:6,
      name:'Fuchsia Boy Shorts',
      pic1:Images.fuchsia,
      price:7.99
    },  {
      id:7,
      name:'Ocean Vibes Panties',
      pic1:Images.oceans,
      price:6.99
    },  {
      id:8,
      name:'Sexy Bones',
      pic1:Images.sexybones,
      price:8.99
    },  {
      id:9,
      name:'All Together',
      pic1:Images.together,
      price:7.99
    },
    

  ],
  
  []
  )

  return (
    <>
    <Flex>

      {product.map((val, key) => {
        return (
          <div key={key}>
            <h2>{val.name}</h2>
            <h2>${val.price}</h2>



          <Image
          src={val.pic1}
          className='slide1'
          width={"30vmin"}
        
          />
            </div>
            

        )
      })}
    </Flex>
    </>
  )
}

export default Shop2;