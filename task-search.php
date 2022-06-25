<?php

include('db.php');

$search = $_POST['search'];

if(!empty($search))
{
$sql = "SELECT *FROM task WHERE  name LIKE '$search%'";
$result = mysqli_query($conexion,$sql);

if(!$result)
{
    die('Error' . mysqli_error($conexion));
}

$json = array();
while($row = mysqli_fetch_array($result))
{
$json[] = array(
    'name' => $row['name'],
    'description' => $row['description'],
    'Date' => $row['Date'],
    'id' => $row['id']
);



}
$jsonstring = json_encode($json);
echo $jsonstring;


}










?>