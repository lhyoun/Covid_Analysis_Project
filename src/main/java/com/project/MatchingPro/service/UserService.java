package com.project.MatchingPro.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.MatchingPro.domain.user.User;
import com.project.MatchingPro.domain.user.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {

	private final UserRepository userRepository;

	// 회원가입
	// 어떤 타입인지 몰라서 <?>
	public ResponseEntity<?> join(User user) {
		user.setRole("USER");
		try {
			userRepository.save(user);
			return new ResponseEntity<String>("ok", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("회원가입에 실패하였습니다", HttpStatus.EXPECTATION_FAILED);
		}

	}

	// 아이디 체크
	public ResponseEntity<?> idCheck(String loginid) {
		int n = userRepository.countByUsername(loginid);
		if (n == 0) {
			return new ResponseEntity<String>("ok", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("사용불가아이디", HttpStatus.OK);
		}
	}


	// 유저상세보기
	public ResponseEntity<?> detail(int id) {
		User user = userRepository.findById(id).get();

		return new ResponseEntity<User>(user, HttpStatus.OK);
	}


}
