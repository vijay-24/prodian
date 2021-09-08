package DTO_Package;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class PostServiceImpl implements PostService{

	private final PostResository postRepository;
	
	public PostServiceImpl(PostResository postRepository) {
		super();
		this.postRepository = postRepository;
	}

	@Override
	public List<Post> getAllPosts() {
		return postRepository.findAll();
	}

	@Override
	public Post createPost(Post post) {
		return postRepository.save(post);
	}

	@Override
	public Post updatePost(long id, Post postRequest) {
		Post post = postRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Post", "id", id));
		
		post.setTitle(postRequest.getTitle());
		post.setDescription(postRequest.getDescription());
		post.setContent(postRequest.getContent());
		return postRepository.save(post);
	}

	@Override
	public void deletePost(long id) {
		Post post = postRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Post", "id", id));
		
		postRepository.delete(post);
	}

	@Override
	public Post getPostById(long id) {
		Optional<Post> result = postRepository.findById(id);
		if(result.isPresent()) {
			return result.get();
		}else {
			throw new ResourceNotFoundException("Post", "id", id);
		}
		
//		Post post = postRepository.findById(id)
//				.orElseThrow(() -> new ResourceNotFoundException("Post", "id", id));
		//return post;
	}

	@Override
	public PostResponse mySave(PostDto postdto) {
		// TODO Auto-generated method stub
		Post post=new Post();
		 PostResponse postResponse=new PostResponse();
		 post.setContent(postdto.getContent());
		 post.setDescription(postdto.getDescription());
		 post.setTitle(postdto.getTitle());
		 System.out.print("show Dto "+postdto.getContent()+postdto.getDescription()+postdto.getTitle());
		 post=this.postRepository.save(post);
		if(post!=null)
		{
			postResponse.setId(postdto.getId());
			postResponse.setContent(postdto.getContent());
			postResponse.setDescription(postdto.getDescription());
			postResponse.setTitle(postdto.getTitle());
			postResponse.setStatus("success");
		}
		else
		{
			postResponse.setStatus("Failed");
		}
			return postResponse;
			
		}

	@Override
	public List<PostDto> showAll() {
		System.out.print("Show all");
		List<PostDto> list=new ArrayList<>();
		List<Post> post=this.postRepository.findAll();
		for(Post emp:post) {
			list.add(new PostDto(emp.getId(),emp.getContent(), emp.getDescription(), emp.getTitle()));
		}
		return list;
		
	}

	@Override
	public PostDto showById(Long id) {
		Optional<Post> optional = postRepository.findById(id);
		Post post = optional.get();
		if(optional.isPresent()) {
			return (new PostDto(post.getId(),post.getContent(), post.getDescription(), post.getTitle()));
		}
		else {
			throw new ResourceNotFoundException("Post", "id", id);
		}
		
	}

	@Override
	public PostResponse myUpdate(Long id, PostDto postDto) {
//		Post post = new Post(); 
		Post post = postRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("post", "id", id)); 
		
		post.setId(id);
		post.setContent(postDto.getContent());
		post.setDescription(postDto.getDescription());
		post.setTitle(postDto.getTitle());
		// save existing employee to DB
		System.out.print("Dto "+postDto.getContent()+postDto.getDescription()+postDto.getTitle());
		System.out.print("good "+post.getContent()+post.getDescription()+post.getTitle());
		post = postRepository.save(post);
		PostResponse PostResponse = new PostResponse();
		if(post!=null)
		{
			PostResponse.setId(postDto.getId());
			PostResponse.setContent(postDto.getContent());
			PostResponse.setDescription(postDto.getDescription());
			PostResponse.setTitle(postDto.getTitle());
			
		}
		else
		{
			PostResponse.setId(postDto.getId());
			PostResponse.setContent(postDto.getContent());
			PostResponse.setDescription(postDto.getDescription());
			PostResponse.setTitle(postDto.getTitle());
		}
		return PostResponse;
		
	}

	@Override
	public PostResponse myDelete(long id) {
		Post post = postRepository.findById(id).orElseThrow(() -> 
		new ResourceNotFoundException("post", "id", id));
		postRepository.deleteById(id);
		
		PostResponse postresponse = new PostResponse();
		if(post!=null)
		{
			postresponse.setId(post.getId());
			postresponse.setContent(post.getContent());
			postresponse.setDescription(post.getDescription());
			postresponse.setTitle(post.getTitle());
			postresponse.setStatus("success");
		}
		else
		{
			postresponse.setStatus("Failed");
		}
		return postresponse;
		
	}
}