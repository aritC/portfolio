"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import me from "../public/me.jpg";

const Hero = () => {
  const salutations = [
    "Hi!👋 My name is",
    "नमस्ते!👋 मेरा नाम है",
    "হ্যালো!👋 আমার নাম",
    "¡Hola!👋 Mi nombre es",
    "ہیلو!👋 میرا نام ہے۔",
    "Salut!👋 Je m'appelle",
    "Ciao!👋 Mi chiamo",
    "Oi!👋 Meu nome é",
    "안녕하세요!👋 내 이름은",
    "வணக்கம்!👋 என் பெயர்",
    "Olá!👋 Meu nome é",
    "你好👋 我的名字是",
    "こんにちは👋 私の名前は",
    "Hallo!👋 Mein Name ist",
    "Привет!👋 Меня зовут",
  ];

  const i = useRef(0);
  const [salutation, setSalutation] = useState(salutations[0]);
  const ogName = "ARIT CHANDA";
  const isBrowser = () => typeof window !== "undefined";

  const scrollToSection = () => {
    if (!isBrowser()) return;
    let ele = document.getElementById("contact");
    if (ele) {
      document.body.scrollTo({ top: ele.offsetTop, behavior: "smooth" });
    }
  };

  const [name, setName] = useState(ogName);

  useEffect(() => {
    const interval = setInterval(() => {
      i.current = (i.current + 1) % salutations.length;
      setSalutation(salutations[i.current]);
    }, 2000);

    return () => clearInterval(interval);
  }, [salutation]);

  const hackerEffect = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let i = 0;
    const interval = setInterval(() => {
      setName(
        name
          .split("")
          .map((letter, idx) => {
            if (idx <= i) return ogName[idx];
            if (letter !== " ") return letters[Math.floor(Math.random() * 26)];
            return " ";
          })
          .join("")
      );

      i += 1 / 3;
      if (i >= name.length) {
        clearInterval(interval);
      }
    }, 30);
  };

  return (
    <div className="h-screen w-screen place-items-center grid">
      <div
        className="lg:w-9/12 text-white text-center lg:justify-evenly m-auto flex lg:flex-row flex-col lg:-translate-y-20 relative gap-5"
        id="hero"
      >
        {/* <div className="min-w-50 grid place-items-center">
          <Image
            priority
            src={me}
            className="rounded-3xl m-auto w-3/5 lg:imgsize"
            alt="Arit Chanda"
          />
        </div> */}
        <div className="mt-0 ml-0 p-0 lg:text-left max-w-4xl h-full justify-center flex flex-col">
          <div className="lg:text-lg text-sm pl-0 mt-5 lg:mt-5 lg:pl-7 lg:mb-0 lg:pb-0">
            {salutation}
          </div>
          <div
            className="lg:text-[12rem] text-5xl font-bold mt-0 pt-0 font-mono"
            onMouseEnter={hackerEffect}
          >
            {name}
          </div>
          <div className="text-sm lg:text-lg text-justify lg:p-0 pr-10 pl-10 mb-4 mt-4">
            I am a <strong>Full Stack Developer</strong> with{" "}
            <strong>2 years</strong> of experience and an{" "}
            <strong>MS in Computer Science</strong> from Arizona State
            University, graduating in <strong>May 2023</strong>. My expertise in{" "}
            <strong>front-end</strong> and <strong>back-end development</strong>
            , combined with a knowledge in <strong>NLP</strong> and{" "}
            <strong>Computer Vision</strong>, fuels my passion for creating{" "}
            <strong>innovative</strong> and{" "}
            <strong>user-friendly web based solution</strong>. As a dedicated{" "}
            <strong>problem solver</strong>, I enjoy{" "}
            <strong>collaborating with others</strong> to deliver{" "}
            <strong>high-quality results</strong> that meet the needs of{" "}
            <strong>modern businesses</strong>.
          </div>
          <div className="flex gap-4 mt-1 justify-center lg:justify-start ">
            <button
              className="rounded-full min-w-[10em] h-20 min-h-[4em] relative flex flex-wrap justify-around items-center transition-all bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-size-200 bg-pos-0 hover:bg-pos-100 lg:text-xl font-bold"
              onClick={() => scrollToSection()}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
