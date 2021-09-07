package MvcPackage;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MVC_Controller {
	
	@GetMapping("/home")
	public String home(Model model) {
		model.addAttribute("title","MVC Application");
		return "home";
	}
}
