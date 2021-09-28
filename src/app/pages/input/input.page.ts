import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage {
  public name = 'Diego';
  public usuario = {
    email: '',
    password: '',
  };

  public onSubmit(form: NgForm) {
    console.log(this.usuario);
    console.log(form);
  }
}
