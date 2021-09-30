
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<jsp:include page="menu.jsp" />
<body>
<h1>This is Sign Up Page !!</h1>
<h3 style="color: red;">Login Page</h3>
<div id="addEmployee">
		<form:form action="/add" method="post"	modelAttribute="log">
			<p>
				<label>Enter Employee Id</label>
				<form:input path="name" />
			</p>
			<p>
				<label>Enter Name</label>
				<form:input path="password" />
			</p>
			<input type="SUBMIT" value="Submit" />
		</form:form>
	</div>
</body>
</html>


