import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    
    @Output() serverCreated = new EventEmitter();
    @Output() bluePrintCreated = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    onServerAdd(serverName, serverContent) {
        this.serverCreated.emit({
            serverName: serverName,
            serverContent: serverContent
        });
    }

    onBlueprintAdd(serverName, serverContent) {
        this.bluePrintCreated.emit({
            bluePrintName: serverName,
            bluePrintContent: serverContent
        });
    }

}
