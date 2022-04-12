import React from 'react'

import { Thumbnail, SubTitle } from '../../components/styles'

import CustomModal from '../../components/Modal'

import { magazine, brochure, logo } from '../../imgs'
 
const Page2 = () => {

  return (
    <Thumbnail dark id='graphics1'> 
      {/* <button onClick={toggleModal}>
        Show modal
      </button>
      <Modal isVisible={isVisible} hideModal={toggleModal} /> */}

        <div>
          
          <span className='thumbnail'>
            <CustomModal 
              imgs={magazine}
              title='Killer Whale Magazine'
              />
            <SubTitle> Magazine </SubTitle>
          </span>

          <span className='thumbnail'>
            <CustomModal 
              imgs={brochure}
              title='Anti-Bully Brochure'
            />
            <SubTitle> Brochure </SubTitle>
          </span>

          <span className='thumbnail'>
            <CustomModal 
              imgs={logo}
              title='Logo for diet/delivery Company'
            />
            <SubTitle> Logo Design </SubTitle>
          </span>

        </div>
    </Thumbnail>
  )
}

export default Page2
