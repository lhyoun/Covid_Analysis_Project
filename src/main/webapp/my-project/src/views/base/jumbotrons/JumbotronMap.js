import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CJumbotron,
  CRow,
  CEmbed,
  CEmbedItem
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const JumbotronMap = () => {

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Corona Map
            </CCardHeader>
            <CCardBody>
              <CEmbed>
                {/* <CEmbedItem src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"/> */}
                <CEmbedItem src="covidmap.html"/>
              </CEmbed>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default JumbotronMap
