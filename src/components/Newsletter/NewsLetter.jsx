import "./NewsLetter.css"

const NewsLetter = () =>{
    return(
<div className="newsletter">
    <h1>Get Exculsive Offer</h1>
    <p>Subscribe to our newsLetter and stay updated</p>
    <div>
        <input type="email" placeholder="Your Email ID" />
        <button>Subscribe</button>
    </div>
</div>
    )
}

export default NewsLetter