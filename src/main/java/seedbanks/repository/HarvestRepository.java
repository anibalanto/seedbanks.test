package seedbanks.repository;
import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import seedbanks.domain.Harvest;
import seedbanks.domain.Variety;

@RepositoryRestResource(collectionResourceRel = "harvest", path = "harvest")
public interface HarvestRepository extends PagingAndSortingRepository<Harvest, String> {

	//List<Harvest> findByuFarmerID(@Param("uFarmerID") String uFarmerID);
	
	
	
	List<Harvest> findBySharedAndVariety(@Param("shared") boolean shared, @Param("variety") Variety variety);

}