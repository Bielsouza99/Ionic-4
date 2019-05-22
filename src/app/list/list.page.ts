import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  pedidos = [];
  ref = firebase.database().ref('pedidos/');

  constructor( public router: Router) {
    this.ref.on('value', resp => {
      this.pedidos = [];
      this.pedidos = snapshotToArray(resp);
    });
  }

  async apagar(key) {
    firebase.database().ref('pedidos/'+key).remove();
  }

  ngOnInit() {
  }

}



export const snapshotToArray = snapshot => {
  const returnArr = [];

  snapshot.forEach(childSnapshot => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });
  return returnArr;
}