package seedbanks.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Interchange {
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	private Farmer farmerReceptor;
	
	@ManyToOne
	private Harvest harvest;
	
	@Column
	private int score;

	public void setId(Long id) {
		this.id = id;
	}

	public Long getId() {
		return id;
	}

	public Farmer getFarmerReceptor() {
		return farmerReceptor;
	}

	public void setFarmerReceptor(Farmer farmerReceptor) {
		this.farmerReceptor = farmerReceptor;
	}

	public Harvest getHarvest() {
		return harvest;
	}

	public void setHarvest(Harvest harvest) {
		this.harvest = harvest;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}




}
