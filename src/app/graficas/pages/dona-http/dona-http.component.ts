import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {
  constructor(private GraficasService:GraficasService) { }
 
  ngOnInit(): void {
    this.GraficasService.getusuariosRedesSociales().subscribe(
      resp=>{
        console.log(resp);
        const labels=Object.keys(resp)
        const datos=Object.values(resp)
        this.doughnutChartData={
          labels:Object.keys(resp),
          datasets:[{data:Object.values(resp)}]
        }
      }
    )
  }
 
  public doughnutChartLabels: string[] =  []/* [ 'Dascargas', 'Ventas en tienda', 'Venta online' ] */;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: []
      },
    ]
  };
 
  public doughnutChartType: ChartType = 'doughnut';
}
