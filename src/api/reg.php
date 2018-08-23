<?php
include 'connect.php';
$username = isset($_GET['username']) ?  $_GET['username'] : null;
$password = isset($_GET['password']) ?  $_GET['password'] : null;
$sql = "select * from useremail where username='$username'";              //查找数据库中是否存在用户名
$result = $conn->query($sql);

if($result->num_rows >0){
  echo 'no';
}else{
  echo 'yes';
}
// $sql = 'select * from user';
// $result = $conn->query($sql);
// $row = $result->fetch_all(MYSQLI_ASSOC);
// $result->close();
// echo json_encode($row,JSON_UNESCAPED_UNICODE);
// $conn->close();

?>