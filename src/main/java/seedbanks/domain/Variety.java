package seedbanks.domain;

import java.util.Set;

import javax.persistence.*;

@Entity
public class Variety {
    @Id  
    private String uVarietyID;
    
    @Column
    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "variety")
    private Set<Harvest> harvests;

    public Set<Harvest> getHarvests() {
		return harvests;
	}

	public void setHarvests(Set<Harvest> harvests) {
		this.harvests = harvests;
	}

	public String getuVarietyID() {
		return uVarietyID;
	}

	public void setuVarietyID(String uVarietyID) {
		this.uVarietyID = uVarietyID;
	}

	public String getName() {
        return this.name;
    }

	public void setName(String name) {
		this.name = name;
	}
    
    
}
