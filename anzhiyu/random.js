var posts=["2024/04/18/hello-world/","2024/04/19/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };