<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'];

  $data = file_get_contents('client.txt');
  $users = json_decode($data, true) ?? [];

  $user = null;
  foreach ($users as $userData) {
    if ($userData['username'] === $username) {
      $user = $userData;
      break;
    }
  }

  if ($user !== null) {
    echo json_encode($user);
  } else {
    echo json_encode([]); // Return an empty array if user is not found
  }
}
?>
