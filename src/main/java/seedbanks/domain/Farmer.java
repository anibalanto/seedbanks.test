package seedbanks.domain;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Farmer {
	@Id
	private String uFarmerID;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "farmer")
	private Set<Harvest> harvests;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "farmerReceptor")
	private Set<Interchange> inchangesReceived;

	public String getuFarmerID() {
		return uFarmerID;
	}

	public void setuFarmerID(String uFarmerID) {
		this.uFarmerID = uFarmerID;
	}

	public Set<Harvest> getHarvests() {
		return harvests;
	}

	public void setHarvests(Set<Harvest> harvests) {
		this.harvests = harvests;
	}

	public Set<Interchange> getInchangesReceived() {
		return inchangesReceived;
	}

	public void setInchangesReceived(Set<Interchange> inchangesReceived) {
		this.inchangesReceived = inchangesReceived;
	}
	
	

}
