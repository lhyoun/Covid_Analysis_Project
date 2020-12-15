import React, { useState } from 'react';

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Register = (props) => {

	let emptyFlag = true;				// 빈 칸 확인 플레그 true : 가입가능
  
  const [user, setUser] = useState({
		username: "",
		password: "",
		name: "",
		email: "",
		role:""
	});

	const inputHandle = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const joinRequest = (e) => {
		e.preventDefault();
		let person = {
			username: user.username,
			password: user.password,
			name: user.name,
			email: user.email,
		}

		// 아래의 로직은 빈 값 확인용 로직입니다
		const keys = Object.keys(person)
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i] // 각각의 키
			const value = person[key] // 각각의 키에 해당하는 각각의 값

			if (value === "") {
				console.log("joinModal -- 다음의 empty key가 존재합니다: ", key);
				//console.log("joinForm:: empty value: ", value);
				emptyFlag = false;	// 빈 값 들어오면 가입 불가능
			} else {
				emptyFlag = true;
			}
		}

		// 빈 값이 없으면 fetch를 진행합니다
		if (emptyFlag) {
			fetch("http://localhost:8000/join", {
				method: "POST",
				body: JSON.stringify(person),
				headers: {
					'Content-Type': "application/json; charset=utf-8"
				}
			}).then(res => {
				if (res.text = "ok") return "회원가입에 성공하였습니다.";
				else return "회원가입 실패하였습니다.";
			}).then(res => {
				alert(res);   // 로그인의 결과
				props.history.push("/");
			});
		} else {
			if (!emptyFlag) alert("모든 정보 입력해주세요");
    }
  }
  
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
					<CInput 
						type="text"
						name="name"
						placeholder="이름"
						onChange={inputHandle}
						value={user.name}/>
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
					<CInput 	
						name="email"
						placeholder="이메일"
						onChange={inputHandle}
						value={user.email}/>
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
					<CInput 
						type="text"
						name="username"
						placeholder="아이디"
						onChange={inputHandle}
						value={user.username} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
					<CInput 
						type="password"
						name="password"
						placeholder="비밀번호"
						onChange={inputHandle}
						value={user.password} />
                  </CInputGroup>
               
                  <CButton color="success" block onClick={joinRequest}>Create Account</CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
