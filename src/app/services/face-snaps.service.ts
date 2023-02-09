import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn:'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        { 
          id: 1,
          title: 'luke cage',
          description:  'Il rentablir l\'ordre à Harlem !',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQUBTV1e1Ry9QtXT-tztl71i8NgeGO1VL4w&usqp=CAU',
          createdDate:   new Date(),
          snaps:  205,
          location: 'New York'
        },
    
        {
            id: 2,
            title:'cornell cottonmouh',
            description:  'Le méchant d Harlem',
            imageUrl: 'https://imgsrc.cineserie.com/2020/07/luke-cage-la-verite-sur-la-mort-du-personnage-de-mahershala-ali.jpg?ver=1',
            createdDate: new Date(),
            snaps: 29,
            location: 'Harlem'
          },
          
           

          {
            id: 3,
            title:'misty',
            description:  'Une officière qui éssai de rétablir l\'odre à Harlem',
            imageUrl: 'https://zupimages.net/up/18/14/63sf.jpg',
            createdDate: new Date(),
            snaps: 99,
            location: 'Ditrict 29éme'
          }
        ];

        getAllFaceSnaps(): FaceSnap[]{
            return this.faceSnaps
        }


  
        getFaceSnapById(faceSnapId: number): FaceSnap {
            const currentFaceSnap = this.faceSnaps.find(faceSnaps => faceSnaps.id === faceSnapId);
            if (!currentFaceSnap){
                throw new Error('Non trouvé !');
            }
                else {
                    return currentFaceSnap;
                }
            
        }
        
        
        snapFaceSnapById(Id: number, snapType: 'snap' | 'unsnap'): void {
            const currentFaceSnap = this.getFaceSnapById(Id);
            snapType === 'snap' ? currentFaceSnap.snaps++ : currentFaceSnap.snaps--;
        } 
}