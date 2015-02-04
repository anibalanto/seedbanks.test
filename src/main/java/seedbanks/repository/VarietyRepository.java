package seedbanks.repository;
import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import seedbanks.domain.Variety;

@RepositoryRestResource(collectionResourceRel = "variety", path = "variety")
public interface VarietyRepository extends PagingAndSortingRepository<Variety, String> {

	List<Variety> findByName(@Param("name") String name);
	
	List<Variety> findByNameContainingIgnoringCase(@Param("name") String name);

}