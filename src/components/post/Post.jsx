import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1618588507085-c79565432917?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <div className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
        quod exercitationem cupiditate molestiae excepturi. Eveniet, quod
        accusamus ratione consectetur molestiae optio dicta dolorum laborum
        minus, incidunt laudantium quibusdam eaque possimus. Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Nostrum necessitatibus et aut
        omnis iure cupiditate quam tempora neque qui quidem, alias modi
        praesentium facere dolore dignissimos a deserunt labore quis!
      </div>
    </div>
  );
}

export default Post;
