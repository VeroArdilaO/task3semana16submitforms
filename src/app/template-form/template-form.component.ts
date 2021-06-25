import { Component, OnInit,  } from '@angular/core';
import { CountryI } from '../city/country.interface';
import { CountryServiceService } from '../country-service.service';



@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

   countries: CountryI[] = [];

 /*  @Output() change: EventEmitter<any> = new EventEmitter<any>(); */

   form = {
    name:"Nombre del País a editar",
    capital: "Nombre de la capital a editar"
  };
  constructor(private countryservice: CountryServiceService) { }

  ngOnInit(): void {
    this.countryservice.getAllCountries().subscribe(data => this.countries = data.slice(0,5))
    this.form.name = "", this.form.capital = ""
  
  }

  miFuncion(): void {
  
      console.log(`Nombre del país ${this.form.name} capital ${this.form.capital}`)
      const newName =  this.form.name 
      const newCapital = ' Capital ' + this.form.capital 
      this.form.capital = this.form.capital
      this.countries.push({name: newName, capital:newCapital})
      this.form.name = " ",
      this.form.capital = " "
  } 
}
