import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone',
  imports: [],
  templateUrl: './phone.html',
  styleUrl: './phone.scss',
})
export class Phone {
  @Input() phone: string = '+7(921)888-88-88';
}
