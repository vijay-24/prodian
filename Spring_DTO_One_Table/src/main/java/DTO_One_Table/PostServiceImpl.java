package DTO_One_Table;

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
	public PostResponse mySave(PostDto postdto) {
		// TODO Auto-generated method stub
		Post post=new Post();
		 PostResponse postResponse=new PostResponse();
		 post.setFirstName(postdto.getFirstName());
		 post.setLastName(postdto.getLastName());
		 post.setDob(postdto.getDob());
		 post.setEmail(postdto.getEmail());
		 post.setMobile(postdto.getMobile());
		 System.out.print("show Dto "+postdto.getFirstName()+postdto.getLastName()+postdto.getDob()+postdto.getEmail()+postdto.getMobile());
		 post=this.postRepository.save(post);
		if(post!=null)
		{
			postResponse.setId(post.getId());
			postResponse.setFirstName(post.getFirstName());
			postResponse.setLastName(post.getLastName());
			postResponse.setDob(post.getDob());
			postResponse.setEmail(post.getEmail());
			postResponse.setMobile(post.getMobile());
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
			list.add(new PostDto(emp.getId(),emp.getFirstName(),emp.getLastName(),emp.getDob(),emp.getEmail(),emp.getMobile()));
		}
		return list;
		
	}

	@Override
	public PostDto showById(Long id) {
		Optional<Post> optional = postRepository.findById(id);
		Post post = optional.get();
		if(optional.isPresent()) {
			return (new PostDto(post.getFirstName(),post.getLastName(),post.getDob(),post.getEmail(),post.getMobile()));
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
		post.setFirstName(postDto.getFirstName());
		 post.setLastName(postDto.getLastName());
		 post.setDob(postDto.getDob());
		 post.setEmail(postDto.getEmail());
		 post.setMobile(postDto.getMobile());
		// save existing employee to DB
		 System.out.print("show Dto "+postDto.getFirstName()+postDto.getLastName()+postDto.getDob()+postDto.getEmail()+postDto.getMobile());
		 post = postRepository.save(post);
		PostResponse PostResponse = new PostResponse();
		if(post!=null)
		{
			PostResponse.setId(postDto.getId());
			PostResponse.setFirstName(postDto.getFirstName());
			PostResponse.setLastName(postDto.getLastName());
			PostResponse.setDob(postDto.getDob());
			PostResponse.setEmail(postDto.getEmail());
			PostResponse.setMobile(postDto.getMobile());
			
		}
		else
		{
			PostResponse.setStatus("Failed");
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
			postresponse.setFirstName(post.getFirstName());
			postresponse.setLastName(post.getLastName());
			postresponse.setDob(post.getDob());
			postresponse.setEmail(post.getEmail());
			postresponse.setMobile(post.getMobile());
			postresponse.setStatus("success");
		}
		else
		{
			postresponse.setStatus("Failed");
		}
		return postresponse;
		
	}
}