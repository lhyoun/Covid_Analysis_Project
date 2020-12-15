package com.project.MatchingPro.domain.OECDfiltered;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.project.MatchingPro.domain.CovidRoute.CovidRoute;
import com.project.MatchingPro.domain.user.User;



public interface OECDfilteredRepository extends JpaRepository<OECDfiltered, Integer> {

//	@Query(value = "SELECT positive_rate FROM oecdfiltereddtata where country=\"South Korea\";", nativeQuery = true)
//	List<CovidRoute> CovidRoute_All_type();
	
	List<OECDfiltered> findByCountry(String country);
}
