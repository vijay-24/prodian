package one_one_3;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "t_address")
public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "city")
	private String city;
	
	@Column(name="state")
	private String state;
	

	public Long getId() {

		return this.id;

	}

	public void setId(Long id) {
		
		this.id = id;

	}

	

	
	public String getCity() {

		return this.city;

	}

	public void setCity(String city) {

		this.city = city;

	}

	public String getState() {

		return this.state;

	}

	public void setState(String state) {

		this.state = state;

	}

	
}