import React from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbRouter,
  CCard,
  CCardBody,
  CCardHeader,
  CLink,
  CCol,
  CRow,
  CForm,
  CInput,
  CButton,
  CNavbar
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import routes from '../../../routes'
import Search_MSG from 'src/components/card/Search_MSG'
import Search_return from 'src/components/card/Search_return'

const Breadcrumbs = () => {

  const inputHandle = (e) => setSearchData(e.target.value);
  
  const searchDatafunction = (data) => {	// 팀원 검색 함수 (검색 다음 초대)
    alert(data + " 검색되었습니다");
    /*
		fetch(`http://localhost:8000/nicknameDetail/${data}`, {
			method: "get",
		}).then((res) => {
			if (res.status === 200) {
				setSearchUserStatus("search complete");
				return res.json()
			}
			else {
				setSearchUserStatus("please check nickname");
				return searchUser;
			}
		})
			.then(res => {
				console.log("닉네임으로 검색 결과", res);
				setSearchUser(res);
      });*/
      setSearchData('');
	}

  const [searchData, setSearchData] = React.useState('');
  const [isSearchData, setIsSearchData] = React.useState(1);

  const returnSearchDataResult = () =>{
    if(isSearchData===1){
      return <Search_return></Search_return>;
    }else{
      return <Search_MSG></Search_MSG>;
    }
  }

  return (
    <>
      <CCard>
        <CCardHeader>
          확진자 발생까지 거리
        </CCardHeader>
        <CCardBody>
          <CNavbar light color="light">
            <CForm inline>
              <CInput
                className="mr-sm-2"
                placeholder="Enter region"
                size="sm"
                onChange={inputHandle}
								value={searchData}
              />
              <CButton onClick={()=>searchDatafunction(searchData)} color="outline-primary" className="my-2 my-sm-0" type="submit">Search</CButton>
            </CForm>
          </CNavbar>

          {returnSearchDataResult()}

        </CCardBody>
      </CCard>
    </>
  )
}

export default Breadcrumbs
