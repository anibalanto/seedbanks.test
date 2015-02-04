package seedbanks.repository;
import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import seedbanks.domain.Farmer;
import seedbanks.domain.Harvest;
import seedbanks.domain.Variety;

@RepositoryRestResource(collectionResourceRel = "harvest", path = "harvest")
public interface HarvestRepository extends PagingAndSortingRepository<Harvest, Long> {

	List<Harvest> findByFarmer(@Param("farmer") Farmer farmer);
	
	List<Harvest> findBySharedAndVariety(@Param("shared") boolean shared, @Param("variety") Variety variety);
	
	List<Harvest> findBySharedAndVarietyNameContainingIgnoringCase(@Param("shared") boolean shared, @Param("variety") String variety);
	
	

}