import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Property } from '../../models/property.model';
import { PropertyService } from '../../services/property.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
    imports: [
    CommonModule,
  ],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit, OnDestroy {

  @ViewChild('heroVideo', { static: false }) heroVideoRef!: ElementRef<HTMLVideoElement>;

  property: Property | null = null;
  heroImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop';
  availableUnits = 0;

  videoList: string[] = [
    'assets/videos/Timeline123.mp4',
    'assets/videos/Dji0032123.mp4'
  ];
  currentVideoIndex = 0;
  currentVideo = this.videoList[0];
  private videoInterval: any;

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.getProperty().subscribe(property => {
      this.property = property;
      this.availableUnits = property.availableUnits.filter(unit => unit.availability === 'Available').length;
      const heroImg = property.images.find(img => img.isHero);
      if (heroImg) {
        this.heroImage = heroImg.url;
      }
    });

    // Start video rotation
    this.startVideoRotation();
  }

  ngOnDestroy(): void {
    // Clean up interval when component is destroyed
    if (this.videoInterval) {
      clearInterval(this.videoInterval);
    }
  }

  private startVideoRotation(): void {
    this.videoInterval = setInterval(() => {
      this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videoList.length;
      this.currentVideo = this.videoList[this.currentVideoIndex];
      
      // Force the video to play after changing source
      setTimeout(() => {
        if (this.heroVideoRef?.nativeElement) {
          this.heroVideoRef.nativeElement.load();
          this.heroVideoRef.nativeElement.play().catch(error => {
            console.log('Video play failed:', error);
          });
        }
      }, 100);
    }, 5000); // Switch every 5 seconds
  }
}