package com.project.MatchingPro.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.MatchingPro.domain.Korea.Korea;
import com.project.MatchingPro.domain.Korea.KoreaRepository;
import com.project.MatchingPro.domain.TotalData.TotalData;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class KoreaController {

	private final KoreaRepository koreaRepository;
	
	@GetMapping("/korea")
	public List<Korea> allData() {
		return koreaRepository.findAll();
	}
}
