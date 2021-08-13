var url = "http://127.0.0.1";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = `{
  "Id": 78912,
  "Customer": "Jason Sweet",
  "Quantity": 1,
  "Price": 18.00
}`;

const feed = document.getElementById('feed');
var step;
for (step = 0; step < 5; step++) {
    feed.innerHTML += `
    <article class="post">
    <header class="post-header">
        <address class="post-author">
            <img src="img/profilepic.webp" alt="" class="post-author-profilepic">
            <span class="post-author-username"><a href="">Karto4an</a></span>
        </address>
        <button class="post-buttons-moreoptions-container" title="More post options">
            <img src="img/svg/more.svg" alt="" class="post-buttons-moreoptions">
        </button>
    </header>
    <section class="post-picture-container">
        <img src="img/test-pic.webp" alt="BLANK">
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
        <span><b>1 like</b></span>
        <section class="post-text-container">
            <article>
                <div>
                    <address>
                        <a href="">Karto4an</a>
                    </address>
                    <p class="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vitae aliquid facilis aut, praesentium tempore sequi quasi inventore commodi, nostrum vel, quo debitis impedit voluptatem? Quos dolorum quisquam recusandae qui?</p>
                </div>
            </article>
        </section>
    </footer>
    </article>`;}


xhr.send(data);
