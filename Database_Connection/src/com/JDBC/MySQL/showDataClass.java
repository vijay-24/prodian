package com.JDBC.MySQL;

import java.sql.ResultSet;
import java.sql.SQLException;

public class showDataClass {
	
	showDataClass() throws ClassNotFoundException, SQLException {
		int index = 1;
		DAO dao = new DAO();
		ResultSet rs = dao.stmt.executeQuery("select * from testtable");   
		System.out.println("S.NO.   First Name    Last Name     ");
		while(rs.next())  
		{
			System.out.printf("%d. %12s %12s\n" , index++, rs.getString(1), rs.getString(2));
		}
		dao.con.close();
	}
}
