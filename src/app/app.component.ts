import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public display:any;
  public propertyName:string = "";
  public propertySize:string = "";
  public propertyDescription:string = "";
  public properties = 
  [
    {name:"property one",description:"property one description",size:"property one size"},
    {name:"property two",description:"property two description",size:"property two size"},
    {name:"property three",description:"property three description",size:"property three size"},
    {name:"property four",description:"property four description",size:"property one four"},
    {name:"property five",description:"property five description",size:"property one five"},
  ];

  constructor(){}
  
  addProperty(){
    if(this.propertyName.length == 0 || this.propertyDescription.length == 0 || this.propertySize.length == 0){
      alert("enter all properties");
    }
    else{
      this.properties.push({ name:this.propertyName, description:this.propertyDescription, size:this.propertySize });
    }
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  removeProperty(){
    if(this.properties.length != 0){
      this.properties.pop();
    }
    else{
      alert("nothing in the list");
    }
  }
}