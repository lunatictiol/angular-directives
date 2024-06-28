import { Component } from '@angular/core';
import { SafeLinkDirectiver } from '../safe-link.dirctive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports:[SafeLinkDirectiver]
})
export class LearningResourcesComponent {}
