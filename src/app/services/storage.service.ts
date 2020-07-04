import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'app'
})
export class StorageService {

  constructor() { }

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

}