<?php

header('content-type:text/html;charset=utf-8');

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "user";

//创建连接
$conn = mysqli_connect($servername,$username,$password,$dbname);
if(mysqli_connect_error()){
	die('连接失败');
}

?>