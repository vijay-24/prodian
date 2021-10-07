package spring_security_4;

import org.springframework.context.annotation.Bean;    
import org.springframework.context.annotation.ComponentScan;    
import org.springframework.context.annotation.Configuration;    
import org.springframework.web.servlet.config.annotation.EnableWebMvc;    
import org.springframework.web.servlet.view.InternalResourceViewResolver;    
import org.springframework.web.servlet.view.JstlView;    
@EnableWebMvc    
@Configuration    
@ComponentScan    
public class AppConfig {    
    @Bean    
    public InternalResourceViewResolver viewResolver() {    
        InternalResourceViewResolver viewResolver    
                          = new InternalResourceViewResolver();    
        //viewResolver.setViewClass(JstlView.class);  
        System.out.println("_---------------------App configure-----------------------\n");
        viewResolver.setPrefix("");    
        viewResolver.setSuffix(".jsp");    
        return viewResolver;    
    }    
}    
