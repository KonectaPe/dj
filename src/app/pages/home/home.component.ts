import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SocialComponent } from "../../components/social/social.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, SocialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
