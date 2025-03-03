import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

const contactCards = [
  {
    icon: "/cards/c1.svg",
    content: "suparnassa@gmail.com",
    link: "mailto:suparnassa@gmail.com",
  },
  {
    icon: "/cards/c2.svg",
    content: "+91 9845115539",
    link: "tel:+919845115539",
  },
  {
    icon: "/cards/c3.svg",
    content: "Main Headquarters",
    link: "#",
  },
  {
    icon: "/cards/c4.svg",
    content: (
      <div className="flex items-center gap-4">
        <span>Instagram</span>
        <span>LinkedIn</span>
        <span>Facebook</span>
      </div>
    ),
    link: null,
    socialLinks: [
      {
        name: "Instagram",
        icon: <Instagram className="h-5 w-5" />,
        url: "https://instagram.com",
      },
      {
        name: "LinkedIn",
        icon: <Linkedin className="h-5 w-5" />,
        url: "https://linkedin.com",
      },
      {
        name: "Facebook",
        icon: <Facebook className="h-5 w-5" />,
        url: "https://facebook.com",
      },
    ],
  },
];
const Cards = () => {
  return (
    <div className="">
      <div className="">
        <div className="w-full mx-auto py-[50px] md:py-[100px] px-[16px] md:px-[80px]  bg-[#FFE4CF]">
          <h2 className="text-[28px] md:text-[38px] font-semibold text-[#242424] mb-[10px]">
            Get in Touch with Suparnassa
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#242424] max-w-7xl">
            Welcome to Estatein's Contact Us page. We're here to assist you with
            any inquiries, requests, or feedback you may have. Whether you're
            looking to explore investment opportunities, or simply want to
            connect, we're just a message away. Reach out to us, and let's start
            a conversation.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[10px] md:grid-cols-2 lg:grid-cols-4 p-[10px] border-y border-[#262626]">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#D0A88A] rounded-[10px] p-8 flex flex-col border border-[#262626] items-center justify-center relative overflow-hidden text-white"
            >
              {card.icon && (
                <div className="mb-[16px]">
                  <img src={card.icon} alt="stars" className="" />
                </div>
              )}

              {card.socialLinks ? (
                <div className="flex flex-col items-center">
                  <div className="flex flex-wrap items-center justify-center gap-0 md:gap-[15px]">
                    {card.socialLinks.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        className=""
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-[16px] text-center font-medium">{card.content}</div>
              )}

              <div className="absolute top-4 right-4">
                <ArrowUpRight className="h-5 w-5 " />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
