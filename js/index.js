function modal() {
    var btnMobile = document.querySelector(".btn-mobile"),
        navMobile = document.querySelector("#nav-mob"),
        close = document.querySelector(".btn-mobile-close"),
        closeN = document.getElementsByClassName('btn-mobile-close'); // we loops this to catch the different closers

    closeNavMenu = function () {
        navMobile.classList.add('flex-hide');
        
        //navMobile.classList.add('modal--hide');
        // Remove hide class after animation is done
    }
    // Open the modal 
    btnMobile.onclick = function (e) {
        e.preventDefault()
        navMobile.classList.remove("flex-hide");
    }
    // Open the modal 
    close.onclick = function (e) {
        e.preventDefault()
        closeNavMenu();
    }

} modal();
