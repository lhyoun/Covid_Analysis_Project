package com.project.MatchingPro.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.MatchingPro.domain.CovidRoute.CovidRoute;
import com.project.MatchingPro.domain.CovidRoute.CovidRouteRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CovidRouteController {

	private final CovidRouteRepository CovidRouteRepository;
	
	// 이동경로 내용 전체 return
	@GetMapping("/CovidRoute")
	public List<CovidRoute> allData() {
		return CovidRouteRepository.findAll();
	}
	
	// return에서 받은 location_type, sanitized으로 최근 유형별 발생 건수 확인가능
	@GetMapping("/CovidRoute/type")
	public List<CovidRoute> allData_type() {
		return CovidRouteRepository.CovidRoute_All_type();
	}
	
	// return에서 받은 district, sanitized으로 최근 유형별 발생 건수 확인가능
	@GetMapping("/CovidRoute/region")
	public List<CovidRoute> allData_region() {
		return CovidRouteRepository.CovidRoute_All_region();
	}
	
}

// 확진자 이동경로 페이지 controller