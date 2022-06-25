<?php

include('db.php');

$id = $_POST['id'];

$sql = "SELECT * FROM task WHERE id=$id";

$result  = mysqli_query($conexion,$sql);

if(!$result)
{
    die('error');
}

$json = array();
while($row = mysqli_fetch_array($result))
{


  $json[] = array(

        'name' => $row['name'],
        'description' => $row['description'],
        'id' => $row['id']


  );


}


$jsonstring = json_encode($json[0]);

echo $jsonstring;

?>