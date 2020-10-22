import { Component, OnInit, Input,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-audio-comps',
  templateUrl: './audio-comps.component.html',
  styleUrls: ['./audio-comps.component.css']
})
export class AudioCompsComponent implements OnInit {
  @ViewChild("yyaudio") audioTag: ElementRef;
  @ViewChild("yyplay") btnPlay: ElementRef;
  @ViewChild("yyPause") btnPause: ElementRef;
  @ViewChild("yyRangeBar") rangeTag: ElementRef;
  @Input() srcAudio: string; // decorate the property with @Input()
  constructor() { }
  ngAfterViewInit(){
    // Set max value when you know the duration
    this.audioTag.nativeElement.onloadedmetadata = () => 
      this.rangeTag.nativeElement.max = this.audioTag.nativeElement.duration;
    // update audio position
    this.rangeTag.nativeElement.onchange = () => 
      this.audioTag.nativeElement.currentTime = this.rangeTag.nativeElement.value;
    // update range input when currentTime updates
    this.audioTag.nativeElement.ontimeupdate = () => 
      this.rangeTag.nativeElement.value = this.audioTag.nativeElement.currentTime;
  }

  ngOnInit(): void {
    console.log("srcAudio :" + this.srcAudio);
  }
  yyPlayAudio(){
    this.audioTag.nativeElement.play();
    this.btnPlay.nativeElement.style.display = 'none';
    this.btnPause.nativeElement.style.display = 'inline-block';
  }
  yyPauseAudio(){
    this.audioTag.nativeElement.pause();
    this.btnPlay.nativeElement.style.display = 'inline-block';
    this.btnPause.nativeElement.style.display = 'none';
  }
}
