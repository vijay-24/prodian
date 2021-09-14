package DTO_One_Table;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;



public interface PostResository extends JpaRepository<Post,Long > {

	
	@Query(value = "Select * from emp_ang_api", nativeQuery = true)
	public List<Post> getAll();
	
	@Transactional
	@Modifying
	@Query(value = "update emp_ang_api set first_name = ?1 where id = ?2",nativeQuery = true)
	int updateUserNameByID(String name, Long id);
	
	@Query(value = "Select first_name from emp_ang_api", nativeQuery = true)
	public List<String> getNameAll();
	


}
