package com.MySQL;

import java.sql.ResultSet;
import java.sql.SQLException;

public class showDataClass {
	
	showDataClass() throws ClassNotFoundException, SQLException {
		int index = 1;
		DAO dao = new DAO();
//		ResultSet rs = dao.stmt.executeQuery("select emp_1.empId as EmployeeId,emp_1.employeeName, emp_2.designation,emp_2.salary, emp_3.employeeCity from emp_1,emp_2, emp_3 where emp_1.empId = emp_2.empId and emp_2.empId = emp_3.empId;"); 
		ResultSet rs = dao.stmt.executeQuery("SELECT emp_1.empId,emp_1.employeeName, emp_2.designation,emp_2.salary, emp_3.employeeCity FROM emp_1 LEFT JOIN emp_2 ON emp_1.empId = emp_2.empId LEFT JOIN emp_3 ON emp_1.empId = emp_2.empId and emp_2.empId = emp_3.empId UNION ALL SELECT emp_1.empId,emp_1.employeeName, emp_2.designation,emp_2.salary, emp_3.employeeCity FROM emp_1 RIGHT JOIN emp_2 ON emp_1.empId = emp_2.empId RIGHT JOIN emp_3 ON emp_1.empId = emp_2.empId and emp_2.empId = emp_3.empId;");
		System.out.println("S.NO. Employee Id  Employee Name          Designation        Salary         City   ");
		while(rs.next())  
		{
			System.out.printf("%d. %12s %15s %25s  %10d  %12s\n" , index++, rs.getString(1), rs.getString(2),rs.getString(3),rs.getInt(4),rs.getString(5));
		}
		dao.con.close();
	}
}
