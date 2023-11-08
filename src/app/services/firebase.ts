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
        // collection1: 'collection1',
        testing: 'testing'
    }

    // post(data: any) {
    //     return this.db.collection(this.collections.collection1).add({
    //         ...data,
    //         updatedAt: serverTimestamp(),
    //         createdAt: serverTimestamp(),
    //     })
    // }

    // gets(): Observable<any[]> {
    //     return this.db.collection<any>(this.collections.collection1).snapshotChanges().pipe(
    //         map((actions) => actions.map((action) => {
    //             const data = action.payload.doc.data() as any;
    //             const _id = action.payload.doc.id;
    //             return { _id, ...data };
    //         })));
    // }


    post(data: any) {
        return this.db.collection(this.collections.testing).add({
            ...data,
            updatedAt: serverTimestamp(),
            createdAt: serverTimestamp(),
        })
    }


    put(id: string, data: any) {
        return this.db.collection(this.collections.testing).doc(id).set({
            ...data,
            updatedAt: serverTimestamp(),
            createdAt: serverTimestamp(),
        },
            //if we set merge true then only given entities change Other remain same 
            { merge: true }
        )
    }

    // get single document using document id
    get(id: string): Observable<any> {
        return this.db.collection(this.collections.testing).doc(id).snapshotChanges()
            .pipe(
                map((action) => action.payload.data() as any));
    }


    gets(): Observable<any[]> {
        return this.db.collection<any>(this.collections.testing).snapshotChanges().pipe(
            map((actions) => actions.map((action) => {
                const data = action.payload.doc.data() as any;
                const _id = action.payload.doc.id;
                return { _id, ...data };
            })));
    }

    //delete document(for deletion path id is mandatory )
    delete(id: string) {
        return this.db.doc<any>(this.collections.testing + '/' + id).delete();
    }

}
