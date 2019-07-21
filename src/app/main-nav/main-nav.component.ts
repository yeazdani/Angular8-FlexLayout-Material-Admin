import { Component, ViewChild, HostListener, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDrawer, MatDialog } from "@angular/material";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  opened: boolean;
  showFiller = false;
  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) { }

  animal: string;
  name: string;


  @ViewChild('drawerStart', { static: true }) drawerStart: MatDrawer;
  @ViewChild('drawerEnd', { static: true }) drawerEnd: MatDrawer;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 500) {
      this.drawerStart.close();
      this.drawerEnd.close();
    }
    if (event.target.innerWidth > 500) {
      this.drawerStart.open();
    }
  }

}
