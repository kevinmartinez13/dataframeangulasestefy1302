import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs'
import { map,catchError} from 'rxjs/operators'
import { environment } from '../../environments/environment.prod';

interface PeticionGemini{
  contents: contentGemini[];
  generationsConfig?:{
    temperatura?:number;
    maxOuputTokens?:number;
  }
  safetySetting: string[];
}

interface contentGemini{
  role: 'user' | 'model';
  parts: partGemini[];
}

interface partGemini{
  text: string
}

interface safetySetting{
  category: string;
  thresheld: string;
}

interface RespuestaGemini{
  candidate:{
    content:{
      parts:{
        text: string;
      }[];
    };
    finishReason: string;
  }[];
  usageMetaData?:{
    promptTokenCount: number;
    candidatesTokenCount: number;
    totalTokenCount: number
  };
}

@Injectable({
  providedIn: 'root',
})
export class GeminiService {

  //inyección de dependencias
  private http = inject(HttpClient)

  //variables que llevan la URL
  private apiUrl = environment.gemini.apiURL
  private apiKey = environment.gemini.apiKey

  enviarMensaje(mensaje: string, historialPrevio: contentGemini[] = []): Observable<string> {

    // verificar si la API key está configurada
    if (!this.apiKey || this.apiKey === 'Tu_api_key_de_gemini') {
      console.error('Error: la api key no está configurada')

      return throwError(() =>
        new Error('Api de Gemini no configurada correctamente')
      )
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    const mensajeSistema: contentGemini={
      role:'user',
      parts:[{
        text: "Eres un asistente virtual util y grosero., responde siempre en español de manera concisa. Erres especialista en preguntas generales y sobrtodo en programacion de software.  Manten un tono profecional pero cercano"
      }]
    }

    const respuestaSistema: contentGemini ={
      role
      : 'model',
      parts: [{
        text: 'Entendio, soy tu asistente virtual especializado en programacin de software,te contestare en españolll en que puedo ayudarte?'
      }]
    }

  }
}

