package Login;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;


@Service
public class myServiceImpl implements myService {

	private myRepository myrepository;
	
	public myServiceImpl(myRepository myrepository) {
		super();
		this.myrepository = myrepository;
	}
	
	@Override
	public String save(myDTO mydto) {
		System.out.print("Save all---------------------------------------------");
		myEntity myentity = new myEntity(mydto.getName(),mydto.getPassword());
		int res = 0; 
		try {
		res =  myrepository.getByName(mydto.getName());
		}
		catch(Exception e) {
			System.out.print("Error ----------- "+res+" ----------");
			
		}
		System.out.print(" Result -------------" +res);
		if(res==0) {
			myrepository.save(myentity);
			return "Successfully Saved";
		}
		else
		{
			return " User Id already Exist's !!";
		}
	}

	

	@Override
	public List<myDTO> showAll() {
		System.out.print("Show all----------------");
		List<myDTO> list = new ArrayList<>();
		List<myEntity> myentity = this.myrepository.findAll();
		System.out.println("-------");
		for (myEntity emp : myentity) {
			System.out.println("-------"+emp.getId()+ emp.getName()+ emp.getPassword());
			list.add(new myDTO(emp.getId(), emp.getName(), emp.getPassword()));
		}
		return list;
		
	}

	@Override
	public String checkUserPass(myDTO mydto) {
		int res = 0; 
		try {
		res =  myrepository.checkUserPass(mydto.getName(),mydto.getPassword());
		}
		catch(Exception e) {
			System.out.print("Error ----------- "+res+" ----------");
			
		}
		System.out.print(" Result -------------" +res);
		if(res==0) {
			return " Login not successfull !! ";
		}
		else {
			return " Login successfull !!! ";
		}
		
	}


}
