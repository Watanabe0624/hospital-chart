import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { Chart, ChartType, ChartData, ChartOptions } from "chart.js";

@Component({
  selector: "app-draw-chart",
  templateUrl: "./draw-chart.component.html",
  styleUrls: ["./draw-chart.component.css"],
})
export class DrawChartComponent implements AfterViewInit, OnChanges {
  @ViewChild("myCanvas") myCanvas: ElementRef;
  @ViewChild("newDataset") newDataset: ElementRef;
  @Input() chartData: ChartData;
  @Input() chartOption: ChartOptions;
  @Input() chartType: ChartType | string;
  @Input() chart: Chart;

  ngAfterViewInit() {
    const canvas = this.myCanvas.nativeElement.getContext("2d");
    this.drawChart(canvas, this.chartData);
    console.log(this.chartOption);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.ChartOption) {
      this.chartOption = changes.ChartOption.currentValue;
    }
    //this.chart.updateChart();
  }

  drawChart(
    ctx:
      | string
      | CanvasRenderingContext2D
      | HTMLCanvasElement
      | ArrayLike<CanvasRenderingContext2D | HTMLCanvasElement>,
    dataset: ChartData
  ) {
    this.chart = new Chart(ctx, {
      type: this.chartType,
      data: dataset,
      options: this.chartOption,
    });
  }
}
