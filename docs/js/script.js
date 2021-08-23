var url = "http://127.0.0.1:8080/api/post/test";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

var post;

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
    //   console.log(xhr.responseText);
    post = Object.values(JSON.parse(xhr.responseText));
    console.log(post);
    lenght = ObjectLength(post);

    var i;
    for (i = 0; i < lenght; i++){
        console.log(`${i} attempt`);

        console.log(post[i][0]);
        writePost(post[i][0]);
    }

    }};

xhr.send();

function writePost(postToRender) {
    console.log(postToRender)
    const pic_url = postToRender.profile_pic_url;
    const author_username = postToRender.username;
    const img_url = postToRender.img_url;
    const likes_num = postToRender.likes_num;
    const description = postToRender.description;

    const feed = document.getElementById('feed');
    var step;
    for (step = 0; step < 1; step++) {
        feed.innerHTML += `
        <article class="post">
        <header class="post-header">
            <address class="post-author">
                <img src="${pic_url}" alt="" class="post-author-profilepic">
                <span class="post-author-username"><a href="">${author_username}</a></span>
            </address>
            <button class="post-buttons-moreoptions-container" title="More post options">
                <img src="img/svg/more.svg" alt="" class="post-buttons-moreoptions">
            </button>
        </header>
        <section class="post-picture-container">
            <img src="${img_url}" alt="BLANK">
        </section>
        <footer class="post-footer">
            <section class="post-buttons-container">
                <button class="post-buttons post-like-button-container" title="Like post">
                    <img src="img/svg/heart.svg" alt="" class="post-like-button post-buttons-svg">
                </button>
                <button class="post-buttons post-comments-button-container" title="Comment post">
                    <img src="img/svg/comments.svg" alt="" class="post-comments-button post-buttons-svg">
                </button>
                <button class="post-buttons post-share-button-container" title="Share post">
                    <img src="img/svg/share.svg" alt="" class="post-share-button post-buttons-svg">
                </button>
                <button class="post-buttons post-addfav-button-container" title="Bookmark post">
                    <img src="img/svg/bookmark.svg" alt="" class="post-addfav-button post-buttons-svg">
                </button>
            </section>
            <span><b>${likes_num} like</b></span>
            <section class="post-text-container">
                <article>
                    <div>
                        <address>
                            <a href="">Karto4an</a>
                        </address>
                        <p class="post-text">${description}</p>
                    </div>
                </article>
            </section>
        </footer>
        </article>`
    };
};

function ObjectLength( object ) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
};

window.onload = function () {
    let body = document.getElementsByTagName('body')[0];
    console.log(body.clientHeight);
};
