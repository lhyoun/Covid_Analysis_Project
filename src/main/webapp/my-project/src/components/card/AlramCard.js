import { CBadge, CCard, CCardBody, CCardHeader, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';
import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

const AlramCard = () => {

    const [covidAlarm, setCovidAlarm] = React.useState([{}]);

    useEffect(() => {
        // tab1 - 실시간 확진 data
        fetch("http://localhost:8000/CovidAlarm", {
        method: "get",
        }).then((res) => res.json())
        .then((res) => {
        console.log("전국 실시간 재난문자 - AlramCard.js - fetch all res -", res);
        setCovidAlarm(res);
        });
    }, []);


    return (
        <Row>
            <Col md={12}>  
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
            </Col>        
            <Col md={12}>
                <br/>
            </Col>
            {covidAlarm.map(
            (res) => (
                <Col md={3}>  
                    <CCard>
                        <CCardHeader>
                            {res.city}
                            <div className="card-header-actions">
                                <CBadge color="success" className="float-right">{res.time}</CBadge>
                            </div>
                        </CCardHeader>
                        <CCardBody>
                            {res.message}
                        </CCardBody>
                    </CCard>
                </Col>
            ))}
        </Row>
    );
};

export default AlramCard;