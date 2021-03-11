import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {
  
  constructor() { }
  SharingData = new BehaviorSubject(null);  
}
