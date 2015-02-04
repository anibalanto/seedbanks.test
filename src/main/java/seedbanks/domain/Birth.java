package seedbanks.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

//@Entity
public class Birth {
	
	//@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	//@Column
	private Date date;
	
	/*@OneToOne
	private Harvest harvest;
	
	@ManyToOne
	private Farmer farmer;
	*/
	//@Column
	private String harvestCodeValidator;
/*
	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Harvest getHarvest() {
		return harvest;
	}

	public void setHarvest(Harvest harvest) {
		this.harvest = harvest;
	}

	public Farmer getFarmer() {
		return farmer;
	}

	public void setFarmer(Farmer farmer) {
		this.farmer = farmer;
	}
	public String getHarvestCodeValidator() {
		return harvestCodeValidator;
	}
/*	public void setHarvestCodeValidator(String harvestCodeValidator) {
		this.harvestCodeValidator = harvestCodeValidator;
	}*/

}
