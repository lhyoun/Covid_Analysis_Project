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

const Jumbotrons = () => {

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Jumbotron
              <DocsLink name="CJumbotron"/>
            </CCardHeader>
            <CCardBody>
              <CJumbotron className="border">
                <h1 className="display-3">코로나 현황 모아보기 </h1>
                <p className="lead"> 객관적인 지표 모아보기 
                코로나 지도로 안전도 파악하기 </p>
                <hr className="my-2" />
                <p>객관적으로 코로나 상황을 파악하려면 양성률 , 검사율을 봐야 합니다</p>
                <p className="lead">
                  <CButton color="primary" size="lg">바로가기</CButton>
                </p>
              </CJumbotron>
            </CCardBody>
          </CCard>
        </CCol>
   
      </CRow>
    </>
  )
}

export default Jumbotrons
