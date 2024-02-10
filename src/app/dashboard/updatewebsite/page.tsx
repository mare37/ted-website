'use client'
import { useState } from "react"
import "./page.modules.css"



function UpdateWebsite (){


    const [edit, setEdit] = useState(true)
    const [saved, setSaved] = useState(false)





    const savePhoto = ()=>{

    }



    return <div  className="update-website"   >

        <button>Dashboard</button>

        <section   className="home-page"  >
            <h1>HOME PAGE</h1>

            {edit ?  <button  onClick={()=>{setEdit(false); setSaved(false)}}        >Edit</button>:  <button onClick={()=>{setEdit(true); setSaved(true) }} >Save</button>}
             

            <h4>Main heading section</h4>

            <textarea   readOnly={edit ? true: false}    className={!edit? "home-page-mainheading active":"home-page-mainheading" } />

            <h4>What We Do section</h4>

             <textarea  readOnly={edit ? true: false}          className={!edit? "home-page-what-we-do active": "home-page-what-we-do"} />

                <div  className="updatewebsite-ourgoals"   >
                            <h4>Our Goals section</h4>
                        
                        <div>
                                <div>How many trees planted?</div>
                                <input readOnly={edit ? true: false}          />
                        </div>


                        <div>
                                <div>How many Schools Enrolled?</div>
                                <input  readOnly={edit ? true: false}            />
                        </div>

                        <div>
                                <div>How many Community members employed in this program?</div>
                                <input     readOnly={edit ? true: false}            />
                        </div>

                        <form className="upload-picture">
                            Upload Goals Picture
                            {!edit?  <input
                                readOnly={edit ? true: false}
                                type="file"
                                onChange={ savePhoto  }
                            />:""   }
                        </form>


                </div>



                <div  className="updatewebsite-how-we-do-it"   >

                    <h4>How we do it section</h4>
                    <form className="upload-picture">
                            Upload first Picture
                            <input
                                readOnly={edit ? true: false}
                                type="file"
                                onChange={ savePhoto  }
                            />
                        </form>

                      <textarea  readOnly={edit ? true: false}        placeholder="Write a Brief Summary..." className="how-we-do-it-text"/>  

                      <form className="upload-picture">
                            Upload second Picture
                            <input
                                readOnly={edit ? true: false}
                                type="file"
                                onChange={ savePhoto  }
                            />
                        </form>

                      <textarea    readOnly={edit ? true: false}         placeholder="Write a Brief Summary..."   className="how-we-do-it-text"    />  



                </div>


                <div  className="updatewebsite-how-you-can-help">

                <h4>How you can help section</h4>

                <p>Summary</p>
                <textarea  readOnly={edit ? true: false}        className="summary"     />

                <p>Individual Donors</p>
                <textarea   readOnly={edit ? true: false}          className="donors"          />

                <p>Corporates Sponsors</p>
                <textarea   readOnly={edit ? true: false}                    className="donors"               />

                <p>Partner With Us</p>
                <textarea    readOnly={edit ? true: false}             className="donors"                />


                </div>
           


        </section>


        <section className="updatewebsite-ourwork"   >

        <h1>Our Work Page</h1>

        <h4>Main heading section</h4>

        <textarea    readOnly={edit ? true: false}         className="updatewebsite-ourwork-heading" />


        <h4>Overview</h4>

        <textarea   readOnly={edit ? true: false}             className="updatewebsite-ourwork-text"        />

        <form className="upload-picture">
                            Upload Founder Picture
                            <input
                                type="file"
                                onChange={ savePhoto  }
                            />
        </form>




        </section>







        <section   className="updatewebsite-why-reafforestration-page">


        <h1>Why Reafforestration? Page</h1>

        <h4>Main heading section</h4>

        <textarea   readOnly={edit ? true: false}           className="why-reafforestration-heading" />


        <h4>Body section</h4>

            <textarea className="why-reafforestration-text"    />









        </section>


        <section  className="updatewebsite-contact-us"               >

        <h1>Contact Us Page</h1>

        <p>Contact Us Message</p>

        <textarea  readOnly={edit ? true: false}        />


        <p>Phone Number</p>
        <input     readOnly={edit ? true: false}        />

        <p>Email</p>
        <input       readOnly={edit ? true: false}            />

        <p>Instagram</p>
        <input       readOnly={edit ? true: false}         />

        <p>Facebook</p>
        <input   readOnly={edit ? true: false}                />

        <p>Address</p>
        <input      readOnly={edit ? true: false}               />









        </section>

        













    </div>
}

export default UpdateWebsite