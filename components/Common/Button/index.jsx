// * style
import style from "./button.module.scss";
import Link from "next/link";
import Image from "next/image";

// * images
import PlayStoreIcon from "@/images/hero_section/icons/play_store.svg";
import AppStoreIcon from "@/images/hero_section/icons/apple_store.svg";

export const PlayStoreButton = () => {
     return (
          <>
               <Link
                    href="https://play.google.com/store/apps/details?id=com.manufacturingbiss.photoAI&hl=en_IN&gl=US&pli=1"
                    name="Play Store Button"
                    target="_blank"
                    title="Play Store Button"
                    className={`${style.download_button} d-flex align-items-center d-inline-block`}
               >
                    <div className="icon">
                         <Image src={PlayStoreIcon} height={34} width={30} alt="Play Store Icon" />
                    </div>
                    <div className="text text-start">
                         <span className="text-small text-uppercase d-block">Get It On</span>
                         <h6 className="text-large capitalize d-block">Play Store</h6>
                    </div>
               </Link>
          </>
     );
};

export const AppStoreButton = () => {
     return (
          <>
               <Link
                    href="https://apps.apple.com/us/app/hd-photo-enhancer-unblur-clear/id1608349830"
                    target="_blank"
                    name="App Store Button"
                    title="App Store Button"
                    className={`${style.download_button} d-flex align-items-center d-inline-block`}
               >
                    <div className="icon">
                         <Image src={AppStoreIcon} height={36} width={30} alt="App Store Icon" />
                    </div>
                    <div className="text text-start">
                         <span className="text-small text-uppercase d-block">Also on the</span>
                         <h6 className="text-large capitalize d-block">App Store</h6>
                    </div>
               </Link>
          </>
     );
};
