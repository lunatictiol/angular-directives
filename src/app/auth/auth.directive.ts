import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirevctive {
user = input.required<Permission >({alias:'appAuth'})
private authService = inject(AuthService)
private tempelateRef = inject(TemplateRef)
private viewContainerRef = inject(ViewContainerRef)
  constructor() {
    effect(()=>{
      if(this.authService.activePermission() === this.user()){
        console.log("SHOW")
      }else{
        console.log("DOnt SHOW")
      }
    })
   }

}
