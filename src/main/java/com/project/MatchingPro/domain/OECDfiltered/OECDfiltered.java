package com.project.MatchingPro.domain.OECDfiltered;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



import lombok.Data;

@Data
@Entity
public class OECDfiltered {
	
	@Id // 기본키 설정
	@GeneratedValue(strategy = GenerationType.IDENTITY) // 해당 데이터베이스 번호증가 전략을 따라가기
	private int id;
	
	private String country;
	private double positive_rate;
	private double new_tests_per_thousand;
	private double new_deaths_per_million;


}
