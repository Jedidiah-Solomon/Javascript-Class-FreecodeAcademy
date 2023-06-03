<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = file_get_contents('./client.txt');
  $users = json_decode($data, true) ?? [];
  
  $newUser = json_decode(file_get_contents('php://input'), true);
  $users[] = $newUser;
  
  $jsonData = json_encode($users);
  file_put_contents('client.txt', $jsonData);
}
?>
