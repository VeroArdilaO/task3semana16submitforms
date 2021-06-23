import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  form = {
    nombre:" ",
    capital: " "
  };
  constructor() { }

  ngOnInit(): void {
  }

  miFuncion() {

    console.log(`Nombre del país ${this.form.nombre} capital ${this.form.capital}`)
  }
}
