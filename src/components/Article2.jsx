import article2Img from '../assets/blog-image-2.jpg'

function Article2() {
    return(
        <article>
         <time dateTime="2020-11-11">11/11/20</time>
        <h2>Vintage in Vogue</h2>
        <img
          src={article2Img}
          alt=""
        />
        <p>
          <span className="dropcap">S</span>ffles kunt, ocor il amit consectetur
          adpacing el Rapelat quidem deveun trim ducttin ent is at pequ alli,
          Temporde peripicata at inindit voluptil
        </p>
        <a href="#">Continues...</a>
      </article>
    );
}

export default Article2;