<?php
include 'connect.php';
$id = isset($_GET['id']) ?  $_GET['id'] : null;
$sql = "select * from goodsdetail where id='$id'";
$result = $conn->query($sql);
if($result->num_rows > 0){
  while($row = $result->fetch_assoc()){
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
  };
};



// $result->close();
// echo json_encode($row,JSON_UNESCAPED_UNICODE);
// $conn->close();



?>