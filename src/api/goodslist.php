<?php
$qty = isset($_GET['qty']) ? $_GET['qty'] : null;
$pageNo = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;

include 'connect.php';
$sql = 'select * from list';
$result = $conn->query($sql);
$row = $result->fetch_all(MYSQLI_ASSOC);
$result->close();
// $data = json_decode($row,JSON_UNESCAPED_UNICODE);
$conn->close();

$res = array(
  "total" => count($row),
  "data" => array_slice($row,($pageNo-1)*$qty,$qty),
  "pageNo" => $pageNo,
  "qty" => $qty
);

echo json_encode($res,JSON_UNESCAPED_UNICODE);