import { replaceClass, addClass, removeClass } from "../utils/classHelpers"

const nav = {
    __proto__: this,
    nav: document.querySelector('#navigation'),
    toggler: document.querySelector('#navbar-toggler'),
    cls: document.querySelector('#navbar-closer'),
    exp(){return this.nav.ariaExpanded},
    setExp(bool){this.nav.ariaExpanded = bool;},
}

const handleToggle = (e) => {
    nav.setExp(true);
}

const handleClose = ()=> {
    nav.setExp('false');   
}

const events = () => {
    nav.toggler.addEventListener('click', handleToggle);
    nav.cls.addEventListener('click', handleClose);
}

const slideControl = () => {
    const { nav: navbar } = nav;
    removeClass(navbar, 'slide');

    setTimeout(() => {
        addClass(navbar, 'slide');
    }, 500);
}

const navInit = () => {
    slideControl();
    events();

    window.addEventListener('resize', function(){
        slideControl();
        if (window.innerWidth > 768) {
            nav.setExp(false);
        }
    });
}

export default navInit;