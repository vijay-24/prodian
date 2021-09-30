package Login;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;



public interface myRepository extends JpaRepository<myEntity,Long >{

	
	@Query(value = "Select * from logindb where name = ?", nativeQuery = true)
	public int getByName(String name);
	
	@Query(value = "Select * from logindb where name = ?1 and password = ?2", nativeQuery = true)
	public int checkUserPass(String name,String password);
	
}
