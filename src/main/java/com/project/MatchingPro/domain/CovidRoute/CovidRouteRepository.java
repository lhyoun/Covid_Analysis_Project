package com.project.MatchingPro.domain.CovidRoute;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CovidRouteRepository extends JpaRepository<CovidRoute, Integer> {

	@Query(value = "select id, address, city, district, exposed_time, location_name, location_type, count(*) as sanitized from covidroute group by location_type order by sanitized desc;", nativeQuery = true)
	List<CovidRoute> CovidRoute_All_type();
	
	@Query(value = "select id, address, city, district, exposed_time, location_name, location_type, count(*) as sanitized from covidroute group by district order by sanitized desc;", nativeQuery = true)
	List<CovidRoute> CovidRoute_All_region();
}
