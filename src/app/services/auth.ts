import { inject, Injectable } from '@angular/core';
 
import { Auth, user, User} from '@angular/fire/auth';
import { map } from 'rxjs';
import { usuario } from '../../models/usuario';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private auth = inject (Auth)

  //variable de tipo observable
  usuario$ = user(this.auth)

  //variable observable que devielve true si el usuario esa autenticado

   estaAutenticado$ = this.usuario$.pipe(
    map(usuario => !! usuario)  
   ) 

   // funcion asincroma que permite el inicio de sesion

   async iniciarSesion():  Promise < usuario | null>{
    try{

      const proveedor =  new GoogleAuthProvider;

      //controladores
      proveedor.addScope('email')
      proveedor.addScope('profile')

      const resultado = await signInWithPopup(this.auth, proveedor);
      const usuarioFirebase = resultado.user;

      if(usuarioFirebase){
        const usuario : usuario ={
         uid: usuarioFirebase.uid,
        nombre:usuarioFirebase.displayName || 'usuario sin nombre',
        email:usuarioFirebase.email || '',
        fotoUrl: usuarioFirebase.photoURL || undefined,
        fechaCreacion: new Date,
        ultimaConexion: new Date,   
        }
        return usuario;
      }
      return null;
    }catch(error){
      console.error ('error en la atenticacion')
      throw error;
    }
  }

  obtenerUsuario(): User | null {
    return this.auth.currentUser
  }

  //CerrarSesion
}
