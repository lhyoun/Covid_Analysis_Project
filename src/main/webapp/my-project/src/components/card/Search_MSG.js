import React from 'react';
import {
    CBadge,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CRow,
    CCollapse,
    CFade,
    CSwitch,
    CLink
  } from  '@coreui/react'
const Search_MSG = () => {
    return (
        <>
            <br/>
            <CCard color="gradient-secondary">
                <CCardBody>
                    - 검색한 지역 주변의 확진정보를 보여주는 서비스입니다.<br/>
                    - 원하는 지역을 검색해보세요!
                </CCardBody>
            </CCard>
        </>
    );
};

export default Search_MSG;