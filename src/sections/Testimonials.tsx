"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const group1 = testimonials.slice(0, 3);
const group2 = testimonials.slice(3, 6);
const group3 = testimonials.slice(6, 9);

const Card = ({
  text,
  imageSrc,
  name,
  username,
}: {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}) => {
  return (
    <li className="flex flex-col items-center gap-4 p-8 nice-shadow bg-white max-w-[400px] mx-auto">
      <div>
        <p className="text-black/50">{text}</p>
      </div>
      <div className="flex gap-2 justify-start items-center pt-8 w-full">
        <Image
          src={imageSrc}
          alt={name}
          width={40}
          height={40}
          className="rounded-full h-[60px] w-[60px]"
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-black/50">{username}</p>
        </div>
      </div>
    </li>
  );
};

export const Testimonials = () => {
  const t = useTranslations("testimonials");
  return (
    <section className="container py-24 bg-white overflow-clip" id="comments">
      <div className="flex items-center justify-center">
        <div className="tag-style">{t("tag")}</div>
      </div>
      <h2 className="title-style text-center mx-auto md:max-w-[670px] py-6">
        {t("title")}
      </h2>
      <p className="sub-title-style mx-auto md:max-w-[800px] text-center">
        {t("sub-title")}
      </p>
      <div className="flex gap-8 mt-14 items-center justify-center overflow-hidden max-h-[970px] items-effect2">
        {/* group1 */}
        <motion.ul
          animate={{ translateY: "-40%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 22,
            ease: "linear",
          }}
          className="flex flex-col gap-4   overflow-hidden "
        >
          {[...new Array(4)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {group1.map((testimonial, index) => (
                <Card
                  key={index}
                  text={t(testimonial.username)}
                  imageSrc={testimonial.imageSrc}
                  name={testimonial.name}
                  username={testimonial.username}
                />
              ))}
            </React.Fragment>
          ))}
        </motion.ul>
        {/* group2 */}
        <motion.ul
          animate={{ translateY: "-40%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
          className="hidden md:flex flex-col gap-4   overflow-hidden "
        >
          {[...new Array(4)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {group2.map((testimonial, index) => (
                <Card
                  key={index}
                  text={t(testimonial.username)}
                  imageSrc={testimonial.imageSrc}
                  name={testimonial.name}
                  username={testimonial.username}
                />
              ))}
            </React.Fragment>
          ))}
        </motion.ul>
        {/* group3 */}
        <motion.ul
          animate={{ translateY: "-40%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 24,
            ease: "linear",
          }}
          className="hidden lg:flex flex-col gap-4   overflow-hidden "
        >
          {[...new Array(4)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {group3.map((testimonial, index) => (
                <Card
                  key={index}
                  text={t(testimonial.username)}
                  imageSrc={testimonial.imageSrc}
                  name={testimonial.name}
                  username={testimonial.username}
                />
              ))}
            </React.Fragment>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
