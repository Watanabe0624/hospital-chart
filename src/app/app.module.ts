import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StackedChartComponent } from "./stacked-chart/stacked-chart.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DrawChartComponent } from "./draw-chart/draw-chart.component";

@NgModule({
  declarations: [AppComponent, StackedChartComponent, DrawChartComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
