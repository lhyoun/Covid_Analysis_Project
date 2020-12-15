import React , { lazy, useEffect, useState }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from '../routes'

import { 
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from './index'

const tokenCheck = () => {
  console.log("App.js:: display Authorization - 로그인 여부 확인을 위한 token check", localStorage.getItem("Authorization"));
  if (localStorage.getItem("Authorization") != null) return true;
  else return false;
}

const TheHeader = () => {

    // 토큰이 있다(1) or 없다(0) => 있다 = 로그인 o, 없다 = 로그인 x 
    const [isToken, setIsToken] = useState(tokenCheck());
    // 로그인 하면 실행할거야. 0->1로 바꿔주는 함수. 
    const setToken = () => {
      if (isToken) setIsToken(0);  // 1이면 0으로 바꾸고
      else setIsToken(1);         // 0이면 1로 바꾸고
    }
  
    useEffect(() => {
      
    }, []);


  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const logoutfunction = () => {
    localStorage.removeItem("Authorization");

    // logout fetch 
    fetch(`http://localhost:8000/logout`, {
      method: "GET",
      headers: {
      }
    }).then(res => res.text())
      .then(res => {
        if (res === "ok") {
          setToken();
          alert("로그아웃에 성공하였습니다");
        } else {
          alert("로그아웃 실패");
        }
      });
  }


  const loginTag = (flag) =>{
    if(flag){
      return <>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink onClick={logoutfunction}>로그아웃</CHeaderNavLink>
        </CHeaderNavItem>
        <TheHeaderDropdownNotif/>
        <TheHeaderDropdownTasks/>
        <TheHeaderDropdownMssg/>
      </>
    }else{
      return<>
      <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/login">로그인</CHeaderNavLink>
        </CHeaderNavItem>

        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/register">회원가입</CHeaderNavLink>
        </CHeaderNavItem>
      </>
    }
  }
  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        {/* <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/dashboard">MainPage</CHeaderNavLink>
        </CHeaderNavItem> */}
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/dashboard">CORONA MASTER</CHeaderNavLink>
        </CHeaderNavItem>
        {/* <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Settings</CHeaderNavLink>
        </CHeaderNavItem> */}
      </CHeaderNav>

      {/* 우측 상단 알림 */}
      <CHeaderNav className="px-3">
        
        {loginTag(isToken)}

        {/* <TheHeaderDropdown/> */}
      </CHeaderNav>
      

      <CSubheader className="px-3 justify-content-between">
        {/* <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        /> */}
          <div className="d-md-down-none mfe-2 c-subheader-nav">
            {/* <CLink className="c-subheader-nav-link"href="#">
              <CIcon name="cil-speech" alt="Settings" />
            </CLink> */}

            <CLink 
              className="c-subheader-nav-link" 
              aria-current="page" 
              to="/dashboard"
            >
              <CIcon name="cil-speedometer" alt="Dashboard" />&nbsp;MainPage
            </CLink>

            <CLink 
              className="c-subheader-nav-link" 
              aria-current="page" 
              to="/dashboard"
            >
              <CIcon name="cil-puzzle" alt="Dashboard" />&nbsp;Korea-Covid
            </CLink>

            <CLink 
              className="c-subheader-nav-link" 
              aria-current="page" 
              to="/dashboard"
            >
              <CIcon name="cil-globe-alt" alt="Dashboard" />&nbsp;Global-Covid
            </CLink>

            {/* <CLink className="c-subheader-nav-link" href="#">
              <CIcon name="cil-settings" alt="Settings" />&nbsp;Settings
            </CLink> */}
          </div>
      </CSubheader>
      
    </CHeader>
  )
}

export default TheHeader
