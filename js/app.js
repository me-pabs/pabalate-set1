$(function(){
    var fetchButton = $('#fetch-button');
    var resetButton = $('#reset-button');
    var jokes = $('#jokes');
    var loader = $('#loader');
    var countJokes = 0;

    loader.hide();
    resetButton.hide();

    fetchButton.click(function(e){
        getJokes();
    })
    resetButton.click(function(e){
        resetJokes();
    })

    function resetJokes(){
        countJokes = 0;
        resetButton.hide();
        fetchButton.show();
        jokes.empty();
    }
    const getJokes = async function(){
        fetchButton.hide();
        loader.show();
        try{
            var jokes = await JOKE_SERVICE.get();
            generateJokes(jokes);
            fetchButton.show();
            loader.hide();

            if(countJokes == 5){
                fetchButton.hide();
                resetButton.show();
            }
        }
        catch(err){
            alert(err);
            loader.hide();
            fetchButton.show();
        }
    }

    function generateJokes(joke){
        countJokes++;
        
        var getJoke = `<li>
                            <p>${joke}</p>
                       </li>`;
        console.log(countJokes);
        if(countJokes <= 5){
            jokes.append(getJoke);
            
        }
    }
    
})
