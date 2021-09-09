package Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import One_One_Mapping_Package.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
