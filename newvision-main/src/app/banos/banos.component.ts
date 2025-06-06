import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-banos',
  imports: [RouterModule],
  templateUrl: './banos.component.html',
  styleUrl: './banos.component.css',
  standalone: true,

})
export class BanosComponent {
  constructor() { }

  ngOnInit(): void {
    this.checkVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
      const rect = category.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        category.classList.add('visible');
      }
    });

    const imageContainers = document.querySelectorAll('.image-container');
    imageContainers.forEach(container => {
      const rect = container.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        container.classList.add('visible');
      }
    });
  }
}
