import { JSX, useState } from "react";
import { Carousel } from "../components/auth/Carousel";
import {
  ArrowIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SeamlessIcon,
  SecureIcon,
  TransparentIcon,
} from "../assets/icons";
import { colors } from "../assets/colors";
import "../styles/screens/auth.scss";
import { signIn } from "@junobuild/core";
import { useNavigate } from "react-router-dom";
import { useCreateCompany } from "../state/state";



export default function Auth(): JSX.Element {
  const{setId,id}=useCreateCompany((state:any)=>state);
  const navigation = useNavigate();
  const [curridx, setcurridx] = useState<number>(0);
  const [acctype, setacctype] = useState<string>("");

  const carouselcontent = [
    { dptext: "Transparent", icon: <TransparentIcon /> },
    { dptext: "Seamless", icon: <SeamlessIcon /> },
    { dptext: "Secure", icon: <SecureIcon /> },
  ];

  const onscrolltonext = (): void => {
    curridx == carouselcontent.length - 1
      ? setcurridx(0)
      : setcurridx((previdx) => previdx + 1);
  };

  const onscrolltoprev = (): void => {
    curridx == 0
      ? setcurridx(carouselcontent.length - 1)
      : setcurridx((previdx) => previdx - 1);
  };

  return (
    <>
      <section className="main">
        <div className="left_sect">
          {curridx == 0 && (
            <Carousel
              dptext={carouselcontent[0]?.dptext}
              icon={carouselcontent[0]?.icon}
            />
          )}

          {curridx == 1 && (
            <Carousel
              dptext={carouselcontent[1]?.dptext}
              icon={carouselcontent[1]?.icon}
            />
          )}

          {curridx == 2 && (
            <Carousel
              dptext={carouselcontent[2]?.dptext}
              icon={carouselcontent[2]?.icon}
            />
          )}

          <div className="chevrons_">
            <button onClick={onscrolltoprev}>
              <ChevronLeftIcon />
            </button>

            {carouselcontent.map((cntnt, idx) => (
              <div
                key={idx}
                className="indicator_"
                style={{
                  backgroundColor:
                    curridx == idx ? colors.text_primary : colors.secondary,
                }}
              />
            ))}

            <button onClick={onscrolltonext}>
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        <div className="right_sect">
          <button className="inv_" onClick={() => setacctype("inv")}>
            <span className="writeup">
              <p className="title">Start as an Investor</p>
              <p className="description">
                Extend your portfolio by accessing a wide range of investment
                opportunities
              </p>
            </span>

            <span
              className="radio"
              style={{
                backgroundColor:
                  acctype == "inv" ? colors.text_secondary : "transparent",
              }}
            />
          </button>

          <button onClick={() => setacctype("bns")}>
            <span className="writeup">
              <p className="title">Start as a Company</p>
              <p className="description">
                Unlock unprecedented access to global investors, democratise
                ownership
              </p>
            </span>

            <span
              className="radio"
              style={{
                backgroundColor:
                  acctype == "bns" ? colors.text_secondary : "transparent",
              }}
            />
          </button>

          <button
            // disabled={acctype == "" ? true : false}
            className="signin"
            onClick={() => {
             
              signIn()
                .then((data) => {
                  console.log(JSON.stringify(data))
                  setId(data)
                  navigation("onBoarding");
                })
                .catch((e) => {
                  //
                });
            }}
            style={{ cursor: acctype == "" ? "not-allowed" : "pointer" }}
          >
            <span>Sign in with internet identity</span>
            <ArrowIcon />
          </button>
        </div>
      </section>
    </>
  );
}
