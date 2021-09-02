package com.JDBC.MySQL;

import java.sql.SQLException;
import java.util.Scanner;

public class deleteDataClass {

	deleteDataClass() throws ClassNotFoundException, SQLException 
	{
		new showDataClass();
		Scanner sc1 = new Scanner(System.in);
		String constrainFirstName;
		System.out.println(" Enter the Firstname as which row You would Like to Delete !! ");
		constrainFirstName = sc1.nextLine();
		String sql = "DELETE FROM testtable where first = '"+constrainFirstName+"';";
		DAO dao = new DAO();
		int temp = dao.stmt.executeUpdate(sql);
		if(temp==1)
		{
			System.out.println("  Data Deleted Successfully !!");
			System.out.println("  Shows Updated data !!");
			new showDataClass();
		}
		else
			System.out.println("  Data Not Deleted Successfully (or) Your Entered FirstName (Primary Key) is not present in the List !!");
		System.out.println(" ------------------------------------------------------------- ");
		
	}

}
