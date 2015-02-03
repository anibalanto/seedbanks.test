package seedbanks.repository;


import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import seedbanks.domain.Farmer;


@RepositoryRestResource(collectionResourceRel = "farmer", path = "farmer")
public interface FarmerRepository  extends PagingAndSortingRepository<Farmer, String> {

}
