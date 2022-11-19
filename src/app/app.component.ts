import { Component } from '@angular/core';

interface categorys {
  name: string;
  subCategorys?: categorys[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Mk que Crack';

  arrCategorias: categorys[] = [
    {
      name: 'Programación',
      subCategorys: [
        {
          name: 'java',
        },
        {
          name: 'php',
        },
      ],
    },
    {
      name: 'Inglés',
      subCategorys: [
        {
          name: 'A2',
        },
        {
          name: 'A1',
        },
      ],
    },
  ];
  veryficat: String = '';
  styleSelec = {
    // c: '',
    b: '',
  };
  mostrarSubCat(n: categorys) {
    if (this.veryficat === '') {
      this.veryficat = n.name;
      // this.styleSelec.c = 'category-content-clic';
      this.styleSelec.b = 'selected-category-clic';
    } else if (this.veryficat === n.name) {
      this.veryficat = "";
      // this.styleSelec.c = '';
      this.styleSelec.b = '';
    }else{
      this.veryficat = n.name;
    }
  }
}
