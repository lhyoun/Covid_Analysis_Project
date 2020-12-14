import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">Made by&nbsp;</span>
        <a href="https://narare0551.github.io/" target="_blank" rel="noopener noreferrer">narae Kang</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
