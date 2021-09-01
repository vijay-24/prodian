package com.sampleJavaProject;

import java.io.*;
import java.sql.*;
import java.util.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Properties;
import java.lang.*;
import com.mysql.jdbc.Driver.*;
import java.text.*;
import java.util.*;




public class Main_Jdbc_MySql {

	public static void main(String[] args) throws SQLException {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
		int no;
		System.out.println("This is Jdbc Testing with the MySQL !!!");
		try {
			Class.forName("com.mysql.jdbc.Driver");  
			//			 Class.forName("oracle.jdbc.driver.OracleDriver");/mail
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/test","root","Root@!234");  
			//here vk is database name, root is username and password  is null
			//			String sql = "CREATE TABLE testTable (first VARCHAR(255),last VARCHAR(255));";
			//	        stmt.execute(sql);
			Statement stmt=con.createStatement();  

			do {
				System.out.println("Database Operations :");
				System.out.println("1. Insert the Data :");
				System.out.println("2. Show the Data :");
				System.out.println("3. Exit :");

				System.out.println("Enter Your operation :");
				no = sc.nextInt();

				if(no==1)
				{
					Scanner sc1 = new Scanner(System.in);
					System.out.println(" Enter the First Name");
					String firstName = sc1.nextLine();
					System.out.println(" Enter the Last Name");
					String lastName = sc1.nextLine();
					String sql = "INSERT INTO testtable values ('"+firstName+"','"+lastName+"');";
					Statement stmt1=con.createStatement(); 
					int temp = stmt1.executeUpdate(sql);
					if(temp==1)
						System.out.println("  Data Stored Successfully !!");
					else
						System.out.println("  Give Please proper data !!");
					System.out.println(" ------------------------------------------------------------- ");
				}
				else if(no==2) {
					int index = 1;
					System.out.println("S.No. First Name Last Name ");
					ResultSet rs = stmt.executeQuery("select * from testtable");   
					while(rs.next())  
						System.out.println(index++ + "  "+rs.getString(1)+"  "+rs.getString(2));
					System.out.println("----------------------------------------");
				}
				else {
					System.out.println("EXIT !!");
				}

			}while(no<=2);


			con.close();  
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}  
	}

}
