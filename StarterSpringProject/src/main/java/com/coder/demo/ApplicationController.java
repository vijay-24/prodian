package com.coder.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class ApplicationController {
	
//	@GetMapping("/")
//	public String index() {
//		return "Greetings from Spring Boot, This is the Controller Message !!";
//	}

//	@RequestMapping(value = "/", method = RequestMethod.GET)
//	public RedirectView Mainpage(Model model)  
//	{  
//		model.addAttribute("greeting", new Greeting());
//		return new RedirectView("Login.html");  
//	} 
	
//	@RequestMapping(value = "/", method = RequestMethod.GET)
//	@ResponseBody
//	public String Mainpage(Model model)  
//	{  
//		model.addAttribute("greeting", new Greeting());
//		return "Login";  
//	} 
	
//	@RequestMapping(value = "/", method = RequestMethod.GET)
	@RequestMapping("/")
	public String welcome() {
	    return "Login";
	}
	
	
	@RequestMapping(value = "/Loged", method = RequestMethod.GET)
	public RedirectView greetingSubmit(@ModelAttribute Greeting greeting, Model model) {
		model.addAttribute("greeting", greeting);
		return new RedirectView("Logedin.html"); 
	}


	@RequestMapping(value = "/viewpage", method = RequestMethod.GET)
	public RedirectView  redirect()  
	{  
		return new RedirectView("viewpage.jsp");  
	}    
	
	@RequestMapping("/helloagain")  
	public String display()  
	{  
	    return "final";  
	}  
}
