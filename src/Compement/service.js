import design from "../assets/Service/design.jpg"
import connect from "../assets/Service/connect.mp4"
import podcast from "../assets/Service/podcast.png"  
import event from "../assets/Service/event.mp4"





function Service(){
return (

<div className="p-10 md:flex-row flex flex-col gap-5" >

<div className=" md:w-1/2 flex flex-col gap-4"  >


<div className="h-[500px] w-full shadow-sm  ">
<img src={design } className="rounded-3xl w-full h-[500px]" />
</div>

<div className="h-[350px]  w-full shadow-sm    ">
<img src={podcast } className="w-full rounded-3xl h-[350px]  " />

</div>


<div className="aspect-video  w-full shadow-sm  ">
 <video  autoPlay
      muted
      loop
      playsInline  className="  object-cover h-[500px]  rounded-3xl  w-full ">
              <source src={connect} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
</div>



</div>







<div className=" md:w-1/2 flex flex-col gap-4"  >


<div className="h-[350px]   w-full shadow-sm aspect-video ">
<video  autoPlay
      muted
      loop
      playsInline  className="  object-cover h-[300px]  rounded-3xl  w-full ">
              <source src={event} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
     <p className="text-3xl p-3 font-bold" > Event  </p>       
</div>

<div className="h-[500px]  w-full shadow-sm    ">
<img src={podcast } className="w-full rounded-3xl h-[500px]  " />

</div>


<div className="aspect-video  w-full shadow-sm  ">
 <video  autoPlay
      muted
      loop
      playsInline  className="  object-cover h-[500px]  rounded-3xl  w-full ">
              <source src={connect} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
</div>



</div>


</div>

)
}
export default Service