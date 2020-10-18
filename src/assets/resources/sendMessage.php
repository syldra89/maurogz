<?php 

if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
    $_POST = json_decode(file_get_contents('php://input'), true);

//Tomo los datos de contacto que me mandan por el form
$json = $request->input('json',null);
//Lo paso a objeto/array
$params = json_decode($json); //Devuelve un objeto
$params_array = json_decode($json, true); //Devuelve un array

//Deuvelve codigo de ok
$data = array(
	'status'  => 'success',
	'code'    => 200,
	'message' => 'El php funca',
	'params'    => $params_array
);

return response()->json($data, $data['code']);







?>