import {Component, OnInit} from '@angular/core';
import {Vegetable} from '../../class/vegetable';
import { Fruit } from 'src/app/class/fruit';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  title: string;
  vegetables: Vegetable[]=[];
  fruits: Fruit[]=[];
  newVegetable: Vegetable;
  newFruit: Fruit;

  constructor() {
    this.title = 'Listes et items';
    this.loadFruitList();
    this.loadVegeList();
    this.newVegetable = new Vegetable('', 0);
    this.newFruit= new Fruit('', 0);
  }
  ngOnInit(): void {

  }
  loadVegeList() {

    this.vegetables.push(new Vegetable('Poireau', 12.9));
    this.vegetables.push(new Vegetable('Carotte', 10.20));
    this.vegetables.push(new Vegetable('Chou', 2.9));
    this.vegetables.push(new Vegetable('Haricots verts', 6.90));
  }
  loadFruitList() {
    this.fruits.push(new Fruit('Citron', 10.20));
    this.fruits.push(new Fruit('Orange', 7.99));
    this.fruits.push(new Fruit('Ananas', 5.60));
    this.fruits.push(new Fruit('Noix de coco', 14.58));
  }

  addVegetable() {
    this.vegetables.push(this.newVegetable);
    this.newVegetable = new Vegetable('', 0);
  }

  deleteVegetable(i: number) {
    this.vegetables.splice(i, 1);
  }
  addFruit() {
    this.fruits.push(this.newFruit);
    this.newFruit = new Fruit('', 0);
    }

  deleteFruit(i: number) {
    this.fruits.splice(i, 1);
  }
}
