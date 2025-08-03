import {  Component, input } from '@angular/core';

@Component({
  selector: 'git-list-item',
  imports: [],
  templateUrl: './git-list-item.component.html',
})
export class GitListItemComponent { 
  imageUrl = input.required<string>()
}
