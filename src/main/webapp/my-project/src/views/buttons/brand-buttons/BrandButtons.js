import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Route_Busan from 'src/components/card/Route_Busan'
import JumbotronMap from 'src/views/base/jumbotrons/JumbotronMap'

const BrandButtons = () => {
  return (
    <>
      <Route_Busan></Route_Busan>
      <JumbotronMap></JumbotronMap>
    </>
  )
}

export default BrandButtons
