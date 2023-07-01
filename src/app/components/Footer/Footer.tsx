import "./Footer.modules.css"
import Link from "next/link";


function Footer (){

    return <div   className="footer">

    <form>

        <p>Keep Up With The Latest</p>
        <input />
        <input />

        <button>Submit</button>

    </form>

    <div>

        <h2>CONTACT</h2>
        <h2>TERMS AND CONDITIONS</h2>
        <h2>PRIVATE POLICY</h2>
        <p>2023 Ted Reaforentration Projects All Rights Reserved</p>




    </div>

    <section>
        <a href="https://facebook.com"    target={"_blank"} rel="noreferrer"
           >  <img src="./f.png" alt="img"/></a> 

        <a href="https://instagram.com"    target={"_blank"} rel="noreferrer"
           >  <img src="./i.png" alt="img"/></a>   

        <a href="https://twitter.com"    target={"_blank"} rel="noreferrer"
           >  <img src="./t.png" alt="img"/></a>     

         <a href="https://youtube.com"    target={"_blank"} rel="noreferrer"
           >  <img src="./y.png" alt="img"/></a>   
    
    </section>




    </div>
}


export default Footer;