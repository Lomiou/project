<?php
include 'connect.php';
$username = isset($_POST['username'])? $_POST['username'] : null;
$password = isset($_POST['password'])? $_POST['password'] : null;
$sql="insert into useremail(username,password) values ('$username','$password')";           
// $result=$conn->query($sql);
// if($result){
//   echo 'success';
// }else{
//   echo 'fail';
// };      
if (mysqli_query($conn, $sql)) { 
  echo "success"; 
} else { 
  echo "Error: " . $sql . "<br>" . mysqli_error($conn); 
} 

mysqli_close($conn); 
                  

?>