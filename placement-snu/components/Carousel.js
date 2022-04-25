import styles from "../styles/carousel.module.css";
import Link from "next/link";
import Image from 'next/image';
import img1 from "../public/assets/p-1.png";
import img2 from "../public/assets/p-2.png";
import img3 from "../public/assets/p-3.png";
import img4 from "../public/assets/p-4.png";
import img5 from "../public/assets/p-5.png";
  
export default function Carousel() {
   
    return (
     <>
        <div className={styles.slider}>

            
        
            <div className={styles.slides}>
              <div name="slide-1" id="slide-1">
                <Image  src={img1}   alt="1" /> 
              </div>

              <div name="slide-2" id="slide-2">
                <Image  src={img2}   alt="2"  /> 
              </div>
              <div id="slide-3">
                <Image  src={img3}   alt="3"  /> 
              </div>
              <div id="slide-4">
                <Image  src={img4}   alt="4"  /> 
              </div>
              <div id="slide-5">
                 <Image  src={img5}   alt="5"  /> 
              </div>
            </div>

    
          </div>
     </>

   );
       
}