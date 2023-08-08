import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactivos',
  templateUrl: './reactivos.component.html',
  styleUrls: ['./reactivos.component.css']
  
})
export class ReactivosComponent {
  form: FormGroup;
  datosGuardados = false;
  formularioInvalido = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      ciudad: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.datosGuardados = true;
      this.formularioInvalido = false;
    } else {
      this.datosGuardados = false;
      this.formularioInvalido = true;
    }
  }
  

  onCancel() {
    this.form.reset();
    this.datosGuardados = false;
    this.formularioInvalido = false;

  }
}

