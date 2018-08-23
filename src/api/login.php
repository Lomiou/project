<?php
include 'connect.php';
$username = isset($_GET['username']) ?  $_GET['username'] : null;
$password = isset($_GET['password']) ?  $_GET['password'] : null;
$sql = "select * from useremail where username='$username' AND password='$password'";
$result = $conn->query($sql);
if($result->num_rows > 0){
  echo 'success';
}else{
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

?>