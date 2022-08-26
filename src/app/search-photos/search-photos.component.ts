import { Component, OnInit } from '@angular/core';
import { lastValueFrom, firstValueFrom } from 'rxjs';
import { FlickerSingleImage, FlickrService } from '../shared/flickr.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

class FlickrPhoto { 
  title!: string;
  url!: string[];
  username!: string;
  realname!: string;
  location!: string;
  datePosted!: string;
  dateTaken!: string;

}
@Component({
  selector: 'app-search-photos',
  templateUrl: './search-photos.component.html',
  styleUrls: ['./search-photos.component.css']
})

export class SearchPhotosComponent implements OnInit {
  public imageSearchForm!: FormGroup;
  images: any[] = [];
  imageInfo: FlickrPhoto;
  keyword: string;
  photoId: string;
  showModal!: boolean;
  url!: string;
  errMsg!: string;
  err!: string;
  msg!: string;

  constructor(private formBuilder: FormBuilder, private flickrService: FlickrService) { 
    this.keyword = ''; 
    this.photoId = '';
    this.imageInfo = new FlickrPhoto();

  }

  ngOnInit(): void {
    this.imageSearchForm = this.formBuilder.group({
      imageKeyword: ['']
    });
  }

  async search(event: any) {
    this.showloader();
    const images$ = this.flickrService.search_keyword(event.imageKeyword);
    this.images = await lastValueFrom(images$);
    
    if (this.images.length < 1) {
      this.simpleAlert("The entered value does not have a valid result on Flickr. Please try another search");
    }

    if (this.images) {
      this.hideloader();
    }
  }

  simpleAlert(alert: string) {
    Swal.fire(alert)
  }

  showloader() {
    const element = document.getElementById('spinner-border');
    if (element != undefined) {
      element.style.display = 'inline';
    }
  }

  hideloader() {
    const element = document.getElementById('spinner-border');
    if (element != undefined) {
      element.style.display = 'none';
    }
  }

 async onScroll() {
    this.imageSearchForm.get('imageKeyword')?.value
    const image$ = this.flickrService.search_keyword(this.imageSearchForm.get('imageKeyword')?.value);
    this.images = this.images.concat( await lastValueFrom(image$));
  }

  async getImageInfo(photoId: any){
    const flickerSingleImageInfo = await lastValueFrom(this.flickrService.getPhotoInfo(photoId));
    return flickerSingleImageInfo;
  }

  async show(image: any)
  {
    console.log(image)
    const imageinfo = await this.getImageInfo(image.id);
    this.imageInfo.url = image.url;
    this.imageInfo.title = imageinfo.photo.title._content;
    this.imageInfo.username = imageinfo.photo.owner.username;
    this.imageInfo.realname = imageinfo.photo.owner.realname;
    this.imageInfo.location = imageinfo.photo.owner.location;
    this.imageInfo.datePosted = imageinfo.photo.dates.posted;
    this.imageInfo.dateTaken = imageinfo.photo.dates.taken;
    
    this.showModal = true; // Show-Hide Modal Check 
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
}
