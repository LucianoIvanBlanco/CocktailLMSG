import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

  titulo = "The best cocktails"
  margaritas:any;

  constructor(private Service: ApiService){ }

  ngOnInit(): void {
    this.Service.getMargaritas().subscribe(data => {this.margaritas = data.drinks })
  }

}
