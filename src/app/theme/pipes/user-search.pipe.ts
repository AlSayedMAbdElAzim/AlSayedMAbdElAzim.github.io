import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UserSearchPipe', pure: false })
export class UserSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(user => {
        if (user.profile.name) {
          return user.profile.name.search(searchText) !== -1;
        }
        else{
          return user.username.search(searchText) !== -1;
        }
      });
    }
  }
}


@Pipe({ name: 'EmpSearchPipe', pure: false })
export class EmpSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(user => {
        if (user.first_name) {
          return user.first_name.search(searchText) !== -1;
        }
        else if(user.last_name){
          return user.last_name.search(searchText) !== -1;
        }
        else{
          return user.username.search(searchText) !== -1;
        }
      });
    }
  }
}
