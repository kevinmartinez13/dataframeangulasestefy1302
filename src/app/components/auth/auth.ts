import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { AuthService } from '../../services/auth';


@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})


  export class Auth {
    autenticando=false
    mensajeError=""

      private authService = inject(AuthService)
      private router = inject(Router)

      //funcion que revise la autenticacion
      async iniciarsesioncongoogle (): Promise<void> {
        console.log(
          "inicion sesion con componet"
        );

        this.autenticando= true
        this.mensajeError=""

        try {
          //falta implementar el servicio
           console.log("inicion sesion con componet" );
           const usuario = await this.authService.iniciarSesion()

          //vamos a simular un usuario ya creado


        if(usuario){
          await this.router.navigate(['/chat'])
        }else{
          this.mensajeError = "error al autenticar"
          console.error("error al autenticar en try")
        }

      } catch(error: any) {
      //validacion de algunos posibles errores
      if(error.code === "auth/popup.closed-by-user"){
        console.error('Error=Cerraste la ventana emergente')
      }else if(error.code === "auth/popup-blocked"){
        console.error('el navegador bloqueo la ventana emergente')
      }else if(error.code == 'auht/network-request-faild'){
        console.error('problemas con la conexion a internet')
      }
    }finally{
      this.autenticando= false
    }
  }

  ngOninit():void{
    this.authService.estaAutenticado$.subscribe( autenticado=> {
      console.log("onInit");

      if(autenticado){
        this.router.navigate(['/chat'])
      }
    })
}
}

