var count =10;

function msg(cb) {
    setTimeout(() => {
        if (count == 0) 
        {document.getElementById('space').innerText= '"Happy Independence Day"';}
        else{
              document.getElementById('space').innerText= count;
              count--
            cb()
        }
    }, 1000);
}

msg(function () {
    msg(function () {
        msg(function () {
            msg(function () {
                msg(function () {
                    msg(function () {
                        msg(function () {
                            msg(function () {
                                msg(function () {
                                    msg(function (){
                                   msg();
                                    });
                                });    
                            });
                        });
                    });
                });
            });
        });
    });
});
