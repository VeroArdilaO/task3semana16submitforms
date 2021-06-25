import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  

  control = new FormControl('', [Validators.required]);
  control2 = new FormControl('', [Validators.required]);

  constructor() { 

    this.control.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      console.log(value);
    })
    this.control2.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      console.log(value);
    })

  }

  ngOnInit(): void {
  }

  getControl(event: Event){
    event.preventDefault();
    console.log(`Nombre del País ${this.control.value}, Capital  ${this.control2.value}`)
    this.control = new FormControl(" ")
    this.control2 = new FormControl(" ")
  }

}
