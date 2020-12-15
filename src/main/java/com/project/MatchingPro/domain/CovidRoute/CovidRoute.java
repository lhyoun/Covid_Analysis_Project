package com.project.MatchingPro.domain.CovidRoute;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class CovidRoute {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String city;			// 부산광역시
	private String district;     	// 부산진구
	private String location_type;	// 식당
	private String location_name;	// 장우동
	private String address;			// 부전동 12번길
	private String exposed_time;	// 12월 12일 15시 방문
	private String sanitized;		// 소독여부
}

// 확진자 이동경로 페이지 내용