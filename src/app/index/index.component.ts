import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  
  arrCarta: any[] = [
    { nombre: "Chuleton" ,ingrediente:" 1 kg carne madurada 60 dias" , precio: "80" },
    { nombre: "Lubina",ingrediente: "Lubina fresca" , precio:"24" },
    { nombre: "Salmon" ,ingrediente: "Salmon al grill" , precio:"28" },
    { nombre: "Ravioles" ,ingrediente: " Rellenos de espinacas", precio: "26"},
    { nombre: "Steak Tartar" ,ingrediente:" Carne de buey" , precio:"30" },
    { nombre: " Pollo" ,ingrediente: " Con patatas", precio: " 26"},
   
  ];
}
