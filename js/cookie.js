function getCookie(c_name){

        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + c_name + "=");
        if (c_start === -1){
            c_start = c_value.indexOf(c_name + "=");
        }
        if (c_start === -1){
            c_value = null;
        }else{
            c_start = c_value.indexOf("=", c_start) + 1;
            var c_end = c_value.indexOf(";", c_start);
            if (c_end === -1){
                c_end = c_value.length;
            }
            c_value = unescape(c_value.substring(c_start,c_end));
        }
        return c_value;
    }

    function setCookie(c_name,value,exdays){
        var d = new Date();
        d.setDate(d.getDate() + exdays);
        var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+d.toUTCString());
        document.cookie=c_name + "=" + c_value;
    }

    function PonerCookie(){
        setCookie('tiendaaviso','1', 365);
        document.getElementById("barraaceptacion").style.display="none";
    }

    var check =  getCookie('tiendaaviso');
    var barra = document.getElementById('barraaceptacion');
    if (check == 1) {
        barra.style.display = 'none';
    }else{
        barra.style.display = 'block';
    }