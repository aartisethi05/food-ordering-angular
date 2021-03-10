import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ɵNAMESPACE_URIS } from '@angular/platform-browser';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public addedItems : any = [];
  public items = [{
    name:"Burger",
    price:"60"
  },
{
  name:"Cold Coffee",
  price:"99"
},
{
  name:"French Fries",
  price:"110"
}
];
addToCart(name:any,price:any){
  let quantity : number= 1;
  let obj = {
    'name':name,'price':price,'quantity':quantity
  }; 
  let storedItems:any = localStorage.getItem('items');
  storedItems = JSON.parse(storedItems);
  let exists=false;
  if(storedItems!=null){
  storedItems.forEach(element => {
    if(element.name==name){
      exists=true;
      element.quantity=element.quantity+1;
    }
  });
}
  if(exists){
    localStorage.setItem("items",JSON.stringify(storedItems));
  }else
  this.addedItems.push(obj);
  localStorage.setItem("items",JSON.stringify(this.addedItems));
 }

}
