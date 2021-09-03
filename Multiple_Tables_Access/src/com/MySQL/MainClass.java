package com.MySQL;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

import com.JDBC.MySQL.deleteDataClass;
import com.JDBC.MySQL.insertDataClass;
import com.JDBC.MySQL.showDataClass;
import com.JDBC.MySQL.updateDataClass;

public class MainClass {

	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		// TODO Auto-generated method stub
			
			Scanner sc = new Scanner(System.in);
			int no;
			
			do {
				System.out.println("---------- Operations ------------------ :");
				System.out.println("    1. Show the Tables from the Employee Database :");
				System.out.println("    2. First Table :");
				System.out.println("    3. Second Table :");
				System.out.println("    4. Third Table :");
				System.out.println("    5. Combine all Tables by Employee ID :");
				System.out.println("    6. EXIT  ");
				
				System.out.println("Enter Your operation :");
				no = sc.nextInt();
				
				if(no==1) {
					showTables();
				}
				else if(no==2) {
					showDataTable_1();
				}
				else if(no==3) {
					showDataTable_2();
				}
				else if(no==4) {
					showDataTable_3();
				}
				else if(no==5) {
					new showDataClass();	
				}
				else if(no==6) {
					System.out.println("  ------ Welcome Again ------- !!");
				}
				else
				{
					System.out.println(" Enter The Valid Number !!");
				}
				System.out.printf("\n\n\n");
				System.out.println("------------------------------------------------------");
					
			}while(no<=5 && no>=1);
	}
	
	static void showTables() throws ClassNotFoundException, SQLException
	{
		int index = 1;
		DAO dao = new DAO();
		ResultSet rs = dao.stmt.executeQuery("show tables"); 
		System.out.println("S.NO. Tables Name   ");
		while(rs.next())  
		{
			System.out.printf("%d. %12s \n" , index++, rs.getString(1));
		}
		dao.con.close();
	}
	
	static void showDataTable_1() throws ClassNotFoundException, SQLException
	{
		int index = 1;
		DAO dao = new DAO();
		ResultSet rs = dao.stmt.executeQuery("select * from emp_1"); 
		System.out.println("S.NO. Employee Id  Employee Name   ");
		while(rs.next())  
		{
			System.out.printf("%d. %12s %12s\n" , index++, rs.getString(1),rs.getString(2));
		}
		dao.con.close();
	}
	
	static void showDataTable_2() throws ClassNotFoundException, SQLException
	{
		int index = 1;
		DAO dao = new DAO();
		ResultSet rs = dao.stmt.executeQuery("select * from emp_2"); 
		System.out.println("S.NO. Employee Id      Designation        salary   ");
		while(rs.next())  
		{
			System.out.printf("%d. %12s    %12s    %12d\n" , index++, rs.getString(1),rs.getString(2),rs.getInt(3));
		}
		dao.con.close();
	}
	
	static void showDataTable_3() throws ClassNotFoundException, SQLException
	{
		int index = 1;
		DAO dao = new DAO();
		ResultSet rs = dao.stmt.executeQuery("select * from emp_3"); 
		System.out.println("S.NO.   Employee Id        City   ");
		while(rs.next())  
		{
			System.out.printf("%d. %12s    %12s\n" , index++, rs.getString(1),rs.getString(2));
		}
		dao.con.close();
	}

}
