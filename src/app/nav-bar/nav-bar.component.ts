import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
    public  logoAlign = 'display:inline-block; text-align:center;width:100%';

    if (isHandset$) {
      this.logoAlign = 'display:inline-block; text-align:center;width:100%';
    }
  constructor(private breakpointObserver: BreakpointObserver) {}
  
  }
