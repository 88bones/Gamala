<?php

include 'connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $pname = mysqli_real_escape_string($conn, $_POST['pname']);
    $ptype = mysqli_real_escape_string($conn, $_POST['ptype']);
    $price = mysqli_real_escape_string($conn, $_POST['price']);
    $info = mysqli_real_escape_string($conn, $_POST['info']);
    $uploadFile = null;  // Initialize as null for cases where no image is uploaded

    // Image upload logic
    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        $image = $_FILES['image'];

        // Specify the directory where the image will be saved
        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . basename($image['name']);

        // Check if the directory exists, create it if not
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }

        // Move the uploaded file to the directory
        if (move_uploaded_file($image['tmp_name'], $uploadFile)) {
            echo "Product added with image: " . $uploadFile;
        } else {
            echo "Error uploading image.";
            $uploadFile = null;  // Reset to null in case of an error
        }
    } else {
        echo "No image uploaded.";
    }

    // Prepare SQL with image path, using NULL if no image was uploaded
    $sql = "INSERT INTO products (pname, ptype, price, info, image) 
            VALUES ('$pname', '$ptype', '$price', '$info', " . ($uploadFile ? "'$uploadFile'" : "NULL") . ")";

    if (mysqli_query($conn, $sql)) {
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
}
