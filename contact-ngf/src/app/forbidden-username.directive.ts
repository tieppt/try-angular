
import { Directive, forwardRef, Input, Provider } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

export const FORBIDDEN_USERNAME_VALIDATOR: Provider = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => ForbiddenUsernameDirective),
  multi: true
};

@Directive({
  selector: '[forbiddenUsername][ngModel]',
  providers: [
    FORBIDDEN_USERNAME_VALIDATOR
  ]
})
export class ForbiddenUsernameDirective implements Validator {
  private _users = [];
  private _onChange: Function;
  @Input()
  get forbiddenUsername() {
    return this._users;
  }

  set forbiddenUsername(value: string | Array<string> | null) {
    if (typeof value === 'string') {
      this._users = value.split(' ');
    } else if (Array.isArray(value)) {
      this._users = value;
    } else {
      this._users = [];
    }
    if (this._onChange) this._onChange();
  }
  constructor() { }

  validate(c: AbstractControl) {
    return this._users.includes(c.value) ? {
      invalidusername: true
    } : null;
  }
  registerOnValidatorChange(fn: () => void): void {
    this._onChange = fn;
  }
}
