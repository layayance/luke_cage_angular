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
          location: ' à New York'
        },
    
        {
            id: 2,
            title:'cornell cottonmouh',
            description:  'Le méchant d Harlem',
            imageUrl: 'https://imgsrc.cineserie.com/2020/07/luke-cage-la-verite-sur-la-mort-du-personnage-de-mahershala-ali.jpg?ver=1',
            createdDate: new Date(),
            snaps: 29,
            location: ' à son club d\'Harlem'
          },
          
           

          {
            id: 3,
            title:'misty',
            description:  'Une officière qui éssai de rétablir l\'odre à Harlem',
            imageUrl: 'https://zupimages.net/up/18/14/63sf.jpg',
            createdDate: new Date(),
            snaps: 99,
            location: 'au ditrict 29éme'
          },

          {
            id: 4,
            title:'Shade',
            description:'Le bras droit de Collonmouth',
            imageUrl: 'https://townsquare.media/site/442/files/2017/05/cage-season-2-shades-pic.jpg?w=980&q=75',
            createdDate: new Date(),
            snaps: 19,
            location: 'au club'
          },

          {
            id: 5,
            title:'Mariah',
            description:'La grand soeur de Collonmouth',
            imageUrl: 'https://dailymars-cdn-fra1.fra1.digitaloceanspaces.com/wp-content/uploads/2016/10/3a36814a90645d20d63de6c8ad56c87c.jpg',
            createdDate: new Date(),
            snaps:49,
            location: 'devant la maison famillia'
          },

          {
            id: 6,
            title:'Diamondback',
            description:'La terreur de la famille Stones, Shade et de Luke...',
            imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F10%2Ferik-laray-harvey-1.jpg',
            createdDate: new Date(),
            snaps: 19,
            location: 'à Harlem'
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