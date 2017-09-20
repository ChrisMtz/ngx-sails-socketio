import { Component, OnInit } from "@angular/core";
import { Sails } from "ngx-sails-socketio";
import { JobsService } from "./services/jobs.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

    constructor(sails: Sails, private jobs: JobsService) {
        sails.connect();
    }

    ngOnInit() {
        const a = this.jobs.getActiveJobs();

        a.then(data => {
            console.log("🎉🎉🎉 IT WORKS!!! 🎉🎉🎉", "", "", "");
            console.log(data);
        });
    }
}
