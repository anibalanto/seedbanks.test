package seedbanks.repository;


import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import seedbanks.domain.Farmer;
import seedbanks.domain.Harvest;
import seedbanks.domain.Interchange;


@RepositoryRestResource(collectionResourceRel = "interchange", path = "interchange")
public interface InterchangeRepository  extends PagingAndSortingRepository<Interchange, Long> {
	
	List<Interchange> findByHarvest(@Param("harvest") Harvest harvest);

}
