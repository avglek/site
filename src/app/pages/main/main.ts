import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Body } from '../../components/body/body';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-main',
  imports: [Header, Body, Footer],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
