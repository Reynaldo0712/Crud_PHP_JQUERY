<?php


include('db.php');


if(isset($_POST['name']))
{
     $name = $_POST['name'];
     $description = $_POST['description'];
     $sql = "INSERT INTO task(name,description) VALUES('$name','$description')";


     $result =   mysqli_query($conexion,$sql);

     if(!$result)
     {
        die("Error");
     }
     else
     {
        echo "Task Added Successfully";
     }


       
}








?>