import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector:'a[appSafeLink]',
    standalone:true,
    host:{
        '(click)':'onConfirmLeave($event)'
    }
})
export class SafeLinkDirectiver{
    quermParam = input("myapp",{alias:'appSafeLink'})
    private hostElemetRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)
    constructor(){
        console.log("directive")
    }

    onConfirmLeave(event:MouseEvent){


        const wantsToLeave = window.confirm("Do you want to leave?");
        if(wantsToLeave){
            const address =this.hostElemetRef.nativeElement.href;
            
            this.hostElemetRef.nativeElement.href= address +'?from=' +this.quermParam()
            return;
        } 
        event.preventDefault();

    }
}