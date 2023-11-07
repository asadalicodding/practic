import { Injectable } from '@angular/core';
import { openDB, deleteDB, wrap, unwrap } from 'idb';

@Injectable({
  providedIn: 'root'
})
export class IndexdbService {

  constructor() { }
  DBName:string='asad'

  dbPromise = openDB('asad-db', 1, {
    upgrade(db) {
      db.createObjectStore('asad');
    },
  });

  async get(key: string) {
    return (await this.dbPromise).get(this.DBName, key);
  }
  async set(key: string, val: any) {
    return (await this.dbPromise).put(this.DBName, val, key);
  }
  async del(key: string) {
    return (await this.dbPromise).delete(this.DBName, key);
  }
  async clear() {
    return (await this.dbPromise).clear(this.DBName);
  }
  async getAll() {
    return (await this.dbPromise).getAll(this.DBName);
  }

}
