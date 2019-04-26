import { Directive,ElementRef, Input } from '@angular/core';

@Directive({
    
    selector: '[highlight]'
})
export class HighLightDirective{

    @Input() highlight
    constructor(private element: ElementRef){
        console.log('this is the element we got', this.element);
        this.element.nativeElement.style.color='green';
        this.element.nativeElement.style.class='btn btn-warning'
    }

    ngOnInit(){
        this.element.nativeElement.style.color=this.highlight;
    }
}