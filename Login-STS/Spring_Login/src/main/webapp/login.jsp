<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE HTML>
<html xmlns:th="https://www.thymeleaf.org">
<head> 
    <title>Getting Started: Handling Form Submission</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
<h1> Login form webapps JSP</h1>
	<h1>Form</h1>
    <form action="/greeting" th:action="@{/greeting}" th:object="${greeting}" method="post">
    	<p>User Name: <input type="text" th:field="*{name}" /></p>
        <p>Password: <input type="text" th:field="*{password}" /></p>
        <p><input type="submit" value="Submit" /> <input type="reset" value="Reset" /></p>
    </form>
</body>
</html>