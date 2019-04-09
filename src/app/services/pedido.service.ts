import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
// import { map, take } from 'rxjs/operators';
// import { Observable } from 'rxjs';
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

  constructor( public router: Router) { 
    this.ref.on('value', resp => {
      this.pedidos = [];
      this.pedidos = snapshotToArray(resp);
    });
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
}
