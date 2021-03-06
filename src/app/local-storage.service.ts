import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  get(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : '';
  }
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  clear() {
    localStorage.clear();
  }
}
