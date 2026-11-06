
// 1

class User{
    public  id:number;
    public  name:string;
    public  email:string;
    private  password:string;
    public  phone:string;
    public  _age:number;
    private notebooks:NoteBook[]=[];

    constructor(id:number,name:string,email:string,password:string,phone:string,age:number){
        this.id=id
        this.name=name
        this.email=email
        this.password=password
        this.phone=phone
        this._age=User.validationAge(age)
    }
    static validationAge(age:number): number {
        if(age <18 || age >60){
            throw new Error("Age must be between 18 and 60");
        }
        return age;
    }

    get age():number {
        return this.age
    }

    set age(value:number){
        if(value>60 || value <18){
            throw new Error("age must be between 18 and 60")
        }
        this._age= value 
    }

    public displayInfo():void{
        console.log(`ID = ${this.id}`);
        console.log(`name=${this.name}`);
        console.log(`email=${this.email}`);
        console.log(`phone = ${this.phone}`);
        console.log(`age = ${this.age}`);
    
        
    }

    public addNoteBook(notebook:NoteBook):void{
        this.notebooks.push(notebook);
    }
    public getNoteBooks():NoteBook[]{
        return this.notebooks;
    }


}

// 2

class Admin extends User {
    private notes:string[]=[]

    constructor(
        id:number,
        name:string,
        email:string,
        phone:string,
        password:string,
        age:number,

    ){
    super(id,name,email,phone,password,age)
    }

    public addNote(note:string):void{
        this.notes.push(note)
        console.log("note added",note);
    }
    public showNotes():void{
        console.log(this.notes);
    }
    public deleteNote(note:string):void{
        this.notes=this.notes.filter((n)=> n!== note);
        console.log("note deleted");
        
    }

}

// 3
class Note {
    public id:number;
    public title:string;
    public content:string;
    public author:User;
    constructor(id:number,title:string,content:string,author:User){
        this.id=id,
        this.title=title,
        this.content=content,
        this.author=author
    }
    public preview():string{
        if(this.content.length>20){
            return this.content.substring(0.20);
        }
        return this.content;
    }
}

// 4

class NoteBook{
    private notes:Note[]=[];
    private nextId:number=1;

    public addNote(title:string,content:string,author:User):void{
        const note= new Note(this.nextId,title,content,author)
        this.notes.push(note);
        this.nextId++;
    }
    public removeNote(id:number):void{
        this.notes=this.notes.filter((n)=> n.id !== id)
    }
}

// 7
class Storage <T>{
    private items:T[]=[];
    public addItem(item:T):void{
        this.items.push(item)
    }
    public removeItem(item:T):void{
        this.items=this.items.filter((i)=> i !== item);
    }
    public getItems():T[]{
        return this.items
    }
}

