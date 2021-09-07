package newSpringDataBasePakage;

import java.sql.ResultSet;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCallback;
import org.springframework.jdbc.core.RowMapper;



@SpringBootApplication
public class DatabaseSpringApplication implements CommandLineRunner {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	
	public static void main(String[] args) {
		SpringApplication.run(DatabaseSpringApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
//		String sql="INSERT INTO testtable (first,last) VALUES (?,?)";
//		int result = jdbcTemplate.update(sql,"vijay","Kumaran");
////		 String SQL = "select * from testtable";
//	      List <Customer> students = jdbcTemplate.query(SQL, new CustomerRowMapper());
//	      System.out.println(students);
//		if(result>0) {
//			System.out.println("one row is added");
//		}
	}
		
		
	

}
