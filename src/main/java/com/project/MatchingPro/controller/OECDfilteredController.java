package com.project.MatchingPro.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.project.MatchingPro.domain.OECDfiltered.OECDfiltered;
import com.project.MatchingPro.domain.OECDfiltered.OECDfilteredRepository;


import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class OECDfilteredController {

	private final OECDfilteredRepository oECDfilteredRepository;
	
	
	//전체데이
	@GetMapping("/oecdfiltered")
	public List<OECDfiltered> allData() {
		System.out.println("-------		전체 데이터 --");
		return oECDfilteredRepository.findAll();
		
	}
	@GetMapping("/oecdbycountry/{country}")
	public List<OECDfiltered> findByCountry(@PathVariable String country) {
		
		System.out.println("-----");
		
		
		return oECDfilteredRepository.findByCountry(country);
		
		
	}
}
