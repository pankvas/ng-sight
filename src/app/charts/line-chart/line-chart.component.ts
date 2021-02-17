import { LINE_CHART_COLORS } from './../../shared/chart.colors';
import { Component, OnInit } from '@angular/core';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data : [ 34, 56, 67, 34, 44, 90, 98], label: 'Sentiment Analysis' },
  { data : [ 22, 56, 67, 34, 44, 76, 98], label: 'Image Recognition' },
  { data : [ 55, 33, 85, 23, 11, 53, 38], label: 'Forecasting' }
];

const LINE_CHART_LABELS: any[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public lineChartData = LINE_CHART_SAMPLE_DATA;
  public lineChartLabels = LINE_CHART_LABELS;  
  public lineChartLegend: true = true;
  public lineChartType:'line' = 'line';
  public lineChartColors = LINE_CHART_COLORS;
  public lineChartOptions: any = {
    responsive: true
  };


}
