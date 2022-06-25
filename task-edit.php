

<?php

include('db.php');


$id =  $_POST['id'];
$name  = $_POST['name'];
$description = $_POST['description'];



$sql = "UPDATE `task` SET `name`='$name',`description`='$description' WHERE id='$id'";



$result = mysqli_query($conexion,$sql);

if(!$result)
{
    die('Error' . mysqli_error($conexion));
}

echo "Task updated successfully";

?>