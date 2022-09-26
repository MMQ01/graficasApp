import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;
  
  @Input() etiquetas: string[] = [];
 
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
 
  liminf: number = 5;
 
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
 
  @Input() barChartData: ChartData<'bar'> = {
    labels: [ 
      // '2020', '2021', '2022', '2023', '2024', '2025', '2026' 
    ],
    datasets: [
       { data: [ 15, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red' },
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#F763C4', hoverBackgroundColor: 'red' },
      // { data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'Series C', backgroundColor: '#D665E0', hoverBackgroundColor: 'red' },
    ]
  };
 
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
 
  constructor() { }
 
  ngOnInit(): void {
    // if( this.horizontal ) {
    //    this.barChartType = 'horizontalBar';
    // }
  }
  
}
