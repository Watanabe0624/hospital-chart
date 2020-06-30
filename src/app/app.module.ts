import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StackedChartComponent } from "./stacked-chart/stacked-chart.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DrawChartComponent } from "./draw-chart/draw-chart.component";
import { MatButtonModule } from "@angular/material/button";
import { ChangeChartTypeComponent } from './change-chart-type/change-chart-type.component';

@NgModule({
  declarations: [AppComponent, StackedChartComponent, DrawChartComponent, ChangeChartTypeComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
