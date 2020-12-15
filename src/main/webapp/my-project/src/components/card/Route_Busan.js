import { CBadge, CCard, CCardBody, CCardGroup, CCardHeader,
    CCol,
    CDataTable,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CDropdownDivider,
    CRow, 
    CTooltip,
    CLink} from '@coreui/react';
import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import {
    CChartBar,
    CChartLine,
    CChartDoughnut,
    CChartRadar,
    CChartPie,
    CChartPolarArea
  } from '@coreui/react-chartjs'

const Route_Busan = () => {
    // 부산 전체 이동경로 포함된 확진정보
    const [data, setData] = React.useState([{}]);
    // 확진 장소 타입(음식점, 학원) 별 count
    const [data2, setData2] = React.useState([{'sanitized':0},{'sanitized':0},{'sanitized':0},{'sanitized':0},{'sanitized':0}]);
    // 확진 장소 시도군(진구, 사하구) 별 count
    const [data3, setData3] = React.useState([{'sanitized':0},{'sanitized':0},{'sanitized':0},{'sanitized':0},{'sanitized':0}]);

    useEffect(() => {
        // tab1 - 실시간 확진 data
        fetch("http://localhost:8000/CovidRoute", {
            method: "get",
            }).then((res) => res.json())
            .then((res) => {
            console.log("확진자 이동경로 탭 - Route_Busan.js - fetch all res -", res);
            setData(res);
        });

        fetch("http://localhost:8000/CovidRoute/type", {
            method: "get",
            }).then((res) => res.json())
            .then((res) => {
            console.log("확진자 이동경로 탭 - Route_Busan.js - fetch all res -", res);
            setData2(res);
        });

        fetch("http://localhost:8000/CovidRoute/region", {
            method: "get",
            }).then((res) => res.json())
            .then((res) => {
            console.log("확진자 이동경로 탭 - Route_Busan.js - fetch all res -", res);
            setData3(res);
            });
    }, []);

    const getBadge = sanitized => {
      switch (sanitized) {
        case '소독완료': return 'success'
        default: return ''
      }
    }
    const fields = ['district', 'location_name', 'address', 'exposed_time', 'sanitized']

    return (
        <>
            <CCard>
                <CCardHeader>
                    지역별 상세정보
                </CCardHeader>

                <CCardBody>

                    <CDropdown className="m-1">
                        <CDropdownToggle color="secondary" size="sm">
                            지역 선택
                        </CDropdownToggle>
                        <br/>
                        <CTooltip content="시,구,군">
                            <CLink> District/ </CLink>
                        </CTooltip> 

                        <CTooltip content="장소 이름">
                            <CLink> Location Name/ </CLink>
                        </CTooltip> 

                        <CTooltip content="방문시간">
                            <CLink> Exposed Time/ </CLink>
                        </CTooltip> 

                        <CTooltip content="소독 여부">
                            <CLink> Sanitized </CLink>
                        </CTooltip> 
                        <CDropdownMenu>
                            {/* <CDropdownItem header>Header</CDropdownItem> */}
                            {/* <CDropdownItem disabled>Action Disabled</CDropdownItem> */}
                            <CDropdownItem>부산</CDropdownItem>
                            <CDropdownItem>서울</CDropdownItem>
                            <CDropdownItem>광주</CDropdownItem>
                            <CDropdownItem>대구</CDropdownItem>
                            <CDropdownItem>울산</CDropdownItem>
                            {/* <CDropdownDivider />
                            <CDropdownItem>Another Action</CDropdownItem> */}
                        </CDropdownMenu>
                    </CDropdown>

                    <CDataTable
                    items={data}
                    fields={fields}
                    striped
                    itemsPerPage={10}
                    pagination
                    scopedSlots = {{
                        'sanitized':
                        (item)=>(
                            <td>
                            <CBadge color={getBadge(item.sanitized)}>
                                {item.sanitized}
                            </CBadge>
                            </td>
                        )
                    }}
                    />
                </CCardBody>
            </CCard>

            <Row> 
                <Col md={6}>
                    <CCard>
                        <CCardHeader>
                            <CTooltip content="확진자가 많이 발생하는 장소">
                                <CLink> 장소 </CLink>
                            </CTooltip> 
                        </CCardHeader>
                        <CCardBody>
                        <CChartPie
                            datasets={[
                            {
                                backgroundColor: [
                                '#41B883',
                                '#E46651',
                                '#00D8FF',
                                '#DD1B16'
                                ],
                                data: [data2[0].sanitized, data2[1].sanitized, data2[2].sanitized, data2[3].sanitized, data2[4].sanitized]
                            }
                            ]}
                            labels={[data2[0].location_type, data2[1].location_type, data2[2].location_type, data2[3].location_type, data2[4].location_type]}
                            options={{
                            tooltips: {
                                enabled: true
                            }
                            }}
                        />
                        </CCardBody>
                    </CCard>
                </Col>  

                <Col md={6}>
                    <CCard>
                        <CCardHeader>
                            <CTooltip content="확진자가 많이 발생하는 지역">
                                <CLink> 시,도,군 </CLink>
                            </CTooltip> 
                        </CCardHeader>
                        <CCardBody>
                        <CChartPie
                            datasets={[
                            {
                                backgroundColor: [
                                '#41B883',
                                '#E46651',
                                '#00D8FF',
                                '#DD1B16'
                                ],
                                data: [data3[0].sanitized, data3[1].sanitized, data3[2].sanitized, data3[3].sanitized, data3[4].sanitized]
                            }
                            ]}
                            labels={[data3[0].district, data3[1].district, data3[2].district, data3[3].district, data3[4].district]}
                            options={{
                            tooltips: {
                                enabled: true
                            }
                            }}
                        />
                        </CCardBody>
                    </CCard>
                </Col>  
            </Row> 
        </>
    );
};

export default Route_Busan;