package seedbanks.repository;


import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import seedbanks.domain.Interchange;


@RepositoryRestResource(collectionResourceRel = "interchange", path = "interchange")
public interface InterchangeRepository  extends PagingAndSortingRepository<Interchange, String> {

}
