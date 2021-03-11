import { Component, OnInit } from '@angular/core';
import { LocalStorageServiceService } from 'src/app/shared/services/local-storage-service.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(private DataSharing: LocalStorageServiceService) {  
   
  }  

  ngOnInit(): void {
    this.DataSharing.SharingData.next(null); 
  }
  //public addedItems : any = [];
  public storedItems : any;
  public items = [{
    name:"Burger",
    price:"60",
    photo:"../../assets/images/burger.jpeg"
  },
{
  name:"Cold Coffee",
  price:"99",
  photo:"../../assets/images/coffee.jpeg"
},
{
  name:"Coke",
  price:"80",
  photo:"../../assets/images/coke.jpg"
},
{
  name:"Pasta",
  price:"120",
  photo:"../../assets/images/pasta.jpeg"
},
{
name:"Pizza",
price:"250",
photo:"../../assets/images/pizza.jpg"
},
{
name:"French Fries",
price:"110",
photo:"../../assets/images/fries.jpeg"
}
];
addToCart(name:any,price:any){
  let quantity : number= 1;
  let obj = {
    'name':name,'price':price,'quantity':quantity
  }; 
  
  let exists=false;
  this.DataSharing.SharingData.subscribe((res: any) => {  
    this.storedItems = res;
  })  
  if(this.storedItems!=null){
  this.storedItems.forEach(element => {
    if(element.name==name){
      exists=true;
      element.quantity=element.quantity+1;
    }
  });
}
  if(exists){
    this.DataSharing.SharingData.next(this.storedItems); 
  }else{
    if(this.storedItems==null){
      this.storedItems=[];
    }

    this.storedItems.push(obj);
    this.DataSharing.SharingData.next(this.storedItems); 
 }
  
}
}
