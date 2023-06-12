import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { Tenant } from 'src/app/models/customerForDisplay';

@Injectable()
export class UsersService {
    public url = "api/users";
    constructor(public http:HttpClient) { }
    
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.url);
    }

    addUser(user:User){	    
        return this.http.post(this.url, user);
    }

    updateUser(user:User){
      console.log("=====updateUser(user:User)=========");
      console.log(user);
      console.log("=====updateUser(user:User)=========");
        return this.http.put(this.url, user);
    }

    deleteUser(id: number) {
        return this.http.delete(this.url + "/" + id);
    } 
    // --------------------------------------------------------------------
    // --------------------------------------------------------------------
    getTenants(): Observable<Tenant[]> {
      return this.http.get<Tenant[]>(this.url);
    }

    addTenant(tenant:Tenant){	    
      console.log("=====addTenant(tenant:tenant)=========");
      console.log(tenant);
      console.log("=====addTenant(tenant:tenant)=========");
        return this.http.post(this.url, tenant);
    }

    updateTenant(tenant:Tenant){
      console.log("=====updatetenant(tenant:tenant)=========");
      console.log(tenant);
      console.log("=====updatetenant(tenant:tenant)=========");
        return this.http.put(this.url, tenant);
    }

    deleteTenant(id: number) {
        return this.http.delete(this.url + "/" + id);
    }
} 