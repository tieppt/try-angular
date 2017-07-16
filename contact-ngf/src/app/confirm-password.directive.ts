import { Directive, forwardRef, Input, OnChanges, Provider } from '@angular/core';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { validate } from 'codelyzer/walkerFactory/walkerFn';

export const CONFIRM_PASSWORD_VALIDATOR: Provider = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => ConfirmPasswordDirective),
  multi: true
};

@Directive({
  selector: '[ngModelGroup][confpass]',
  providers: [CONFIRM_PASSWORD_VALIDATOR],
  host: {'[attr.confpass]': 'confpass ? "" : null'}
})
export class ConfirmPasswordDirective implements Validator, OnChanges {
  private _cfPassword: boolean;

  private _control: AbstractControl;
  @Input()
  get confpass() {
    return this._cfPassword;
  }
  set confpass(value: boolean) {
    this._cfPassword = value != null && value !== false;
    if (this._onChange) this._onChange();
  }
  constructor() { }
  private _onChange() {
    if (this._control) this._control.updateValueAndValidity();
  }
  ngOnChanges(changes: SimpleChanges) {
    if ('confpass' in changes) {
      if (this._onChange) this._onChange();
    }
  }

  validate(c: AbstractControl) {
    this._control = c;
    const v = c.value;
    if (this.confpass) {
      if (v.password == v.confirmPassword) {
        return null;
      } else {
        return {
          confirmPassword: {
            notMatch: true
          }
        };
      }
    }
    return null;
  }
}
