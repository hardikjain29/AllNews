var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Article = React.createClass ({
    render: function(){
        var logo = '';
            switch(this.props.article.source){
                case 'the-next-web':
                    logo = "http://www.underconsideration.com/brandnew/archives/the_next_web_logo.jpg";
                    break;
                case 'the-hindu':
                    logo = "http://www.fetchlogos.com/wp-content/uploads/2015/11/The-Hindu-Newspaper-Logo.jpg";
                    break;
                case 'ars-technica':
                    logo = "https://cdn.arstechnica.net/wp-content/themes/ars/assets/img/material-ars-db41652381.png";
                    break;
                case 'associated-press':
                    logo = "http://logok.org/wp-content/uploads/2014/04/Associated-Press-logo.png";
                    break;
                case 'bbc-news':
                    logo = "http://logodatabases.com/wp-content/uploads/2012/03/new-bbc-logo.png";
                    break;
                case 'bbc-sport':
                    logo = "http://newsimg.bbc.co.uk/media/images/67165000/jpg/_67165916_67165915.jpg";
                    break;
                case 'business-insider':
                    logo = "http://static.businessinsider.com/image/544e9ea56bb3f7554c911e8d-800-440/bilogo-";
                    break;
                case 'buzzfeed':
                    logo = "https://www.seeklogo.net/wp-content/uploads/2015/07/BuzzFeed-logo-vector.png";
                    break;
                case 'cnbc':
                    logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CNBC_logo.svg/1280px-CNBC_logo.svg.png";
                    break;
                case 'cnn':
                    logo = "https://d35fkdjhhgt99.cloudfront.net/static/use-media-items/28/27013/full-1400x817/5670256f/cnn-logo.png?resolution=0";
                    break;
                case 'engadget':
                    logo = "https://s.blogcdn.com/www.engadget.com/media/2013/11/engadget-icon-big.png";
                    break;
                case 'espn':
                    logo = "http://logo-load.com/uploads/posts/2016-04/1459694500_espn-logo.jpg";
                    break;
                case 'espn-cric-info':
                    logo = "http://logo-load.com/uploads/posts/2016-04/1459694500_espn-logo.jpg";
                    break;
                case 'financial-times':
                    logo = "http://logos-download.com/wp-content/uploads/2016/05/FT_The_Financial_Times_logo_logotype.png";
                    break;
                case 'mtv-news':
                    logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/MTV_Logo_2010.svg/2000px-MTV_Logo_2010.svg.png";
                    break;
                case 'national-geographic':
                    logo = "http://logok.org/wp-content/uploads/2014/06/National-Geographic-logo-yellow-frame.png";
                    break;
                case 'new-york-magazine':
                    logo = "http://nymag.com/img/nymag-1500x1500.png";
                    break;
                case 'sky-news':
                    logo = "http://vignette1.wikia.nocookie.net/logopedia/images/c/c4/Sky_News_2007.png/revision/latest?cb=20100419120542";
                    break;
                case 'talksport':
                    logo = "http://blog.tembediy.com/wp-content/uploads/2015/11/Talk-Sport-Logo.jpg";
                    break;
                case 'techradar':
                    logo = "https://willgrice.files.wordpress.com/2014/11/techradar-logo-eps-vector-image.png";
                    break;
                case 'the-economist':
                    logo = "http://salesforcefutureworks.films.economist.com/wp-content/themes/economist-films-salesforce-wordpress-theme/library/images/economist-films-white.svg";
                    break;
                case 'the-guardian-uk':
                    logo = "https://www.solopress.com/blog/wp-content/uploads/2015/10/The-Guardian-logo1.jpg";
                    break;
                case 'the-huffington-post':
                    logo = "http://o.aolcdn.com/hss/storage/midas/22b5a33fcb6873271999b17fc347d4b3/203735091/H-no-image.jpg";
                    break;
                case 'the-lad-bible':
                    logo = "http://www.myerson.co.uk/wp-content/uploads/The-LAD-Bible-Logo-EPS-vector-image.png";
                    break;
                case 'the-new-york-times':
                    logo = "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg";
                    break;
                case 'the-sport-bible':
                    logo = "http://www.myerson.co.uk/wp-content/uploads/The-LAD-Bible-Logo-EPS-vector-image.png";
                    break;
                case 'the-telegraph':
                    logo = "http://www.theairwheel.com/wp-content/uploads/2014/06/telegraph-logo-1750x1143.jpg";
                    break;
                case 'the-times-of-india':
                    logo = "http://nixonbui.com/wp-content/uploads/2015/12/times-of-india-logo.png";
                    break;
                case 'the-verge':
                    logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/The_Verge_logo.svg/2000px-The_Verge_logo.svg.png";
                    break;
                case 'the-wall-street-journal':
                    logo = "https://yt3.ggpht.com/-sH3JAVQUyJw/AAAAAAAAAAI/AAAAAAAAAAA/8s1D-T2B0XI/s900-c-k-no-mo-rj-c0xffffff/photo.jpg";
                    break;
                case 'the-washington-post':
                    logo = "http://14575-presscdn-0-73.pagely.netdna-cdn.com/wp-content/uploads/2016/02/The-Washington-Post-logo.jpg";
                    break;
                case 'time':
                    logo = "http://logos-download.com/wp-content/uploads/2016/05/Time_Magazine_logo_red_bg.png";
                    break;
                case 'usa-today':
                    logo = "http://www.whosdrivingyou.org/wp-content/uploads/2015/04/USA-Today-logo-300x300.png";
                    break;
                case 'wired-de':
                    logo = "http://www.condenast.de/sites/default/files/Wired_Logo_Negativ_2_1.jpg";
                    break;
                case 'techcrunch':
                    logo = "https://www.statustoday.com/wp-content/uploads/2015/08/TechCrunch-Logo.jpg";
                    break;
             }
        return(
            <div> 
            {          
                this.props.article.articles.map(function(arts,i){
                    if(i<4)
                    {
                return (
                    <div className="col s12 m6">
                      <div className="card large hcard">
                        <div className="card-image">
                          <img src={arts.urlToImage}/>
                          <span className="card-title">{arts.title}</span>
                        </div>
                        <div className="card-content">
                          <p>{arts.description}</p>
                        </div>
                        <div className="card-action">
                          <a href={arts.url} target="_blank">Read full article</a>
                          <img className="logo" src={logo}/> 
                        </div>
                      </div>
                    </div>
                )
            }
            })
            }
            </div>
        )
    },

});

module.exports = Article;
