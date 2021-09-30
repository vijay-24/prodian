package Login;

import java.io.Serializable;

import javax.persistence.Column;

public class myDTO implements Serializable{


	private Long id;
	private String name;
	private String password;

	public myDTO() {
		
	}
	
	public myDTO(String name, String password) {
		
		this.name = name;
		this.password = password;
	}

	public myDTO(Long id,String name, String password) {
		this.id = id;
		this.name = name;
		this.password = password;
	}
	
	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


}
