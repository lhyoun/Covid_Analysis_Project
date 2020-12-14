import React, { useEffect } from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = () => {
  // render
  const [data1, setData1] = React.useState({'case':1030, 'per':3.5151, 'test':31215});

  const [data, setData] = React.useState([{'cases':0},{'cases':0},{'cases':0},
    {'cases':0},{'cases':0},{'cases':0},
    {'cases':0},{'cases':0},{'cases':0},
    {'cases':0},{'cases':0},{'cases':0}]);

  useEffect(() => {
    fetch("http://localhost:8000/korea", {
      method: "get",
    }).then((res) => res.json())
    .then((res) => {
      console.log("korea allData [json type]", res);
      setData(res);
    });
  }, []);

  return (
    <CRow>
      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="warning"
          header={data1.case}
          text="일별 확진자"
          footerSlot={
            <ChartBarSimple dataPoints={[data[0].cases, data[1].cases, data[2].cases,
              data[3].cases, data[4].cases, data[5].cases,
              data[6].cases, data[7].cases, data[8].cases,
              data[9].cases, data[10].cases, data[11].cases]}
              className="mt-3 mx-3"
              style={{height: '70px'}}
              backgroundColor="rgb(250, 250, 152)"
              label="Members"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>


      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-danger"
          header={data1.per}
          text="일별 양성률"
          footerSlot={
            <ChartBarSimple dataPoints={[data[0].per, data[1].per, data[2].per,
              data[3].per, data[4].per, data[5].per,
              data[6].per, data[7].per, data[8].per,
              data[9].per, data[10].per, data[11].per]}
              className="mt-3 mx-3"
              style={{height: '70px'}}
              backgroundColor="rgb(250, 152, 152)"
              label="Members"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>


      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="info"
          header={data1.test}
          text="일별 검사자"
          footerSlot={
            <ChartBarSimple dataPoints={[data[0].tests, data[1].tests, data[2].tests,
              data[3].tests, data[4].tests, data[5].tests,
              data[6].tests, data[7].tests, data[8].tests,
              data[9].tests, data[10].tests, data[11].tests]}
              className="mt-3 mx-3"
              style={{height: '70px'}}
              backgroundColor="rgb(152, 250, 250)"
              label="Members"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

    </CRow>
  )
}

export default WidgetsDropdown
