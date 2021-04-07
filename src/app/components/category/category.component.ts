import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category = { categoryId: 0, categoryName: '' };
  clearCategory: Category = { categoryId: 0, categoryName: '' };
  apiUrl: string = 'https://localhost:44384/api/categories/getall';
  dataLoaded: boolean = false;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
      this.dataLoaded = true;
    });
  }

  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item list-group-item-dark';
    } else {
      return 'list-group-item';
    }
  }
  getClearCategoryClass() {
    if (this.currentCategory.categoryId == 0) {
      return 'list-group-item list-group-item-dark';
    } return 'list-group-item';
  }
  clearCurrentCategory() {
    this.currentCategory.categoryId == 0;
  }
}
