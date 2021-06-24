import { Component, OnInit, Output } from '@angular/core';
import { CountryI } from '../city/country.interface';
import { CountryServiceService } from '../country-service.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

 @Output() countries: CountryI[] = [];

  constructor(private countryservice: CountryServiceService) { }

  ngOnInit(): void {
   /*  this.countryservice.getAllCountries().subscribe(data => this.countries = data) */
    this.countryservice.getAllCountries().subscribe(data => this.countries = data.slice(0,10))
  }

 
}
