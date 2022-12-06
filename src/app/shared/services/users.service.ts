import { Injectable } from '@angular/core';
import { Iuser } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users : Iuser[] = [
    {
      userName : "Pooja",
      id : 1
    },
    {
      userName : "Aditya",
      id : 2
    },
    {
      userName : "Vrushali",
      id : 3
    },
  ] 
  constructor() { }
  getAllUsers(): Iuser[] {
    return this.users;
  }

  getuser(id:number){
    return this.users.find(user=>{
       return user.id===id
    })
  }
}
