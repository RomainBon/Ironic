import { Component, OnInit } from '@angular/core';
import { Vegetable } from '../class/vegetable';
import { Fruit } from '../class/fruit';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  name :any="Romain";
  vegetable:Vegetable[]=[];
  fruit:Fruit[]=[];
  newVegetable:Vegetable;

  constructor(){
    this.loadVegeList();
    this.loadFruitList();
    this.newVegetable = new Vegetable ('',0);
  }
  ngOnInit():void{}
  loadVegeList(){
    this.vegetable.push(new Vegetable('Poireaux',14.99));
    this.vegetable.push(new Vegetable('Carrotte',4.99));
    this.vegetable.push(new Vegetable('Patatte',1.99));
    this.vegetable.push(new Vegetable('Poivron',8.99));
    this.vegetable.push(new Vegetable('Oignon rouge',5.99));
    this.vegetable.push(new Vegetable('petit poids',8.99));
    this.vegetable.push(new Vegetable('Mogette',17.99));
    this.vegetable.push(new Vegetable('Fenouille',12.99));
    this.vegetable.push(new Vegetable('Tomate',7.99));
    this.vegetable.push(new Vegetable('Piment Espelette',9.99));
  }
  loadFruitList(){
    this.fruit.push(new Fruit('Citron',5.99));
    this.fruit.push(new Fruit('Fraises',16.99));
    this.fruit.push(new Fruit('Grenades',12.99));
    this.fruit.push(new Fruit('Mangue',14.99));
    this.fruit.push(new Fruit('Ananas',7.99));
    this.fruit.push(new Fruit('pommes',16.99));
    this.fruit.push(new Fruit('cerise',19.99));
  }
  addVegetable(){
    this.vegetable.push(this.newVegetable);
  }
}
