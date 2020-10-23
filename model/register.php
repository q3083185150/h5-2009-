<?php
header('content-type:text/html;charset=utf-8');
$uname=$_GET["uname"];
$upass=$_GET["upass"];

$conn = mysqli_connect('localhost','root','root','user');
$sql = "INSERT INTO `user_list` VALUES (null,'$uname','$upass')";
$res = mysqli_query($conn,$sql);
mysqli_close($conn)
?>