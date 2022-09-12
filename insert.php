<?php
	header('Content-Type: application/json');

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$pdo = new PDO('mysql:host=localhost; dbname=comment;', 'root', '');

	$stmt = $pdo->prepare('INSERT INTO comentarios (name, email, comment) VAlUES(:na, :em, :com )');
	$stmt->bindValue(':na', $name);
	$stmt->bindValue(':em', $email);
	$stmt->bindValue(':com', $message);
	$stmt->execute();

	if ($stmt->rowCount() >= 1) {
        echo json_encode('Comentário Salvo com Sucesso');
    } else {
        echo json_encode('Falha ao salvar comentário');
    } 