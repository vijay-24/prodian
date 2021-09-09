package DTO_One_Table;

import java.util.List;
import java.util.stream.Collectors;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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

	private PostService postService;

	public PostController(PostService postService) {
		super();
		this.postService = postService;
	}

	
//	----- This is showAll method -----http://localhost:8080/api/posts/show     get method -----
	@CrossOrigin(origins = "http://localhost:4200")
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



}