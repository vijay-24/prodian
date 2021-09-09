package DTO_One_Table;

import java.util.List;


public interface PostService {

//	---- My Creation ---
	PostResponse mySave(PostDto postdto);
	List<PostDto> showAll();
	PostDto showById(Long id);
	PostResponse myUpdate(Long id,PostDto postDto);
	PostResponse myDelete(long id);
	
}