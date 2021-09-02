package com.JDBC.MySQL;

import java.util.Scanner;
import java.lang.*;

import com.sun.org.apache.xalan.internal.xsltc.compiler.sym;

import java.sql.*;

public class MainClass {

	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		
		Scanner sc = new Scanner(System.in);
		int no;
		
		do {
			System.out.println("---------- Database Operations ------------------ :");
			System.out.println("    1. Show the Data :");
			System.out.println("    2. Insert the Data :");
			System.out.println("    3. Delete the Data :");
			System.out.println("    4. Update the Data :");
			System.out.println("    5. Exit :");

			System.out.println("Enter Your operation :");
			no = sc.nextInt();
			
			if(no==1) {
				new showDataClass();	
			}
			else if(no==2) {
				new insertDataClass();
			}
			else if(no==3) {
				new deleteDataClass();
			}
			else if(no==4) {
				new updateDataClass();
			}
			else if(no==5) {
				System.out.println("  ------ Welcome Again ------- !!");
			}
			else
			{
				System.out.println(" Enter The Valid Number !!");
			}
				
		}while(no<=4 && no>=1);
		
		System.out.println(" ----------- ********  EXIT  ******* ----------------");
		
	}
	
}
