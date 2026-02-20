export interface MensajeChat{
    id: string,
    contenido: string,
    usuarioId: string,
    fechaEnvio: Date,
    estado: 'enviado'|'enviando'|'error'|'temporal'
    tipo: 'usuario' | 'asistente'
}

export interface ConversacionChat{
    id: string;
    usuarioId: string,
    mensaje: MensajeChat,
    ultimaActividad: Date,
    fechaCreacion: Date,
    titulo: string;
}