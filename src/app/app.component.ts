import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title, private metaService: Meta) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data['title']) {
            const data = Object.assign({}, child.snapshot.data)
            return data;
          } else {
            return null;
          }
        }
        return null;
      })
    ).subscribe((data: any) => {
      if (data) {
        this.titleService.setTitle(data.title + ' - ' + data.description);
        if (data.description) {
          this.metaService.updateTag({ name: 'description', content: data.description });
          if (data.keywords) {
            this.metaService.updateTag({ name: 'keywords', content: data.keywords });
          }
        }
      }
    });
  }

}
