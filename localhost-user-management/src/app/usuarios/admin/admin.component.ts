import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../models/Cliente.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit  {

  public clientes: Cliente[] = [];
  public form: FormGroup;
  public admin = true;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required
      ])],
      senha: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(12),
        Validators.required
      ])],
    });

    this.load();
  }

  ngOnInit(): void {
  }

  add(){
    const id = this.clientes.length + 1;
    const nome = this.form.controls['nome'].value;
    const email = this.form.controls['email'].value;
    const senha = this.form.controls['senha'].value;
    this.clientes.push(new Cliente(id, nome, email, senha, false));
    this.save();
    this.clear();
  }

  remove(cliente: Cliente){
    const index = this.clientes.indexOf(cliente);
    if(index !== -1){
      this.clientes.splice(index, 1);
    }
    this.save();
  }

  clear(){
    this.form.reset();
  }

  save(){
    const data = JSON.stringify(this.clientes);
    localStorage.setItem('clientes', data);
  }

  load(){
    const data = localStorage.getItem('clientes');
    if(data){
      this.clientes = JSON.parse(data);
    }else{
      this.clientes = [];
    }
  }

  aprovar(clientes: Cliente){
    clientes.clienteAprovado = true;
    this.save();
  }

  bloquear(clientes: Cliente){
    clientes.clienteAprovado = false;
    this.save();
  }

}
