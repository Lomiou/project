<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'tbs138';
$conn = new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
  die('连接失败：' . $conn->connecr_error);
}
$conn->set_charset('utf8');
?>