import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Change Detection on Push
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(private cdr:ChangeDetectorRef){}
  
  count = 0

  ngOnInit(){
    setInterval(()=>{
      this.count++
      console.log('Counter increment > ', this.count);
      // Mark for check
      // this.cdr.markForCheck();

    },1000)
  }

  reAsign(){
    this.count = this.count*9;
  }
  reAsignSame(){
    this.count = this.count;
  }

  markChanges(){
    this.cdr.markForCheck();
  }
  detectChanges(){
    this.cdr.detectChanges();
  }

  deatch(){
    this.cdr.detach();
  }

  reAtch(){
    this.cdr.reattach();
  }

}
