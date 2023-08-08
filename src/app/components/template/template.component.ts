import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  @ViewChild('myForm', { static: false }) myForm!: NgForm;
  showMessage = false;
  formularioInvalido = false;

  formData: FormularioData = {
    cedula: '',
    nombre: '',
    fechaNacimiento: '',
    ciudad: ''
  };

  onSave() {
    if (this.myForm.valid) {
      this.showMessage = true;
      this.formularioInvalido = false;
    } else {
      this.showMessage = false;
      this.formularioInvalido = true;
    }
  }

  onCancel() {
    this.myForm.resetForm();
    this.showMessage = false;
    this.formularioInvalido = false;
  }
  
}
export interface FormularioData {
  cedula: string;
  nombre: string;
  fechaNacimiento: string;
  ciudad: string;
}
