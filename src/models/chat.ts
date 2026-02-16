export interface MensajeChat{
    id:string,
    contenido:string,
    usuarioId:string,
    fechaEnvio:string,
    estado: 'enviado'|'enviado'|'error'|'temporal'
    tipo: 'usuario' | 'asistente'
}

export interface ConversacionChat{
    id: string;
    usuarioId: string,
    mensajes: MensajeChat,
    ultimaActividad: Date,
    fechaCreacion: Date,
    titulo: string
}