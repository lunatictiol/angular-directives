import { Directive, input } from "@angular/core";

@Directive({
    selector:'a[appSafeLink]',
    standalone:true,
    host:{
        '(click)':'onConfirmLeave($event)'
    }
})
export class SafeLinkDirectiver{
    quermParam = input("myapp",{alias:'appSafeLink'})
    constructor(){
        console.log("directive")
    }

    onConfirmLeave(event:MouseEvent){


        const wantsToLeave = window.confirm("Do you want to leave?");
        if(wantsToLeave){
            const address =(event.target as HTMLAnchorElement).href;
            
            (event.target as HTMLAnchorElement).href= address +'?from=' +this.quermParam()
            return;
        } 
        event.preventDefault();

    }
}