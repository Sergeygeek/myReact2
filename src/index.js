import { Human } from './human';
import {Developer} from './developer'

const h = new Human ('Vasya', 'Pupkin');

alert(h.sayHi());

const dev = new Developer ('Sergey', 'Sukhorukov');

const devName = dev.getDev();

const devbyDom = document.querySelector('#devby');

devbyDom.innerHTML = devName;

