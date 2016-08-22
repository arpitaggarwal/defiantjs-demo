<!DOCTYPE html>
<html>
<head>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<title>Defiant JS Demo</title>

<spring:url value="/dist/js/script.js" var="scriptJsUrl"
	htmlEscape="true" />

<spring:url value="/js/app.js" var="appJsUrl"
	htmlEscape="true" />
	
<script src="${scriptJsUrl}"></script>
<script src="${appJsUrl}"></script>
</html>
