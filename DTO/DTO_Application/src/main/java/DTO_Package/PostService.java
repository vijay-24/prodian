package DTO_Package;

import java.util.List;


public interface PostService {
	List<Post> getAllPosts();

	Post createPost(Post post);

	Post updatePost(long id, Post post);

	void deletePost(long id);

	Post getPostById(long id);
	
//	---- My Creation ---
	PostResponse mySave(PostDto postdto);
	List<PostDto> showAll();
	PostDto showById(Long id);
	PostResponse myUpdate(Long id,PostDto postDto);
	PostResponse myDelete(long id);
	
}