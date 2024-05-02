"use client"
import { useRouter } from "next/navigation";

export default function NotFound() {

     const router = useRouter();
     function navigate(pageName) {
          router.push(pageName)
     }
     return (
          <>
               <div className="d-flex justify-content-center align-items-center not-found-global">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                         <h2 className="h1_title primary-fonts text-center text-capitalize weight-600">
                              Page Not Found
                         </h2>
                         <button className="back-to-home-btn" name="Back To Home Button" onClick={() => navigate('/')}>Back To Home</button>
                    </div>
               </div>
          </>
     );
}
