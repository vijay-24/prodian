package spring_security_4;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;    
public class MvcWebApplicationInitializer extends    
        AbstractAnnotationConfigDispatcherServletInitializer {    
    @Override    
    protected Class<?>[] getRootConfigClasses() {    
    	System.out.println("-----mvc web get root config---------");
        return new Class[] { WebSecurityConfig.class };    
    }    
    @Override    
    protected Class<?>[] getServletConfigClasses() {    
        // TODO Auto-generated method stub  
    	System.out.println("-----mvc web     get servlet---------");
        return null;    
    }   
    @Override    
    protected String[] getServletMappings() {  
    	System.out.println("-----mvc web     mapping---------");
        return new String[] { "/" };    
    }    
}  