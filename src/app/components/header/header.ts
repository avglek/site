import { Component } from '@angular/core';
import { Title } from '../../library/components/title/title';
import { Menu } from '../menu/menu';
import { Phone } from '../../library/components/phone/phone';

@Component({
  selector: 'app-header',
  imports: [Title, Menu, Phone],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
