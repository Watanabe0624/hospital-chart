import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-change-chart-type",
  templateUrl: "./change-chart-type.component.html",
  styleUrls: ["./change-chart-type.component.css"],
})
export class ChangeChartTypeComponent {
  @Output() changed = new EventEmitter();

  changeChartType(): void {
    this.changed.emit();
  }
}
