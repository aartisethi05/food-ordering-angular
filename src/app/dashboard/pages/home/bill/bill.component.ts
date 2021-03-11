import { Component, OnInit } from '@angular/core';
import { LocalStorageServiceService } from 'src/app/shared/services/local-storage-service.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
items:any;
submitted:boolean=false;
pay:boolean=false;
  constructor(private DataSharing: LocalStorageServiceService) {  
    this.DataSharing.SharingData.subscribe((res: any) => {  
      this.items = res;  
    });
    
  }  
  
total:any;
  ngOnInit(): void {
  }
placeOrder(){
  this.total=0;
  this.DataSharing.SharingData.subscribe((res: any) => {  
    this.items = res;  
  })  
  this.items.map(element=>{
    this.total = this.total + element.price * element.quantity;
  });
  this.pay=true;
  
}
payment(){
  this.pay=false;
  this.submitted=true;
}
}
