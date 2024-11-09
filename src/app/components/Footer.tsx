
 import Image from "next/image";

 import Link from "next/link";


const Footer = () => {
  return(

<div id="section_Footer" className="flex  justify-center text-center space-x-8 " >
  <div className="text-center  flex  mr-9 space-x-80" >
<Image src="/zia pic.png"  width={200} height={200} alt="" className="h-20 w-20 rounded-full"></Image>
<ul className="flex justify-end w-3/5  space-x-11 items-center">
  <li className=""><Link href="/map logo.png "  className="h-11 w-30 grid-flow-row rounded-3xl hover:bg-green-400" ><Image src="/map logo.png" width={30} height={30} alt="map logo" className="h-11 w-11 rounded-3xl"></Image> Google Map</Link></li>
  <li><Link href="/facebook logo.png "  className="h-11 w--1/3 rounded-3xl hover:bg-green-400" ><Image src="/facebook logo.png" width={30} height={30} alt="Facebook logo"></Image>Facebook </Link></li>
  <li><Link href="/logo_twitter.png "  className="h-11 w-1/3 rounded-3xl hover:bg-green-400" ><Image src="/Logo_twitter.png" width={30} height={30} alt="Twitter logo"></Image> Twitter</Link></li>

</ul>
<h1 className="flex justify-end w-3  space-x-6 items-center  ">M Asif Zia</h1>
<p  className="flex justify-end w-3 space-x-6 items-center">Copy rights @ <br />2024 as Govt laws</p>


</div>

</div>

  )
}
export default Footer


