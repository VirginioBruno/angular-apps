import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

interface Color {
    background: string,
    color: string
}

@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {
    @Input() defaultColor: Color = {
        background: 'transparent',
        color: 'black'
    };

    @Input() highlightColor: Color = {
        background: 'black',
        color: 'white'
    };

    @HostBinding('style.backgroundColor') backgroundColor: string;
    @HostBinding('style.color') textColor: string;
    
    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.backgroundColor = this.defaultColor.background;
        this.textColor = this.defaultColor.color;
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        //WITH RENDERER (NOT THE WRONG WAY)
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
        //this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');

        //WITH HOST BINDING (ANOTHER OPTION TO CHANGE PROPERTIES)
        this.backgroundColor = this.highlightColor.background;
        this.textColor = this.highlightColor.color;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        //WITH RENDERER (NOT THE WRONG WAY)
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        //this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');

        //WITH HOST BINDING (ANOTHER OPTION TO CHANGE PROPERTIES)
        this.backgroundColor = this.defaultColor.background;
        this.textColor = this.defaultColor.color;
    }
}