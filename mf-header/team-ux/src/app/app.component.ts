import { Component, OnInit } from '@angular/core';
import { ApuestasService } from './apuestas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  apuestas: any[] = [];

  constructor(private apuestasService: ApuestasService) { }

  ngOnInit() {
    this.apuestasService.getApuestas().subscribe(
      data => {
        this.apuestas = data;
      },
      error => {
        console.error('Error al obtener apuestas', error);
      }
    );
  }
}
