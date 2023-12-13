$(document).ready(function() {
    loadRSS('http://fetchrss.com/rss/653ab8c741021b54931625b2653ab89e83237c0726183a12.xml', '#Newsfeed', 'Elcom');   
});

function loadRSS(link, htmlContainer, closingDate) {
    var url = link;
    var cDate = closingDate;
    var container = $(htmlContainer);

    feednami.load(url, function(result){
        if (result.error) {
            console.log(result.error);
        } else {
            var entries = result.feed.entries;
            for(var i = 0; i < 5; i++){
                var entry = entries[i];
                container.append("<li class=\"rss-card bg-white border border-slate-200 m-4 p-4 rounded-xl shadow-sm\"><p><h2>" 
                    + "<a href=\"" + entry.link + "\" target=\"_blank\">" + entry.title + "</a>" 
                    + "</h2></p>"+ entry.description + "</li>");
            }
        }
    });
}