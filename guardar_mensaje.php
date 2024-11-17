<?php
require_once 'connection.php';

// Crear una instancia de la clase
$conexion = new Conexion();
$conn = $conexion->getConexion();

// Ejemplo de inserción de datos
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sede = $_POST['sede'];
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Verificar que los campos no estén vacíos
    if (!empty($sede) && !empty($nombre) && !empty($email) && !empty($mensaje)) {
        $stmt = $conn->prepare("INSERT INTO mensajes (sede, nombre, email, mensaje) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $sede, $nombre, $email, $mensaje);

        if ($stmt->execute()) {
            echo "Mensaje enviado con éxito";
        } else {
            echo "Error al insertar datos: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Por favor, completa todos los campos.";
    }
}

// Cerrar la conexión al finalizar
$conexion->cerrarConexion();
?>
