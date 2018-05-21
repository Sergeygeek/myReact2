import {Human} from './human';

export class Developer extends Human {
  
  getDev() {
    return `Dev by ${this.firstName} ${this.lastName};`
  }

} 