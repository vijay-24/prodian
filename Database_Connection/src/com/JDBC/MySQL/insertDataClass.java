package com.JDBC.MySQL;

import java.sql.SQLException;
import java.util.Scanner;

public class insertDataClass {

	insertDataClass() throws SQLException, ClassNotFoundException
	{
		Scanner sc1 = new Scanner(System.in);
		System.out.println(" Enter the First Name");
		String firstName = sc1.nextLine();
		System.out.println(" Enter the Last Name");
		String lastName = sc1.nextLine();
		String sql = "INSERT INTO testtable values ('"+firstName+"','"+lastName+"');";
		System.out.println(sql);
		DAO dao = new DAO();
		int temp = dao.stmt.executeUpdate(sql);
		if(temp==1)
		{
			System.out.println("  Data Stored Successfully !!");
			System.out.println("  Shows Updated Data !!");
			new showDataClass();
		}
		else
			System.out.println("  Give Please proper data !!");
		System.out.println(" ------------------------------------------------------------- ");
	}
}
