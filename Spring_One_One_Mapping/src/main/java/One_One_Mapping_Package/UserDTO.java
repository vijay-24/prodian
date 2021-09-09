package One_One_Mapping_Package;

import lombok.Data;

@Data
public class UserDTO {
	
	private long id;
	private String Name;
	private String Email;
	private String phone;
	private String Address;
	private String Gender;
	
	
	public UserDTO() {
		
	}
	
	public UserDTO(String name, String email, String phone, String address, String gender) {
		super();
		this.Name = name;
		this.Email = email;
		this.phone = phone;
		this.Address = address;
		this.Gender = gender;
	}
	
	public UserDTO(String name, String email) {
		super();
		this.Name = name;
		this.Email = email;
	}
	
	public UserDTO(String phone, String address, String gender) {
		super();
		this.phone = phone;
		this.Address = address;
		this.Gender = gender;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public String getGender() {
		return Gender;
	}
	public void setGender(String gender) {
		Gender = gender;
	}
	

}
