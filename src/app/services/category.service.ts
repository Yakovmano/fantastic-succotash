import { Injectable } from '@angular/core';
import {Category} from '../models/Category';
import Language from '../models/Language';
import { TranslatedWord } from '../models/translatedword';
import { CategoryNotFoundError } from '../errors';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories = new Map<number, Category>();
  nextId = 0;

  constructor() {
    // INITIAL DUMMY DATA
    const categoriesString = localStorage.getItem('categories')
    if(!categoriesString) {
      this.categories.set(1, new Category(1,'colors', Language.ENGLISH, Language.HEBREW))
      this.categories.set(2, new Category(2,'animals',  Language.ENGLISH, Language.HEBREW))
      this.categories.set(3, new Category(3,'numbers', Language.ENGLISH, Language.HEBREW))
 
      this.categories.get(1)!.words.push(new TranslatedWord("yellow", "צהוב"));
      this.categories.get(1)!.words.push(new TranslatedWord("green", "ירוק"));
      
      this.categories.get(1)!.words.push(new TranslatedWord("blue", "כחול"));
      this.categories.get(2)!.words.push(new TranslatedWord("dog", "כלב"));
      this.categories.get(2)!.words.push(new TranslatedWord("cat", "חתול"));
      this.categories.get(2)!.words.push(new TranslatedWord("bird", "ציפור"));
      
      this.categories.get(3)!.words.push(new TranslatedWord("one", "אחת"));
      this.categories.get(3)!.words.push(new TranslatedWord("two", "שתים"));
      this.categories.get(3)!.words.push(new TranslatedWord("three", "שלוש"));

      this.saveToLocalStorage()

    } else { 

        // READ FROM LOCAL STORAGE
        const categories : Map<number ,Category>  = JSON.parse(categoriesString)
        for(var [categoryId, category] of Object.entries(categories)) {
          const categoryAsClass = new Category(+categoryId,category.name, category.origin, category.target)
          categoryAsClass.words = category.words
          this.categories.set(+categoryId, categoryAsClass)
        }
    }



   
  }


  saveToLocalStorage() {
    localStorage.setItem('categories', JSON.stringify(
      Object.fromEntries(this.categories.entries())))
  }
  List(): Category[] {
    return Array.from(this.categories.values());
  }

  get(id: number): Category {
    const category = this.categories.get(id)
    if(!category)
      throw new CategoryNotFoundError(id)
    return category
  }

  delete(id: number): void {
    if(this.categories.delete(id)) {
      this.saveToLocalStorage()
    } else {
      throw new CategoryNotFoundError(id)
    }
  }
  
  update(category:Category): void{
    if(this.categories.has(category.id)){
      this.categories.set(category.id,category);
      this.saveToLocalStorage()
    } else {
      throw new CategoryNotFoundError(category.id)
    }
  }

   add(newCategoryData: Category) : void {
      newCategoryData.id = this.nextId;
      
      this.categories.set(this.nextId, newCategoryData);
      this.nextId++;
      this.saveToLocalStorage()
    }
  }

