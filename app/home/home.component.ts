import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //standalone: true,
  // imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class HomeComponent {
user = [
  {
    image1: 'assets/Icons.jpg',
    description: 'Quisque ut convallis ipsum. Praesent a massa tincidunt, euismod turpis sed, rutrum arcu. Nulla eu maximus dui. Cras pulvinar fringilla mi, nec cursus sem ullamcorper at. Vestibulum ut ex ante. Nulla porta arcu a ex placerat commodo. Integer scelerisque sodales lectus eget laoreet. Fusce sit amet mi id risus condimentum commodo.',
    image2: '../../assets/Frame 611.jpg',
    date: '1/03/1991',
  },
  {
    image1: '../../assets/Icons.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. euismod turpis sed, rutrum arcu. Nulla eu maximus dui. Cras pulvinar fringilla mi, nec cursus sem ullamcorper at. Vestibulum ut ex ante. Nulla porta arcu a ex placerat commodo. Integer scelerisque sodales lectus eget laoreet. Fusce sit amet mi id risus condimentum commodo.',
    image2: '../../assets/Frame 611.jpg',
    date: '7/03/1991',
  },
  {
    image1: '../../assets/Icons.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut convallis ipsum dui. Cras pulvinar fringilla mi, nec cursus sem ullamcorper at. Vestibulum ut ex ante. Nulla porta arcu a ex placerat commodo. Integer scelerisque sodales lectus eget laoreet. Fusce sit amet mi id risus condimentum commodo.',
    image2: '../../assets/Frame 611.jpg',
    date: '18/03/1991',
  },
  {
    image1: '../../assets/Icons.jpg',
    description: 'consectetur adipiscing elit. Quisque ut convallis ipsum. Praesent a massa tincidunt, euismod turpis sed, rutrum arcu. Nulla eu maximus dui. Cras pulvinar fringilla mi, nec cursus sem ullamcorper at. Vestibulum ut ex ante. Nulla porta arcu a ex placerat commodo. Integer scelerisque sodales lectus eget laoreet. Fusce sit amet mi id risus condimentum commodo.',
    image2: '../../assets/Frame 611.jpg',
    date: '5/03/1991',
  },
  {
    image1: '../../assets/Icons.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa tincidunt, euismod turpis sed, rutrum arcu. Nulla eu maximus dui. Cras pulvinar fringilla mi, nec cursus sem ullamcorper at. Vestibulum ut ex ante. Nulla porta arcu a ex placerat commodo. Integer scelerisque sodales lectus eget laoreet. Fusce sit amet mi id risus condimentum commodo.',
    image2: '../../assets/Frame 611.jpg',
    date: '11/03/1991',
  },
  {
    image1: '../../assets/Icons.jpg',
    description: 'Quisque ut convallis ipsum. Praesent a massa tincidunt, euismod turpis sed, rutrum arcu. Nulla eu maximus dui. Cras pulvinar fringilla mi, nec cursus sem ullamcorper at. Vestibulum ut ex ante. Nulla porta arcu a ex placerat commodo. Integer scelerisque sodales lectus eget laoreet. Fusce sit amet mi id risus condimentum commodo.',
    image2: '../../assets/Frame 611.jpg',
    date: '16/06/1991',
  }
];
}
