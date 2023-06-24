import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  static arrPlatos: any;
  static menuForm(arg0: {}): FormGroup<any> {
    throw new Error('Method not implemented.');
  }

  
  menuForm: FormGroup

  isError = false

  arrPlatos: any[] = []

  constructor(private fb: FormBuilder) {
    this.menuForm = this.fb.group({
      'plato': ['', Validators.required],
      'ingrediente': ['', Validators.required],
      'precio': ['', Validators.required]
  })
}

  sendData() {
    let platoName = this.menuForm.value.plato
    let platoIngrediente = this.menuForm.value.ingrediente
    let platoPrecio = this.menuForm.value.precio

    if (platoIngrediente.length == 0 || platoIngrediente.length == 0|| platoPrecio.length == 0) {
      this.isError = true
      return
    }else {
      this.isError = false
    }

    this.arrPlatos.push({ id: this.arrPlatos.length, plato: platoName, ingrediente: platoIngrediente, precio: platoPrecio })

    this.menuForm.patchValue({ plato: "", ingrediente: "", precio: "" })
  }

  deletePlato(id: number) {
    this.arrPlatos = this.arrPlatos.filter(g => g.id != id)
  }
  
}


