package Login;

import java.util.List;



public interface myService {

	String save(myDTO mydto);
	List<myDTO> showAll();
	
	
	String checkUserPass(myDTO mydto);
}
