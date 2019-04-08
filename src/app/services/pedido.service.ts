import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';


export interface Pedido {
  id?: string;
  tipo: string;
  sabor: string;
  tamanho: string;
  data_entrega: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidos = [];
  ref = firebase.database().ref('pedidos/');

  constructor( ) { }
}
