import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { CockpitComponent } from '../cockpit/cockpit.component';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
    @Input('srvElement') element: {type: string, name: string, content: string};

    constructor() { }

    ngOnInit() {
    }

}
