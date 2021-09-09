package One_One_Mapping_Package;

import java.util.ArrayList;
import java.util.List;

import Repositories.UserProfile_Repository;
import Repositories.UserRepository;

public class ServiceImplematation implements Service{

	private UserRepository userrepository;
	private UserProfile_Repository userprofilerepository;
	
	
	public ServiceImplematation(UserRepository userrepository, UserProfile_Repository userprofilerepository) {
		super();
		this.userrepository = userrepository;
		this.userprofilerepository = userprofilerepository;
	}


	@Override
	public List<UserDTO> showAll() {
		List<UserDTO> UDTO_List = new ArrayList<>();
		List<User> user =  this.userrepository.findAll();
		List<UserProfile> userprofile =  new ArrayList<>();
		for(User u:user) {
			UDTO_List.add(new UserDTO(u.getName(),u.getEmail()));
		}
		
		return UDTO_List;
	}

}
