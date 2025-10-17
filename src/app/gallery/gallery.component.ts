import { Component, AfterViewInit, Inject, PLATFORM_ID, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import paintings from '../../app/assets/data/paintings.json';
import { RouterModule } from '@angular/router';
let Masonry: any;

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements AfterViewInit {
  @ViewChild('masonryGrid') masonryGrid!: ElementRef;

  paintingList = paintings as any[];
  masonryOptions = { gutter: 16, horizontalOrder: true, fitWidth: true };
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async ngAfterViewInit() {
    if (this.isBrowser) {
      // Lazy-load Masonry library in the browser only
      Masonry = (await import('masonry-layout')).default;

      new Masonry(this.masonryGrid.nativeElement, {
        itemSelector: '.masonry-item',
        gutter: 16,
        fitWidth: true,
        horizontalOrder: true,
      });
      console.log('Masonry initialized');
    }
  }
}