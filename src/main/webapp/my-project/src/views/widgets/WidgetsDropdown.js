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
  const [data1, setData1] = React.useState(1030);

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
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header={data1}
          text="일별 확진자"
          footerSlot={
            <ChartBarSimple dataPoints={[data[0].cases, data[1].cases, data[2].cases,
              data[3].cases, data[4].cases, data[5].cases,
              data[6].cases, data[7].cases, data[8].cases,
              data[9].cases, data[10].cases, data[11].cases]}
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
    </CRow>
  )
}

export default WidgetsDropdown
