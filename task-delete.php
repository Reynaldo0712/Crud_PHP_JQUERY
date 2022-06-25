<?php


include('db.php');

if(isset($_POST['id']))
{

    $id = $_POST['id'];

    $sql = "DELETE FROM task WHERE id = $id";
    $result = mysqli_query($conexion,$sql);

    if(!$result)
    {

        die("error");


    }
    else
    {
        echo "task deleted";
    }

}












?>