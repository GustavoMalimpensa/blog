import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('slickCarousel', { static: false }) slickCarousel!: SlickCarouselComponent;

  portifolio1 = './assets/img/portifolio/portifolio.png';
  pcmb = './assets/img/pcmb/pcmb.png';
  nacio = './assets/img/nacionalidade/nacio.png';
  remember = './assets/img/remember/remember.png';

  projects = [
    {
      image: this.portifolio1,
      title: 'First Website',
      description: 'Feito apenas com HTML, CSS e JavaScript puro.',
      url: 'https://github.com/GustavoMalimpensa/first-wib-site'
    },
    {
      image: this.portifolio1,
      title: 'First Website',
      description: 'Feito apenas com HTML, CSS e JavaScript puro.',
      url: 'https://github.com/GustavoMalimpensa/first-wib-site'
    },
    {
      image: this.portifolio1,
      title: 'First Website',
      description: 'Feito apenas com HTML, CSS e JavaScript puro.',
      url: 'https://github.com/GustavoMalimpensa/first-wib-site'
    },
    {
      image: this.portifolio1,
      title: 'First Website',
      description: 'Feito apenas com HTML, CSS e JavaScript puro.',
      url: 'https://github.com/GustavoMalimpensa/first-wib-site'
    },
    {
      image: this.pcmb,
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2',
      url: 'URL_DO_REPOSITORIO_2'
    },
    {
      image: this.nacio,
      title: 'Projeto 3',
      description: 'Descrição do Projeto 3',
      url: 'URL_DO_REPOSITORIO_3'
    },
    {
      image: this.remember,
      title: 'Projeto 4',
      description: 'Descrição do Projeto 4',
      url: 'URL_DO_REPOSITORIO_4'
    },
    {
      image: this.nacio,
      title: 'Projeto 5',
      description: 'Descrição do Projeto 5',
      url: 'URL_DO_REPOSITORIO_5'
    },
    {
      image: this.remember,
      title: 'Projeto 6',
      description: 'Descrição do Projeto 6',
      url: 'URL_DO_REPOSITORIO_6'
    },
    // Adicione mais projetos aqui
  ];

  numVisibleCards = 5;
  visibleProjects: any[] = [];
  currentIndex = 0;

  slickCarouselConfig = {
    slidesToShow: this.numVisibleCards,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  ngAfterViewInit() {
    this.updateVisibleProjects();
  }

  get showLeftArrow(): boolean {
    return this.currentIndex > 0;
  }

  get showRightArrow(): boolean {
    return this.currentIndex < this.projects.length - this.numVisibleCards;
  }

  scrollCards(direction: string) {
    if (direction === 'left') {
      this.currentIndex--;
    } else if (direction === 'right') {
      this.currentIndex++;
    }
    this.updateVisibleProjects();
    this.slickCarousel.slickGoTo(this.currentIndex);
  }

  updateVisibleProjects() {
    const startIndex = this.currentIndex;
    const endIndex = startIndex + this.numVisibleCards;
    this.visibleProjects = this.projects.slice(startIndex, endIndex);
  }
}
