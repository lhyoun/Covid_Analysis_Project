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
import JumbotronMap from 'src/views/base/jumbotrons/JumbotronMap'


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
                    header="47"
                    text="인근 확진"
                    color="gradient-success"
                    inverse
                    value={100}
                >
                    <CIcon name="cil-people" height="36"/>
                </CWidgetProgressIcon>

                <CWidgetProgressIcon
                    header="17"
                    text="5km 이내 확진"
                    color="gradient-warning"
                    inverse
                    value={34}
                >
                    <CIcon name="cil-speedometer" height="36"/>
                </CWidgetProgressIcon>

                <CWidgetProgressIcon
                    header="2"
                    text="2km 이내 확진"
                    color="gradient-primary"
                    inverse
                    value={4}
                >
                  <CIcon name="cil-speedometer" height="36"/>
                </CWidgetProgressIcon>

                <CWidgetProgressIcon
                    header="1"
                    text="500m 이내 확진"
                    color="gradient-danger"
                    inverse
                    value={2}
                >
                  <CIcon name="cil-speedometer" height="36"/>
                </CWidgetProgressIcon>

            </CCardGroup>

            <CCardGroup className="mb-4">
                <CWidgetProgressIcon
                    header="7.544km"
                    text="평균 확진자 발생지까지의 거리"
                    value={75}
                    >
                    <CIcon name="cil-chartPie" height="36"/>
                </CWidgetProgressIcon>

                <CWidgetProgressIcon
                    header="0.766km"
                    text="표준편차"
                    value={75}
                    >
                    <CIcon name="cil-chartPie" height="36"/>
                </CWidgetProgressIcon>

                <CWidgetProgressIcon
                    header="7.391km ~ 7.697km"
                    text="신뢰구간 95%"
                    value={75}
                    >
                    <CIcon name="cil-chartPie" height="36"/>
                </CWidgetProgressIcon>
            </CCardGroup>


            <CCardGroup className="mb-4">

                <CWidgetProgressIcon
                    header="6.774km"
                    text="서면 파이넨스센터"
                    color="gradient-danger"
                    progressSlot={
                        <CProgress color="danger" size="xs" value={75} animated className="my-3"
                    />}
                    >
                    <CIcon name="cil-speedometer" height="36"/>
                </CWidgetProgressIcon>

                <CWidgetProgressIcon
                    header="-1.005"
                    text="Z-value"
                    color="gradient-danger"
                    progressSlot={
                        <CProgress color="danger" size="xs" value={40} animated className="my-3"
                    />}
                    >
                    <CIcon name="cil-speedometer" height="36"/>
                </CWidgetProgressIcon>

                <CWidgetProgressIcon
                    header="14.7%"
                    text="안전도"
                    color="gradient-danger"
                    progressSlot={
                        <CProgress color="danger" size="xs" value={14} animated className="my-3"
                    />}
                    >
                    <CIcon name="cil-speedometer" height="36"/>
                </CWidgetProgressIcon>

            </CCardGroup>
            <JumbotronMap></JumbotronMap>

        </>
    );
};

export default Search_return;