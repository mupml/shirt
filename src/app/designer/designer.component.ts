import { Component, OnInit, ElementRef} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {
whiteShirt: string = "../../assets/tshirt.jpg";
blackShirt: string = "../../assets/black.png";
currentShirt: string = "";
  fileData: File = null;
previewUrl:any = null;
fileUploadProgress: string = null;
uploadedFilePath: string = null;
 
fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
      this.preview();
}

whiteBtn(){
  this.currentShirt = this.whiteShirt;
}

blackBtn(){
  this.currentShirt = this.blackShirt;
}
 
preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
}


/*
onSubmit() {
  const formData = new FormData();
    formData.append('file', this.fileData);
    this.http.post('url/to/your/api', formData)
      .subscribe(res => {
        console.log(res);
        this.uploadedFilePath = res.data.filePath;
        alert('SUCCESS !!');
      })
}

*/
  constructor(private shirt: ElementRef) { }

  ngOnInit() {
    this.currentShirt =  "../../assets/tshirt.jpg";
  }

}
