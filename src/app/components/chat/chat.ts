import { Component } from '@angular/core';
import { MensajeChat } from '../../../models/chat';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  nombre:string="kevin13"       
  email:string="kevin.martinez@ejemplo.com"
  asistenteEscribiendo= false
  cargandoHistorial= false
  mensajes: MensajeChat[] = []
  mensajeTexto=""
  enviandoMensaje= false
  
  enviarMensaje(){}
  manejoErrorImagen(){

  }
  cerrarSesion(){}

  trackByMensaje(index: number,mensaje: MensajeChat ){}

  formatearMensajeAsistente(mensaje: string){}

  ngOnInit(){
    this.mensajes = this.generarMensajesDemo();
  }


  private generarMensajesDemo():MensajeChat[]{
    const ahora = new Date();

    return [
      {
        id:'id1',
        contenido: 'Hola eres el asistente?',
        tipo: 'usuario',
        fechaEnvio: new Date(ahora.getTime()),
        estado:'enviado',
        usuarioId:'u1'
      },{
        id:'id2',
        contenido:'Hola soy tu asistente',
        tipo: 'asistente',
        fechaEnvio: new Date(ahora.getTime()),
        estado:'error',
        usuarioId:'u2'
      },{
        id:'id3',
        contenido:'me puedes ayudar',
        tipo:'usuario',
        fechaEnvio:new Date(ahora.getTime()),
        estado:'enviado',
        usuarioId:'u1'
      },{
        id:'id4',
        contenido:'claro,dime que puedo hacer por ti el dia de hoy',
        tipo:'asistente',
        fechaEnvio:new Date(ahora.getTime()),
        estado:'enviado',
        usuarioId:'u2'
      },{
        id:'id5',
        contenido:'me puedes ayudar con un problema de ortografia',
        tipo:'usuario',
        fechaEnvio:new Date (ahora.getTime()),
        estado:'enviado',
        usuarioId:'u1'
      },{
        id:'id6',
        contenido:"claro que si dime el texto que quieres corregir",
        tipo: 'asistente',
        fechaEnvio:new Date(ahora.getTime()),
        estado:'enviado',
        usuarioId:'u2'
      },{
        id:'id7',
        contenido:'hola me llamo kevin y me gusta programar',
        tipo:'usuario',
        fechaEnvio:new Date(ahora.getTime()),
        estado:'enviado',
        usuarioId:'u1'
      }
    ]
  }
}


