import { CBadge, CCard, CCardBody, CCardGroup, CCardHeader,
    CCol,
    CDataTable,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CDropdownDivider,
    CRow } from '@coreui/react';
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

    const [data, setData] = React.useState([{}]);

    useEffect(() => {
        // tab1 - 실시간 확진 data
        fetch("http://localhost:8000/CovidRoute", {
        method: "get",
        }).then((res) => res.json())
        .then((res) => {
        console.log("지역별 확진 정보 - Route_Busan.js - fetch all res -", res);
        setData(res);
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
                        <CDropdownMenu>
                            {/* <CDropdownItem header>Header</CDropdownItem> */}
                            {/* <CDropdownItem disabled>Action Disabled</CDropdownItem> */}
                            <CDropdownItem>부산</CDropdownItem>
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
                        Pie Chart
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
                                data: [40, 20, 80, 10]
                            }
                            ]}
                            labels={['VueJs', 'EmberJs', 'ReactJs', 'AngularJs']}
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