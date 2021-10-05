package server_email_ver;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("userRepository")
public interface UserRepository extends CrudRepository<UserEntity, String> {

	
    UserEntity findByEmailIdIgnoreCase(String emailId);
}
