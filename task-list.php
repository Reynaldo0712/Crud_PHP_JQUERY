

<?php

include('db.php');


$sql = 'SELECT *FROM task';

$result = mysqli_query($conexion,$sql);


if(!$result)
{
    die('Error' . mysqli_error($conexion));
}




$json = array();
while($row = mysqli_fetch_array($result))
{

 $json[] = array(

   'id' => $row['id'],
   'name' => $row['name'],
   'description' => $row['description'],
   'Date' => $row['Date']





 );



}

 $jsonstring  = json_encode($json);
 echo $jsonstring;
 






?>