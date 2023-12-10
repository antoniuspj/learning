import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Nasi Goreng', 'Makanan khas Indonesia yang berasal dari nasi.', 'https://img.kurio.network/77GSRizkh7ZeT0cp7P8j1JG0ziY=/440x440/filters:quality(80):watermark(https://kurio-img.kurioapps.com/21/04/15/df401e7c-7b29-428a-9a16-aad1fafe07a1.png,0,5p,0,22)/https://kurio-img.kurioapps.com/20/10/10/a7e9eaa0-1c22-42b0-a11f-0a5ad1d30126.jpeg'),
    new Recipe('Mie Ayam', 'Merupakan salah satu makanan yang banyak diminati.', 'https://www.masakapahariini.com/wp-content/uploads/2019/08/mie-ayam-kecap.jpg')
  ];
}
