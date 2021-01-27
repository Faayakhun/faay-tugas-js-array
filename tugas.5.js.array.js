let show = [];

function showTweet() {
    let tweetContent = document.getElementById("yourTweet").value;

    if(tweetContent !=="") {
        show.push(tweetContent);
    }

    let newTweet = ''
    
    for(i=0; i < show.length; i++) {
        newTweet = newTweet + show[i] + "<br>" + "<br>"
    }
    document.getElementById("show").innerHTML = newTweet;
    document.getElementById("yourTweet").value = '';
}