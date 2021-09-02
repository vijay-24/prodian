package com.JDBC.MySQL;

import java.sql.*;

public class DAO {
	
	Statement stmt;
	Connection con;
	
	public DAO() throws ClassNotFoundException, SQLException {
		Class.forName("com.mysql.jdbc.Driver"); 
		con = DriverManager.getConnection("jdbc:mysql://localhost:3306/test","root","Root@!234");
		stmt=con.createStatement();
	}

}
