package Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import One_One_Mapping_Package.User;
import One_One_Mapping_Package.UserProfile;

@Repository
public interface UserProfile_Repository extends JpaRepository<UserProfile, Long>{

}
