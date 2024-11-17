// Accedemos a los elementos del chat
const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const messages = document.getElementById('messages');

// Función para mostrar mensajes en el chat
function addMessage(text, type) {
    const message = document.createElement('div');
    message.classList.add('message', type);
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight; // Mantener la vista al final
}

function aiResponse(userMessage) {
    let aiMessage = "Lo siento, no estoy seguro de cómo responder a eso. ¡Pregunta algo más!";

    // Definir arrays de palabras clave para cada tipo de consulta
    const keywordsSedes = ["sedes", "donde estamos", "ubicaciones", "sedes en bogotá","TOberin,Prado,Centro suba,Ricaurte, Titan Plaza"];
    const keywordsRequisitosLicencia = ["requisitos para licencia", "cómo sacar la licencia", "documentos para licencia"];
    const keywordsExamenMedico = ["examen médico", "examen de salud", "reconocimiento médico"];
    const keywordsExamenPsicotecnico = ["examen psicotécnico", "examen psicológico", "aptitudes psicológicas"];
    const keywordsEdadLicencia = ["edad para licencia", "cuántos años para licencia", "requisitos de edad"];
    const keywordsCategoriasLicencia = ["categorías de licencia", "tipos de licencia", "licencia de conducción"];
    const keywordsRenovarLicencia = ["renovar licencia", "renovación de licencia", "renovar mi licencia"];
    const keywordsDuplicadoLicencia = ["duplicado licencia", "perdí mi licencia", "robo de licencia"];
    const keywordsTiempoEntregaLicencia = ["tiempo de entrega licencia", "cuánto tarda en llegar la licencia"];
    const keywordsCostoLicencia = ["costo licencia", "precio licencia de conducción", "cuánto cuesta licencia", "valor licencia de conducción"];

    // Respuesta a "hola"
    if (userMessage.toLowerCase().includes("hola")) {
        aiMessage = "¡Hola! ¿Cómo puedo ayudarte hoy?";
    }

    // Respuesta a "sedes" y variaciones
    else if (keywordsSedes.some(keyword => userMessage.toLowerCase().includes(keyword))) {
        aiMessage = "Tenemos varias sedes en Bogotá. ¿Te gustaría saber más sobre nuestras sedes?";
    }

    // Respuesta a "requisitos para licencia" y variaciones
    else if (keywordsRequisitosLicencia.some(keyword => userMessage.toLowerCase().includes(keyword))) {
        aiMessage = "Para obtener tu licencia de conducción en Colombia, debes cumplir con varios requisitos: tener al menos 16 años (para motocicletas) o 18 años (para vehículos particulares), aprobar un examen médico, psicológico, y un examen práctico de conducción.";
    }

    // Respuesta a "examen médico" y variaciones
    else if (keywordsExamenMedico.some(keyword => userMessage.toLowerCase().includes(keyword))) {
        aiMessage = "El examen médico es obligatorio para obtener o renovar tu licencia de conducción en Colombia. Este examen evalúa tu capacidad física, visual, auditiva y cognitiva para conducir. Lo debes realizar en un centro de reconocimiento de conductores autorizado.";
    }

    // Respuesta a "examen psicotécnico" y variaciones
    else if (keywordsExamenPsicotecnico.some(keyword => userMessage.toLowerCase().includes(keyword))) {
        aiMessage = "El examen psicotécnico evalúa tus aptitudes psicológicas para conducir de forma segura. Es necesario para obtener tu licencia de conducción y debe ser realizado por un profesional autorizado.";
    }

    // Respuesta a "edad para sacar licencia" y variaciones
    else if (keywordsEdadLicencia.some(keyword => userMessage.toLowerCase().includes(keyword))) {
        aiMessage = "En Colombia, la edad mínima para obtener una licencia de conducción depende del tipo de vehículo: \n- Para motocicletas (categoría A1), la edad mínima es de 16 años. \n- Para vehículos particulares (categoría B1), la edad mínima es de 18 años. \n- Para vehículos de carga (categoría B2 y B3), también es necesario tener al menos 18 años.";
    }

    // Respuesta a "categorías de licencia" y variaciones
    else if (keywordsCategoriasLicencia.some(keyword => userMessage.toLowerCase().includes(keyword))) {
        aiMessage = "Las principales categorías de licencia en Colombia son: \n- A1: Para motocicletas con cilindrada hasta 125 cc. \n- A2: Para motocicletas con cilindrada superior a 125 cc. \n- B1: Para vehículos particulares. \n- B2: Para vehículos de carga. \n- B3: Para vehículos de transporte público y otros tipos de transporte especializado.";
    }

    // Respuesta a "renovar licencia" y variaciones
    else if (keywordsRenovarLicencia.some(keyword => userMessage.toLowerCase().includes(keyword))) {
        aiMessage = "Para renovar tu licencia de conducción en Colombia, debes realizar un examen médico, psicotécnico y visual en un centro autorizado. La renovación debe hacerse antes de que tu licencia expire. El proceso es similar al de la primera vez que la obtuviste, solo que no necesitas hacer el examen práctico de conducción nuevamente.";
    }

    // Respuesta a "duplicado de licencia" y variaciones
    else if (keywordsDuplicadoLicencia.some(keyword => userMessage.toLowerCase().includes(keyword))) {
        aiMessage = "Si has perdido o te han robado tu licencia de conducción, puedes solicitar un duplicado. Para ello, debes realizar el trámite en la Secretaría de Movilidad o en una entidad autorizada, presentar los documentos correspondientes y pagar las tarifas estipuladas.";
    }

    // Respuesta a "tiempo de entrega de la licencia" y variaciones
    else if (keywordsTiempoEntregaLicencia.some(keyword => userMessage.toLowerCase().includes(keyword))) {
        aiMessage = "El tiempo de entrega de la licencia de conducción en Colombia depende de la entidad que la emita. Por lo general, puede tardar entre 7 y 15 días hábiles, dependiendo de la carga de trabajo de la Secretaría de Movilidad o el centro de reconocimiento de conductores autorizado.";
    }

    // Respuesta a "costo licencia conducción" y variaciones
    else if (keywordsCostoLicencia.some(keyword => userMessage.toLowerCase().includes(keyword))) {
        aiMessage = "El costo de la licencia de conducción en Colombia varía dependiendo de la categoría que elijas. Los costos pueden incluir los exámenes médicos, psicotécnicos y las tarifas de expedición. Te sugiero que consultes los precios actuales en la Secretaría de Movilidad o en el centro de tu localidad.";
    }

    // Respuesta a "examen práctico de conducción"
    else if (userMessage.toLowerCase().includes("examen práctico")) {
        aiMessage = "El examen práctico de conducción es una prueba en la que demostrarás tus habilidades al volante frente a un instructor autorizado. Para presentar este examen, primero debes haber aprobado los exámenes médicos y psicotécnicos. El examen consiste en una prueba de conducción en vías públicas, siguiendo las normas de tránsito.";
    }

    return aiMessage;
}



// Evento para enviar un mensaje
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const userMessage = input.value.trim();
    if (userMessage) {
        addMessage(userMessage, 'user-message');
        input.value = '';

        // Respuesta de la IA
        setTimeout(() => {
            const response = aiResponse(userMessage);
            addMessage(response, 'ai-message');
        }, 1000); // Respuesta con un pequeño retraso
    }
});
