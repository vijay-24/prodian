package DTO_Package;

import java.util.List;
import java.util.stream.Collectors;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/posts")
public class PostController {

	
	
	@Autowired
	private ModelMapper modelMapper;

	private PostService postService;

	public PostController(PostService postService) {
		super();
		this.postService = postService;
	}

	@GetMapping
	public List<PostDto> getAllPosts() {

		return postService.getAllPosts().stream().map(post -> modelMapper.map(post, PostDto.class))
				.collect(Collectors.toList());
	}

	@GetMapping("/{id}")
	public ResponseEntity<PostDto> getPostById(@PathVariable(name = "id") Long id) {
		Post post = postService.getPostById(id);

		// convert entity to DTO
		PostDto postResponse = modelMapper.map(post, PostDto.class);

		return ResponseEntity.ok().body(postResponse);
	}

	@PostMapping
	public ResponseEntity<PostDto> createPost(@RequestBody PostDto postDto) {

		// convert DTO to entity
		Post postRequest = modelMapper.map(postDto, Post.class);

		Post post = postService.createPost(postRequest);

		// convert entity to DTO
		PostDto postResponse = modelMapper.map(post, PostDto.class);

		return new ResponseEntity<PostDto>(postResponse, HttpStatus.CREATED);
	}
	
//	----- This is showAll method -----http://localhost:8080/api/posts/show     get method -----
	@GetMapping("/show")
	public List<PostDto> showAll(){
		return postService.showAll();
	}
	
	
//	--- This is save method created by me -- http://localhost:8080/api/posts/add     post method -----
	@PostMapping("/add")
	public PostResponse mySave(@RequestBody PostDto postdto){
		return postService.mySave(postdto);
	}
	
//	---- This is showById method ---- http://localhost:8080/api/posts/get/{id}     Get method -----
	@GetMapping("/get/{id}")
	PostDto showById(@PathVariable(name = "id") Long id) {
		return postService.showById(id);
	}
	
//	----- This is myUpdate method -----http://localhost:8080/api/posts/add/{id}     post method -----
	@PutMapping("/add/{id}")
	public PostResponse myUpdate(@PathVariable(name = "id") Long id,@RequestBody PostDto postDto) {
		return postService.myUpdate(id, postDto);
	}
	
//	===== This is myDelete method  ---- http://localhost:8080/api/posts/del/{id}     post method -----
	@PostMapping("/del/{id}")
	void myDelete(@PathVariable(name = "id") Long id) {
		postService.myDelete(id);
	}

	// change the request for DTO
	// change the response for DTO
	@PutMapping("/{id}")
	public ResponseEntity<PostDto> updatePost(@PathVariable long id, @RequestBody PostDto postDto) {

		// convert DTO to Entity
		Post postRequest = modelMapper.map(postDto, Post.class);

		Post post = postService.updatePost(id, postRequest);

		// entity to DTO
		PostDto postResponse = modelMapper.map(post, PostDto.class);

		return ResponseEntity.ok().body(postResponse);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<PostDto> deletePost(@PathVariable(name = "id") Long id) {
		postService.deletePost(id);
		PostDto apiResponse = new PostDto();
		return new ResponseEntity<PostDto>(apiResponse, HttpStatus.OK);
	}
}