import { Router } from '@angular/router';
import { SharedFavouriteService } from './../shared-favourite.service';
import { Component, OnInit,ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
favArray=[];
putitem;
rerender=false;
  constructor(private fav :SharedFavouriteService,
    private cdRef:ChangeDetectorRef
  ) { }

  doRerender() {
    this.rerender = true;
    this.cdRef.detectChanges();
    this.rerender = false;
  }
  getResult(result){
    this.putitem=result;
    console.log(this.putitem);
  }

  deleteFav(item){
    this.fav.deleteFav(item).subscribe(() =>this.favArray= this.favArray.filter( f => f.id !==item.id))

  }
  putFav(userCommentspar){
    let userCommentsobj={
      userComments:userCommentspar
    };
  
    this.fav.putFav(this.putitem,userCommentsobj).subscribe((res) =>{
      console.log(res.json());
      console.log(userCommentsobj);
    
        
        
      this.fav.getFav().subscribe((res) =>{this.favArray=res.json()
        console.log(this.favArray)});
      
    });
  
    
    
      
   
    
  }

  ngOnInit() {
    this.fav.getFav().subscribe((res) =>{this.favArray=res.json()
    console.log(this.favArray)})

  

  }

}
