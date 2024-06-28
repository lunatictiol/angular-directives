import { Directive } from "@angular/core";

@Directive({
    selector:'a[appSafeLink]',
    standalone:true,
    host:{
        '(click)':'onConfirmLeave($event)'
    }
})
export class SafeLinkDirectiver{
    constructor(){
        console.log("directive")
    }

    onConfirmLeave(event:MouseEvent){
        const wantsToLeave = window.confirm("Do you want to leave?");
        if(wantsToLeave){
            return;
        } 
        event.preventDefault();

    }
}