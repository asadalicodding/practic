import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    constructor(private db: AngularFirestore) { }
    collections = {
        collection1: 'collection1'
    }

    post(data: any) {
        return this.db.collection(this.collections.collection1).add({
            ...data,
            updatedAt: serverTimestamp(),
            createdAt: serverTimestamp(),
        })
    }

    gets(): Observable<any[]> {
        return this.db.collection<any>(this.collections.collection1).snapshotChanges().pipe(
            map((actions) => actions.map((action) => {
                const data = action.payload.doc.data() as any;
                const _id = action.payload.doc.id;
                return { _id, ...data };
            })));
    }


}
