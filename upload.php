<?php
// Check if file is uploaded
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['myfile'])) {
  $fileName = $_FILES['myfile']['name'];
  $tmpName = $_FILES['myfile']['tmp_name'];
  $fileSize = $_FILES['myfile']['size'];
  $error = $_FILES['myfile']['error'];

  // Validate file (size, type, etc.) - Implement proper validation here

  // Move uploaded file to the upload folder
  if (move_uploaded_file($tmpName, "upload/" . $fileName)) {
    echo "File uploaded successfully!";
  } else {
    echo "Failed to upload file.";
  }
} else {
  echo "Invalid request.";
}
?>
