package com.coder.demo;

import javax.servlet.ServletRegistration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StarterSpringProjectApplication {

	public static void main(String[] args) {
		System.out.println("Boot Application Started");
//		 ServletRegistration.Dynamic registration = container.addServlet("dispatcher", new DispatcherServlet());
//	        registration.setLoadOnStartup(1);
//	        registration.addMapping("/StarterSpringProject/*");
		SpringApplication.run(StarterSpringProjectApplication.class, args);
	}

}
