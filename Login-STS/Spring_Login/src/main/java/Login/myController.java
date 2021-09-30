package Login;

import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;





@CrossOrigin
@RestController
@RequestMapping("")
public class myController {
	
	public myController(myService myservice) {
		super();
		this.myservice = myservice;
	}

	private myService myservice;
	
	@RequestMapping("/welcome")
	public RedirectView firstPage() {
		return new RedirectView("welcome.jsp");
	}
	
	@RequestMapping("/signup")
	public RedirectView SignUp(Model model) {
		model.addAttribute("log", new myEntity());
		return new RedirectView("SignUp.jsp");
	}
	
	@RequestMapping(value = "/new", method = RequestMethod.GET)
	public ModelAndView show(Model model) {
		model.addAttribute("log", new myEntity());
		new RedirectView("getEmployees.jsp");
		return new ModelAndView("SignUp", "log", new myDTO());
	}
	
	@RequestMapping("/get")
	public RedirectView get() {
		return new RedirectView("getEmployees.jsp");
	}
	
	@PostMapping("/a1")
	public void sa() {
		
	}
	
	@GetMapping("/show")
	public List<myDTO> showAll(){
		return myservice.showAll();
	}
	
	@PostMapping("/add")
	public String mySave(@RequestBody myDTO mydto){
		return myservice.save(mydto);
	}
	
	@PostMapping("/check")
	public String check(@RequestBody myDTO mydto){
		System.out.println(mydto.getName()+" -------^^^ "+mydto.getPassword());
		return myservice.checkUserPass(mydto);
	}	
	
	 @GetMapping("/greeting")
	  public RedirectView greetingForm(Model model) {
	    model.addAttribute("greeting", new myDTO());
	    return new RedirectView("login.jsp");
	  }

	  @PostMapping("/greeting")
	  public String greetingSubmit(@ModelAttribute myDTO greeting, Model model) {
	    model.addAttribute("greeting", greeting);
	    System.out.println("-------------- "+ model.toString()+"***********");
	    System.out.println("-------------- "+greeting.getName()+"  "+greeting.getPassword());
	    return "result";
	  }
	
	
	@GetMapping("/add")
	public RedirectView savepage() {
		return new RedirectView();
	}
}
