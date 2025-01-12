import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataSaveService {
  constructor() {}

  saveData(name: string, data: any) {
    localStorage.setItem(`$${name}`, JSON.stringify(data));
  }

  clearData(name: string) {
    localStorage.removeItem(`$${name}`);
  }

  getData<T>(name: string): T {
    return JSON.parse(localStorage.getItem(`$${name}`) || '{}') as T;
  }

  saveMapData(name: string, data: Map<any, any>) {
    // const obj = Object.fromEntries(data);
    // const jsonString = JSON.stringify(obj);
    // localStorage.setItem(`$${name}`, jsonString);
  }

  getMapData(name: string): Map<any, any> {
    const obj = JSON.parse(localStorage.getItem(`$${name}`) || '{}');
    return new Map(Object.entries(obj));
  }
}
