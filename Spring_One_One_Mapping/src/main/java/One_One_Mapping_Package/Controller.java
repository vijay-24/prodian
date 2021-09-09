package One_One_Mapping_Package;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/app")
public class Controller {
	
	private Service service;

	public Controller(Service service) {
		super();
		this.service = service;
	}
	
	@GetMapping("/show")
	public List<UserDTO> showAll(){
		return service.showAll();
	}

}
