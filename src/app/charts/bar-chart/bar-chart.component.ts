import { Component, OnInit } from '@angular/core';


const SAMPLE_BARCHART_DATA: any[] = [
  { data : [ 34, 56, 67, 34, 44, 90, 98], label: 'Q3 Sales' },
  { data : [ 55, 33, 85, 23, 11, 53, 38], label: 'Q4 Sales' }
];


const SAMPLE_BARCHART_LABELS: any[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', ];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;  
  public barChartLegend: true = true;
  public barChartType:'bar' = 'bar';
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };


  ngOnInit(): void {
  }

}
