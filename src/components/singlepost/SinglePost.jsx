import "./singlepost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="sinlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1618588507085-c79565432917?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Oybek</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          accusamus laboriosam similique dolores, corrupti deserunt culpa
          placeat dolor vitae? Quibusdam quidem rem necessitatibus neque
          repellendus quo in, sint deserunt soluta! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Aliquam accusamus laboriosam similique
          dolores, corrupti deserunt culpa placeat dolor vitae? Quibusdam quidem
          rem necessitatibus neque repellendus quo in, sint deserunt soluta!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          accusamus laboriosam similique dolores, corrupti deserunt culpa
          placeat dolor vitae? Quibusdam quidem rem necessitatibus neque
          repellendus quo in, sint deserunt soluta! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Aliquam accusamus laboriosam similique
          dolores, corrupti deserunt culpa placeat dolor vitae? Quibusdam quidem
          rem necessitatibus neque repellendus quo in, sint deserunt soluta!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          accusamus laboriosam similique dolores, corrupti deserunt culpa
          placeat dolor vitae? Quibusdam quidem rem necessitatibus neque
          repellendus quo in, sint deserunt soluta!
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
