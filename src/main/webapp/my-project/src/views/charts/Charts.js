import React, { useEffect } from 'react';
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader
} from '@coreui/react'
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea
} from '@coreui/react-chartjs'
import { DocsLink } from 'src/reusable'

const Charts = () => {
  const [data, setData] = React.useState([
    {'country':0, 'new_deaths_per_million':0,'new_tests_per_thousand':0},
    {'country':0, 'new_deaths_per_million':0,'new_tests_per_thousand':0},
    {'country':0, 'new_deaths_per_million':0,'new_tests_per_thousand':0},
    {'country':0, 'new_deaths_per_million':0,'new_tests_per_thousand':0},
    {'country':0, 'new_deaths_per_million':0,'new_tests_per_thousand':0},
    {'country':0, 'new_deaths_per_million':0,'new_tests_per_thousand':0},
    {'country':0, 'new_deaths_per_million':0,'new_tests_per_thousand':0},
    {'country':0, 'new_deaths_per_million':0,'new_tests_per_thousand':0},
    {'country':0, 'new_deaths_per_million':0,'new_tests_per_thousand':0},
    {'country':0, 'new_deaths_per_million':0,'new_tests_per_thousand':0},
    {'country':0, 'new_deaths_per_million':0,'new_tests_per_thousand':0},
    {'country':0, 'new_deaths_per_million':0,'new_tests_per_thousand':0}
  ]);
  
  useEffect(() => {
    fetch("http://localhost:8000/oecdbycountry/Greece", {
      method: "get",
      
    }).then((res) => res.json())
    .then((res) => {
      console.log("mainForm allData [json type]", res);
      setData(res);
      console.log("---------this is data[20] test----")
      console.log(data[1])
      console.log("--new_deaths_per_million--")
      console.log(data[1].new_deaths_per_million)

     
    });
}, []);
  return (
    <CCardGroup columns className = "cols-2" >
      

     
      <CCard>
        <CCardHeader>
          Line Chart
        </CCardHeader>
        <CCardBody>
          <CChartLine
            datasets={[
              {
                label: 'Data One',
                backgroundColor: 'rgb(228,102,81,0.9)',
                data: [data[2].new_deaths_per_million,data[2].new_tests_per_thousand,data[2].positive_rate]
              },
              {
                label: 'Data Two',
                backgroundColor: 'rgb(0,216,255,0.9)',
                data: [data[3].new_deaths_per_million,data[3].new_tests_per_thousand,data[3].positive_rate]
              }
            ]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
            labels="months"
          />
        </CCardBody>
      </CCard>

   
     
      <CCard>
        <CCardHeader>
          Radar Chart
        </CCardHeader>
        <CCardBody>
          <CChartRadar
            datasets={[
              {
                label: '2019',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                tooltipLabelColor: 'rgba(179,181,198,1)',
                // data: [data[20].new_deaths_per_million,data[20].new_tests_per_thousand,data[20].positive_rate]
              },
              {
                label: '2020',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                tooltipLabelColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40]
              }
            ]}
            options={{
              aspectRatio: 1.5,
              tooltips: {
                enabled: true
              }
            }}
            labels={[
              'Eating', 'Drinking', 'Sleeping', 'Designing',
              'Coding', 'Cycling', 'Running'
            ]}
          />
        </CCardBody>
      </CCard>
    </CCardGroup>
  )
}

export default Charts
