import { Component } from '@angular/core';

interface Image {
  id: number;
  url: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css'],
  imports: []
})
export class GalleryComponent {
  currentIndex = 0;
  showControls = false;

  images: Image[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      alt: 'Modern office lobby with seating area',
      title: 'Welcoming Lobby'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Conference room with large windows',
      title: 'Spacious Conference Room'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      alt: 'Open office workspace',
      title: 'Open Floor Plan'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Building exterior view',
      title: 'Exterior View'
    }
  ];

  prevSlide(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.images.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }

  nextSlide(): void {
    const isLastSlide = this.currentIndex === this.images.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }



}
