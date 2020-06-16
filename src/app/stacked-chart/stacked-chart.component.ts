import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
} from "@angular/core";
import { Chart, ChartType, ChartData, ChartOptions } from "chart.js";
import { HOSPITALDATA } from "../hospitalData/data";

@Component({
  selector: "app-stacked-chart",
  templateUrl: "./stacked-chart.component.html",
  styleUrls: ["./stacked-chart.component.css"],
})
export class StackedChartComponent implements OnInit, AfterViewInit {
  @ViewChild("myCanvas") myCanvas: ElementRef;
  @ViewChild("newDataset") newDataset: ElementRef;

  public hospitaldata = HOSPITALDATA;
  res1s: Array<number> = [];
  res2s: Array<number> = [];

  type: ChartType | string = "bar";
  public data: ChartData = {
    labels: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    datasets: [
      {
        label: "res1",
        data: this.res1s,
        backgroundColor: "rgb(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "res2",
        data: this.res2s,
        backgroundColor: "rgb(255, 159, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  scale = {
    xAxes: [
      {
        stacked: true,
      },
    ],
    yAxes: [
      {
        stacked: true,
        ticks: {
          min: 0,
          max: 60000,
        },
      },
    ],
  };
  options: ChartOptions = {
    responsive: false,
    scales: this.scale,
  };
  public chart: Chart;

  ngAfterViewInit() {
    const canvas = this.myCanvas.nativeElement.getContext("2d");
    this.drawChart(canvas, this.data);
  }

  /*constructor() {
    let items = this.hospitaldata.slice(0, 12);
    for (let item of items) {
      this.res1s.push(item.res1);
      this.res2s.push(item.res2);
    }
    console.log(this.res1s);
    console.log(this.res2s);
  }*/

  ngOnInit() {
    let items = this.hospitaldata.slice(0, 12);
    for (let item of items) {
      this.res1s.push(item.res1);
      this.res2s.push(item.res2);
    }
    console.log(this.res1s);
    console.log(this.res2s);
  }

  tprint(x: number): void {
    console.log(x);
  }

  changeChart(): void {
    if (this.chart.options.scales.xAxes[0].stacked === true) {
      this.chart.options.scales = {
        xAxes: [
          {
            stacked: false,
          },
        ],
        yAxes: [
          {
            stacked: false,
            ticks: {
              min: 0,
              max: 60000,
            },
          },
        ],
      };
    } else {
      this.chart.options.scales = {
        xAxes: [
          {
            stacked: true,
          },
        ],
        yAxes: [
          {
            stacked: true,
            ticks: {
              min: 0,
              max: 60000,
            },
          },
        ],
      };
    }
    this.chart.update();
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
      type: this.type,
      data: dataset,
      options: this.options,
    });
  }
}
