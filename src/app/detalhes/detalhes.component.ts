import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  pedidos = [];
  ref = firebase.database().ref('pedidos/');

  constructor( public router: Router) {
    this.ref.on('value', resp => {
      this.pedidos = [];
      this.pedidos = snapshotToArray(resp);
    });
  }

  ngOnInit() {}
}

export const snapshotToArray = snapshot => {
  const returnArr = [];

  snapshot.forEach(childSnapshot => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
