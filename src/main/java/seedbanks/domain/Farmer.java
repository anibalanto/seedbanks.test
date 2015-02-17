package seedbanks.domain;

import java.util.Set;

import javax.persistence.Column;
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
	
	@Column
	private String firstName;
	
	@Column
	private String surname;
	
	@Column
	private float reliability;
	
	public float getReliability() {
		return reliability;
	}

	public void setReliability(float reliability) {
		this.reliability = reliability;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

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
