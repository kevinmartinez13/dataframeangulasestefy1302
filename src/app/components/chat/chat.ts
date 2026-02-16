import { Component } from '@angular/core';
import { MensajeChat } from '../../../models/chat';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  nombre:string="kevin martinez"
  email:string="kevin@gmail.com"

  mensajes: MensajeChat[] =[]
  cargandoHistorial=1

  manejoErrorimagen(){

  }
  cerrarSesion(){}
}
