import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
   
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    // DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2023', '2024', '2025', '2026', '2027' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor:'#6287E3', hoverBackgroundColor:'#6287E3' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' , backgroundColor:'#78BFFA', hoverBackgroundColor:'#78BFFA'},
      { data: [ 6, 343, 46, 16, 33, 25, 66 ], label: 'Series C' , backgroundColor:'#62CBE3' ,hoverBackgroundColor:'#62CBE3'},
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    ];
    this.barChartData.datasets[1].data = [
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    ];
    this.barChartData.datasets[2].data = [
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    Math.round(Math.random()*100),
    ];

    this.chart?.update();
  }
  
}
