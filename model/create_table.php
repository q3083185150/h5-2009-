<?php
require('./_connect.php');

//书写sql语句
$sql = "CREATE TABLE user_list (
			id INT primary key AUTO_INCREMENT NOT NULL ,
			username VARCHAR(300) NOT NULL,
			userpass VARCHAR(300) NOT NULL
)";
$result = mysqli_query($conn,$sql);
if($result){
	echo "数据表创建成功";
}else{
	echo "数据表创建失败";
}

?>