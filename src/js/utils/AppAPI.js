var AppActions = require('../actions/AppActions');

module.exports = {

    searchNews: function(){
        var news = []; 
        var sources = ['the-hindu','techcrunch','bbc-news','ars-technica','associated-press','bbc-sport','business-insider','buzzfeed','cnbc','cnn','engadget','espn','espn-cric-info','financial-times','mtv-news','national-geographic','new-york-magazine','sky-news','talksport','techradar','the-economist','the-guardian-uk','the-huffington-post','the-lad-bible','the-new-york-times','the-next-web','the-sport-bible','the-telegraph','the-times-of-india','the-verge','the-wall-street-journal','the-washington-post','time','usa-today','wired-de'];
        for (var i = 0 ; i < sources.length ; i++) {
            $.ajax({
                url: 'https://newsapi.org/v1/articles?source='+sources[i]+'&sortBy=latest&apiKey=28eb505baa05491ab8eb33c4e13c6123',
                dataType: 'json',
                cache: false,
                success: function(data){
                    // for (var i = 0; i < 4 ; i++) {
                    //     news.push(data.articles[i]);
                    // }
                    news.push(data);
                }.bind(this),
                error: function(xhr, status, err){
                    console.log(err);
                }.bind(this)
            });
        }
        $(document).ajaxStop(function () {
          AppActions.receiveHeadLines(news);
        });
    },

    searchTop: function(){
        var news = []; 
        var sources = ['the-hindu','techcrunch','bbc-news','ars-technica','associated-press','bbc-sport','business-insider','buzzfeed','cnbc','cnn','engadget','espn','espn-cric-info','financial-times','mtv-news','national-geographic','new-york-magazine','sky-news','talksport','techradar','the-economist','the-guardian-uk','the-huffington-post','the-lad-bible','the-new-york-times','the-next-web','the-sport-bible','the-telegraph','the-times-of-india','the-verge','the-wall-street-journal','the-washington-post','time','usa-today','wired-de'];
        for (var i = 0 ; i < sources.length ; i++) {
            $.ajax({
                url: 'https://newsapi.org/v1/articles?source='+sources[i]+'&sortBy=top&apiKey=28eb505baa05491ab8eb33c4e13c6123',
                dataType: 'json',
                cache: false,
                success: function(data){
                    // for (var i = 0; i < 4 ; i++) {
                    //     news.push(data.articles[i]);
                    // }
                    news.push(data);
                }.bind(this),
                error: function(xhr, status, err){
                    console.log(err);
                }.bind(this)
            });
        }
        $(document).ajaxStop(function () {
          AppActions.receiveHeadLines(news);
        });
    },

    searchPopular: function(){
        var news = []; 
        var sources = ['the-hindu','techcrunch','bbc-news','ars-technica','associated-press','bbc-sport','business-insider','buzzfeed','cnbc','cnn','engadget','espn','espn-cric-info','financial-times','mtv-news','national-geographic','new-york-magazine','sky-news','talksport','techradar','the-economist','the-guardian-uk','the-huffington-post','the-lad-bible','the-new-york-times','the-next-web','the-sport-bible','the-telegraph','the-times-of-india','the-verge','the-wall-street-journal','the-washington-post','time','usa-today','wired-de'];
        for (var i = 0 ; i < sources.length ; i++) {
            $.ajax({
                url: 'https://newsapi.org/v1/articles?source='+sources[i]+'&sortBy=popular&apiKey=28eb505baa05491ab8eb33c4e13c6123',
                dataType: 'json',
                cache: false,
                success: function(data){
                    // for (var i = 0; i < 4 ; i++) {
                    //     news.push(data.articles[i]);
                    // }
                    news.push(data);
                }.bind(this),
                error: function(xhr, status, err){
                    console.log(err);
                }.bind(this)
            });
        }
        $(document).ajaxStop(function () {
          AppActions.receiveHeadLines(news);
        });
    },

    searchSpecific: function(name){
            $.ajax({
                url: 'https://newsapi.org/v1/articles?source='+name+'&sortBy=latest&apiKey=28eb505baa05491ab8eb33c4e13c6123',
                dataType: 'json',
                cache: false,
                success: function(data){
                    AppActions.receiveSpecific(data.articles);
                }.bind(this),
                error: function(xhr, status, err){
                    console.log(err);
                }.bind(this)
            });
        },

    sources: function(){
           $.ajax({
                url: 'https://newsapi.org/v1/sources?language=en',
                dataType: 'json',
                cache: false,
                success: function(data){
                    AppActions.receiveSources(data.sources);
                }.bind(this),
                error: function(xhr, status, err){
                    console.log(err);
                }.bind(this)
            });
    },

    blank: function(){
        $(document).ajaxStop(function (){
           AppActions.receiveHeadLines('');
       });
    },

    sblank: function(){
        $(document).ajaxStop(function (){
           AppActions.receiveSpecific('');
       });
    },

    soblank: function(){
        $(document).ajaxStop(function (){
           AppActions.receiveSources('');
       });
    }

}
