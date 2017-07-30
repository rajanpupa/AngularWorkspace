# services

* Classes that send data and functionality across components
* Keeps components lean
* DRY - Dont repeat yourself
* Ideal place for ajax calls

```
import { Injectable } from '@angular/core'

import { User } from './User';
import { USERS } from './mock-users';

@Injectable()
export class UserService{
    getUsers(): User[]{
        return USERS;
    }
}
```
