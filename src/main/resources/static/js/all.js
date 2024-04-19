//hàm pop up thông báo
function popupDialog(title, content){
    var dialog = document.getElementById('dialog');
    var titleElement = document.getElementById('dialogTitle');
    var contentElement = document.getElementById('dialogContent');

    titleElement.textContent = title;
    contentElement.textContent = content;

    if (title === 'Error'){
        titleElement.style.background = 'rgb(243 49 49)';
    }
    else if(title === 'Success'){
        titleElement.style.background = '#57c463';
    }

    dialog.showModal()
    dialog.classList.add('show')

    dialog.addEventListener('click', function(event) {
        if (event.target == dialog) {
            dialog.classList.add('hide');
            dialog.addEventListener('webkitAnimationEnd', function(){
                    dialog.classList.remove('hide');
                    dialog.classList.remove('show')
                    dialog.close()
                    dialog.removeEventListener('webkitAnimationEnd',  arguments.callee, false);}
                , false);
        }
    });
}