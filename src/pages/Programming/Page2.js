import React from 'react'
import { FullPage } from '../../components/styles'

import {programmer} from '../../imgs/'
import CustomCarousel from '../../components/Carousel/index'

const Page2 = () => {
  return (
    <FullPage dark id='programming1'>
      <CustomCarousel imgs={programmer} pos={'5%'}/>
    </FullPage>
  )
}

export default Page2
