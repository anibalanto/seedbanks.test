package seedbanks.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Harvest {
	
	@Id
	private String uHarvestID;
	
	@Column
	private Date date;
	
	@Column
	private String harvestCodeValidator;

	@Column
	private boolean shared;
	
	@ManyToOne
	private Variety variety;
	
	@ManyToOne
	private Harvest mother;
	
	@ManyToOne
	private Farmer farmer;

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

	public String getHarvestCodeValidator() {
		return harvestCodeValidator;
	}

	public void setHarvestCodeValidator(String harvestCodeValidator) {
		this.harvestCodeValidator = harvestCodeValidator;
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
	
	/*@Column
	private String mother;


	public String getuHarvestIDMother() {
		return uHarvestIDMother;
	}

	public void setuHarvestIDMother(String uHarvestIDMother) {
		this.uHarvestIDMother = uHarvestIDMother;
	}*/
	
	public String getuHarvestID() {
		return uHarvestID;
	}

	public void setuHarvestID(String uHarvestID) {
		this.uHarvestID = uHarvestID;
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
	
	//@ManyToOne
	//private Farmer farmer;
	
	//@OneToMany
	//private Set<Exchange> exchanges;

	//private DataHarvestCreator dataHarvestCreator;
	
	/*public DataHarvestCreator getDataHarvestCreator() {
		return dataHarvestCreator;
	}*/

	/*public void setDataHarvestCreator(DataHarvestCreator dataHarvestCreator) {
		this.dataHarvestCreator = dataHarvestCreator;
		HarvestCode harvestCode = new HarvestCode(dataHarvestCreator.getuFarmerID(), dataHarvestCreator.getuVarietyID(), dataHarvestCreator.getHistory());
		this.setuHarvestID(harvestCode.getUHarvestID());
		//this.birth = new Birth();
		//this.birth.setDate(dataHarvestCreator.getDate());
		//this.birth.setdataHarvestCreator.getuFarmerID(), harvestCode.getHarvestCodeValidator()
		//history.add(new Birth(date, uFarmerID, harvestCode.getHarvestCodeValidator()));
	}*/

	/*public Harvest(String uFarmerID, String uVarietyID, ArrayList<Birth> history, Date date){
		HarvestCode harvestCode = new HarvestCode(uFarmerID, uVarietyID, history);
		this.uHarvestID = harvestCode.getUHarvestID();
		history.add(new Birth(date, uFarmerID, harvestCode.getHarvestCodeValidator()));
	}*/
	
}