import { Component, OnInit, HostListener, ViewChild } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { EventService } from "src/app/event.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MdbTableDirective } from "angular-bootstrap-md";

@Component({
  selector: "app-event-details",
  templateUrl: "./event-details.component.html",
  styleUrls: ["./event-details.component.scss"]
})
export class EventDetailsComponent implements OnInit {
  id: string;

  public checkboxGroupForm: FormGroup;

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  elements: any = [];
  headElements = ["ID", "First", "Last", "Handle"];

  searchText: string = "";
  previous: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private formBuilder: FormBuilder
  ) {}

  @HostListener("input") oninput() {
    this.searchItems();
  }

  ngOnInit() {
    // this.eventService.getEventById()

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => (this.id = params.get("id")))
    );

    console.log("passed id", this.id);

    for (let i = 1; i <= 10; i++) {
      this.elements.push({
        id: i.toString(),
        first: "Wpis " + i,
        last: "Last " + i,
        handle: "Handle " + i
      });
    }

    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }

  model: any = {};

  value = "na";

  public options = [
    { value: "on", id: "On" },
    { value: "na", id: "NA" },
    { value: "off", id: "Off" }
  ];

  onSubmit() {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.model));
  }

  onSelectionChange(entry) {
    // debugger;
    this.value = entry;
  }
}
