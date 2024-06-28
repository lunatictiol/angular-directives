import { Directive } from "@angular/core";

@Directive({
    selector:'a[appSafeLink]',
    standalone:true
})
export class SafeLinkDirectiver{
    constructor(){
        console.log("directive")
    }
}