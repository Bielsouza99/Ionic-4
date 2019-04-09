
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';



@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  sabores = [];
  saboresEmp = [
    'Carne Seca',
    'Camarão',
    'Camarão com Catupiry',
    'Filé Mignon c/ 4 queijos',
    'Filé Mignon c/ Cheddar',
    'Frango',
    'Frango c/ Palmito',
    'Frango c/ Catupiry',
    'Legumes',
    'Palmito',
    'Integral de Camarão',
    'Integral de frango',
    'Integral de Legumes'
  ];

  saboresEsc = [
    'Carne Seca',
    'Linguiça Blumenau',
    'Camarão',
    'Bolonhesa'
  ];

  ref = firebase.database().ref('pedidos/');
  pedidoForm: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, public router: Router) {
    this.pedidoForm = this.formBuilder.group({
      'tipo': [null, Validators.required],
      'sabor': [null, Validators.required],
      'tamanho': [null, Validators.required],
      'data_entrega': [null, Validators.required]
    });
   }

   salvar() {
     const novoPedido = firebase.database().ref('pedidos/').push();
     novoPedido.set(this.pedidoForm.value);
     this.router.navigate(['/detalhes/'+novoPedido.key]);
   }

  ngOnInit() {
  }

}
