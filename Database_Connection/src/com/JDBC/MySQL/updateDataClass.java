package com.JDBC.MySQL;

import java.sql.SQLException;
import java.util.Scanner;

public class updateDataClass {
	
	updateDataClass() throws ClassNotFoundException, SQLException {
		new showDataClass();
		Scanner sc1 = new Scanner(System.in);
		String constrainFirstName,firstName,lastName;
		System.out.println(" Enter the Firstname as which row You would Like to Modify !! ");
		constrainFirstName = sc1.nextLine();
		System.out.println(" Enter the Firstname as Your Wish !! ");
		firstName = sc1.nextLine();
		System.out.println(" Enter the Lastname as Your Wish !! ");
		lastName = sc1.nextLine();
		String sql = "UPDATE testtable SET first = '"+firstName+"', last = '" +lastName + "' where first = '"+constrainFirstName+"';";
		DAO dao = new DAO();
		int temp = dao.stmt.executeUpdate(sql);
		if(temp==1)
		{
			System.out.println("  Data Updated Successfully !!");
			System.out.println("  Shows Updated Data !!");
			new showDataClass();
		}
		else
			System.out.println("  Data Not Updated Successfully (or) Your Primary Key is not present !!");
		System.out.println(" ------------------------------------------------------------- ");
	}
}
