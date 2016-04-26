import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[nglPillImage]',
})
export class NglPillImage {

  @HostBinding('class.slds-pill__icon') applyClass = true;
}
