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
 
const Korea = () => {

    const [data, setData] = React.useState([{}]);

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
    // 지역 , 총 , 10만명당, 전일대비 층감 , 
    const fields = ['region', 'confirmed', 'total', 'occur_rate', 'domestic']

    return (
        <>
            <CCard>
                <CCardHeader>
                    지역별 상세정보
                </CCardHeader>

                <CCardBody>
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

            <Row> 
                
            </Row> 
        </>
    );
};

export default Korea;