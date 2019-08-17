var JOKE_SERVICE = {
    get : function(){
        return $.ajax({
            url : JOKES_API
        });
    },
}