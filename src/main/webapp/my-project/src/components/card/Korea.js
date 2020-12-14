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
import { DocsLink } from 'src/reusable';
 
const Korea = () => {

    const [data, setData] = React.useState([{'occur_rate':0},{'occur_rate':0},{'occur_rate':0},{'occur_rate':0},{'occur_rate':0},
    {'occur_rate':0},{'occur_rate':0},{'occur_rate':0},{'occur_rate':0},{'occur_rate':0},
    {'occur_rate':0},{'occur_rate':0},{'occur_rate':0},{'occur_rate':0},{'occur_rate':0},
    {'occur_rate':0},{'occur_rate':0},{'occur_rate':0},{'occur_rate':0}]);

    useEffect(() => {
        fetch("http://localhost:8000/allData", {
          method: "get",
        }).then((res) => res.json())
        .then((res) => {
          console.log("mainForm allData [json type]", res);
          setData(res);
        });
    }, []);

    const getBadge = region => {
      switch (region) {
        case '합계' : return 'success'
        default: return ''
      }
    }
    // 지역 , 총 , 신규, 10만명당, 전일대비 층감 , 
    const fields = ['region', 'confirmed', 'total', 'occur_rate', 'domestic']
    const label1 = ['강원','경기','경남','경북','광주','대구','대전','부산','서울','세종','울산','인천','전남','전북','제주','충남','충북']
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
                    itemsPerPage={20}
                    pagination
                    scopedSlots = {{
                        '':
                        (item)=>(
                            <td>
                                <CBadge color={getBadge(item.region)}>
                                    {item.region}
                                </CBadge>
                            </td>
                        )
                    }}
                    />
                </CCardBody>
            </CCard>

            <CCardGroup columns className = "cols-2" >
                <CCard>
                    <CCardHeader>
                        {/* 10만명당 */}
                        인구대비 확진자
                    {/* <DocsLink href="#"/> */}
                    </CCardHeader>
                    <CCardBody>
                    <CChartBar
                        datasets={[
                        {
                            label: '인구 10만명당 확진자',
                            backgroundColor: '#f87979',
                            data: [data[0].occur_rate, data[2].occur_rate, data[3].occur_rate, 
                            data[4].occur_rate, data[5].occur_rate, data[6].occur_rate, data[7].occur_rate, 
                            data[8].occur_rate, data[9].occur_rate, data[10].occur_rate, data[11].occur_rate, 
                            data[12].occur_rate, data[13].occur_rate, data[14].occur_rate, data[15].occur_rate, 
                            data[16].occur_rate, data[17].occur_rate
                            ]
                        }
                        ]}
                        labels={label1}
                        options={{
                            tooltips: {
                                enabled: true
                            }
                        }}
                    />
                    </CCardBody>
                </CCard>


                <CCard>
                    <CCardHeader>
                        최근 추이
                    {/* <DocsLink href="#"/> */}
                    </CCardHeader>
                    <CCardBody>
                    <CChartBar
                        datasets={[
                        {
                            label: '전일대비 증감',
                            backgroundColor: '#f87979',
                            data: [data[0].domestic, data[2].domestic, data[3].domestic, 
                            data[4].domestic, data[5].domestic, data[6].domestic, data[7].domestic, 
                            data[8].domestic, data[9].domestic, data[10].domestic, data[11].domestic, 
                            data[12].domestic, data[13].domestic, data[14].domestic, data[15].domestic, 
                            data[16].domestic, data[17].domestic
                            ]
                        }
                        ]}
                        labels={label1}
                        options={{
                            tooltips: {
                                enabled: true
                            }
                        }}
                    />
                    </CCardBody>
                </CCard>
            </CCardGroup>
        </>
    );
};

export default Korea;