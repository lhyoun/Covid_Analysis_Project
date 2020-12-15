import React from 'react';
import {
    CCardGroup,
    CCardFooter,
    CCol,
    CLink,
    CRow,
    CWidgetProgress,
    CWidgetIcon,
    CWidgetProgressIcon,
    CWidgetSimple,
    CProgress,
  } from '@coreui/react'
import CIcon from '@coreui/icons-react';
const Search_return = () => {
    // 확진지 까지 거리 검색 결과 페이지
    // 내 주변에 
    return (
        <>
            <br/>
            <CCardGroup className="mb-4">
                {/* <CWidgetProgressIcon
                    header="87.500"
                    text="Visitors"
                    color="gradient-info"
                    inverse
                >
                    <CIcon name="cil-people" height="36"/>
                </CWidgetProgressIcon> */}

                <CWidgetProgressIcon
                    header="48"
                    text="총 확진"
                    color="gradient-success"
                    inverse
                    value={100}
                >
                    <CIcon name="cil-people" height="36"/>
                </CWidgetProgressIcon>

                <CWidgetProgressIcon
                    header="24"
                    text="5km 이내 확진"
                    color="gradient-warning"
                    inverse
                    value={48}
                >
                    <CIcon name="cil-speedometer" height="36"/>
                </CWidgetProgressIcon>

                <CWidgetProgressIcon
                    header="12"
                    text="2km 이내 확진"
                    color="gradient-primary"
                    inverse
                    value={24}
                >
                  <CIcon name="cil-speedometer" height="36"/>
                </CWidgetProgressIcon>

                <CWidgetProgressIcon
                    header="2"
                    text="500m 이내 확진"
                    color="gradient-danger"
                    inverse
                    value={9}
                >
                  <CIcon name="cil-speedometer" height="36"/>
                </CWidgetProgressIcon>

            </CCardGroup>
        </>
    );
};

export default Search_return;