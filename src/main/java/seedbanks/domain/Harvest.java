package seedbanks.domain;

import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Harvest {
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private Date date;
	
	@Column
	private String codeValidator = null;

	@Column
	private boolean shared;
	
	@ManyToOne
	private Variety variety = null;
	
	@ManyToOne
	private Harvest mother = null;
	
	@ManyToOne
	private Farmer farmer = null;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "mother")
	private Set<Harvest> children;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "harvest")
	private Set<Interchange> inchanges;
	

	
	
	
	public Farmer getFarmer() {
		return farmer;
	}

	public void setFarmer(Farmer farmer) {
		this.farmer = farmer;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public void setCodeValidator(String codeValidator){
		this.codeValidator = codeValidator;
	}
	
	public String getCodeValidator() {
		/*if (codeValidator == null)
			this.generateCodeValidator();*/
		return this.generateCodeValidator();//codeValidator;
	}

	private String generateCodeValidator() {
		if (this.farmer != null && this.variety != null){
			HarvestCode harvestCode= new HarvestCode();
			return harvestCode.getHarvestCodeValidator(this.farmer.getuFarmerID(), this.variety.getuVarietyID(), this.getMother());
		
		}
		return null;
	}
	
	public Set<Interchange> getInchanges() {
		return inchanges;
	}

	public void setInchanges(Set<Interchange> inchanges) {
		this.inchanges = inchanges;
	}
	
	public Harvest getMother() {
		return mother;
	}

	public void setMother(Harvest mother) {
		this.mother = mother;
		
	}

	public Set<Harvest> getChildren() {
		return children;
	}

	public void setChildren(Set<Harvest> children) {
		this.children = children;
	}

	public Variety getVariety() {
		return variety;
	}

	public void setVariety(Variety variety) {
		this.variety = variety;
	}
	
	public boolean isShared() {
		return shared;
	}

	public void setShared(boolean shared) {
		this.shared = shared;
	}
	
}