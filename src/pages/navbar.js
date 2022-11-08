import elementFactory from '../helpers/factoryFunctions/elementFactory';

import seaCreature from '../assets/images/seaCreature.png';
import slothShrug from '../assets/images/slothsshrug.png';




const navBar = function navigationBarComponent() {

    let nav = elementFactory('nav');

    let navStart = elementFactory('div', {class : 'navStart'},
                     elementFactory('div', {class: 'hamIconWrapper'},
                        elementFactory('span', {class: "material-symbols-outlined hamIcon"}, "menu")),
                     elementFactory('div', {class: 'homeIconWrapper'},
                        elementFactory('span', {class: "material-symbols-outlined homeIcon"}, "home")));

    let logoWrapper = elementFactory('div' , {class:'logoWrapper'},
                        elementFactory('img', {class:"logo", src: slothShrug}));

    let appName = elementFactory('h1', {}, 'MUSTODOIT');

    let navEnd = elementFactory('div', {class: 'navEnd'},
                    elementFactory('div', {class: 'neverTodoWrapper'},
                        elementFactory('button', {class: "newTodoButton"}, "+")),
                    elementFactory('img', {class: "userIcon", src: seaCreature}));

    nav.appendChild(navStart);
    nav.appendChild(logoWrapper);
    nav.appendChild(appName);
    nav.appendChild(navEnd);
    
    document.body.appendChild(nav)
}

export default navBar;


{/* <nav>
      <div class="navStart">
        <div class="hamIconWrapper"><span class="material-symbols-outlined hamIcon">
          menu
          </span></div>
        <div class="homeIconWrapper"><span class="material-symbols-outlined homeIcon">
          home
          </span></div>
      </div>
      <div class="logoWrapper">
        <img class="logo" src="./assets/images/slothsshrug.png" alt="" />
      </div>
      <h1>MUSTODOIT</h1>
      <div class="navEnd">
        <div class="newTodoWrapper">
          <button class="newTodoButton">+</button>
        </div>
        
        <img class="userIcon" src="./assets/images/seaCreature.png" alt="" />
      </div>
    </nav> */}