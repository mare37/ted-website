import Link from "next/link";


function Navbar (){

    return <div>

        <div>
        <Link href="/" >Ted</Link>

            <div>
            <Link href="/save-the-environment" >Save The Environment</Link>
            <Link href="/get-involved" >Get Involved</Link>
            <Link href="/blog" >Blog</Link>
            <Link href="/about" >About</Link>
            <Link href="/contact" >Contact</Link>


            </div>


        </div>

     

    </div>
}


export default Navbar;