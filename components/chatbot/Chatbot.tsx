"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosRefresh } from "react-icons/io";
import "./Chatbot.css";

const Chatbot = () => {
  interface Data {
    [key: string]: {
      title: string[];
      options: string[];
      url?: {
        more?: string;
        link?: string[];
      };
    };
  }

  const data: Data = {
    chatinit: {
      title: [
        "Hello <span class='emoji'> &#128075;</span>",
        "I am Mr. Chatbot",
        "How can I help you?",
      ],
      options: [
        "New <span class='emoji'> &#128250;</span>",
        "AODAI",
        "Shopping <span class='emoji'> &#128090;</span>",
      ],
    },
    movies: {
      title: ["Please select category"],
      options: ["Hollywood", "Bollywood", "Web Series", "Others"],
      url: {},
    },

    news: {
      title: ["Today's Top 5 Headlines"],
      options: [
        "The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA.",
        "The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA.",
        "The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA.",
      ],
      url: {
        more: "https://www.youtube.com/@webhub/videos",
        link: [
          "https://www.youtube.com/@webhub/videos",
          "https://www.youtube.com/@webhub/videos",
          "https://www.youtube.com/@webhub/videos",
          "https://www.youtube.com/@webhub/videos",
        ],
      },
    },
    shopping: {
      title: [
        "Thanks for your response",
        "Welcome to shopping zone <span class='emoji'> &#128090;</span>",
        "Please select one of the below options to proceed further",
      ],
      options: [
        "Electronics",
        "Beauty products",
        "Mobiles",
        "Men Fashion",
        "Women fashion",
      ],
      url: {},
    },
    electronics: {
      title: [
        "Thanks for your response",
        "Here are some electronic items for you",
        "Click on it to know more",
      ],
      options: [
        "Televisions",
        "Cameras",
        "Gaming Consoles",
        "Headphones",
        "Speakers",
      ],
      url: {
        more: "https://www.youtube.com/@webhub/videos",
        link: ["#", "#", "#", "#", "#"],
      },
    },
    beauty: {
      title: [
        "Thanks for your response",
        "Here are some beauty products for you",
        "Click on it to know more",
      ],
      options: ["Make-up & Nails", "Skin Care", "Fragrance", "Hair care"],
      url: {
        more: "https://www.youtube.com/@webhub/videos",
        link: ["#", "#", "#", "#"],
      },
    },
    mobiles: {
      title: [
        "Thanks for your response",
        "These are some results based on your input",
        "Click on it to know more",
      ],
      options: ["Mobile Phones", "Cases & Covers", "Power Banks", "Tablets"],
      url: {
        more: "https://www.youtube.com/@webhub/videos",
        link: ["#", "#", "#", "#"],
      },
    },
    men: {
      title: [
        "Thanks for your response",
        "These are some results based on your input",
        "Click on it to know more",
      ],
      options: ["Clothing", "Shirts", "T-shirts", "Innerwear", "Jeans"],
      url: {
        more: "https://www.youtube.com/@webhub/videos",
        link: ["#", "#", "#", "#", "#"],
      },
    },
    women: {
      title: [
        "Thanks for your response",
        "These are some results based on your input",
        "Click on it to know more",
      ],
      options: ["Clothing", "Western Wear", "Ethnic Wear", "Top Brands"],
      url: {
        more: "https://www.youtube.com/@webhub/videos",
        link: ["#", "#", "#", "#"],
      },
    },
    music: {
      title: [
        "These are some latest songs <span class='emoji'> &#127925;</span>",
      ],
      options: ["song 1", "song 2", "song 3", "song 4", "song 5"],
      url: {
        more: "https://www.youtube.com/@webhub/videos",
        link: [
          "https://www.youtube.com/@webhub/videos",
          "https://www.youtube.com/@webhub/videos",
          "https://www.youtube.com/@webhub/videos",
          "https://www.youtube.com/@webhub/videos",
        ],
      },
    },
    hollywood: {
      title: ["Thanks for your response", "Here are some genre based movies"],
      options: ["Comedy", "Horror", "Sci-Fi", "Romance", "Action"],
      url: {
        more: "https://www.youtube.com/@webhub/videos",
        link: ["#", "#", "#", "#", "#"],
      },
    },
    bollywood: {
      title: ["Thanks for your response", "Here are some genre based movies"],
      options: ["Comedy", "Horror", "Sci-Fi", "Romance", "Action"],
      url: {
        more: "https://www.youtube.com/@webhub/videos",
        link: ["#", "#", "#", "#", "#"],
      },
    },
    web: {
      title: [
        "Thanks for your response",
        "Here are some genre based web series",
      ],
      options: ["Comedy", "Horror", "Sci-Fi", "Romance", "Action"],
      url: {
        more: "https://www.youtube.com/@webhub/videos",
        link: ["#", "#", "#", "#", "#"],
      },
    },
    others: {
      title: ["Here are some more options for you"],
      options: ["YouTube", "Netflix", "Amazon Prime", "Hot Star"],
      url: {
        more: "https://www.youtube.com/",
        link: ["#", "#", "#", "#", "#"],
      },
    },
  };

  const [showChat, setShowchat] = useState(false);
  const handleClick = () => {
    setShowchat(!showChat);
    if (showChat) {
      initChat();
    }
  };
  const cbot = document.getElementById("chat-box")!;
  const len1 = data.chatinit.title.length;
  let j = 0;

  function initChat() {
    j = 0;
    cbot.innerHTML = "";
    for (let i = 0; i < len1; i++) {
      setTimeout(handleChat, i * 500);
    }
    setTimeout(() => {
      showOptions(data.chatinit.options);
    }, (len1 + 1) * 500);
  }

  function handleChat() {
    console.log(j);
    const elm = document.createElement("p");
    elm.innerHTML = data.chatinit.title[j];
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
  }

  function showOptions(options: string[]) {
    for (let i = 0; i < options.length; i++) {
      const opt = document.createElement("span");
      const inp = "<div>" + options[i] + "</div>";
      opt.innerHTML = inp;
      opt.setAttribute("class", "opt");
      opt.addEventListener("click", handleOpt);
      cbot.appendChild(opt);
      handleScroll();
    }
  }

  function handleOpt(this: HTMLElement) {
    console.log(this);
    const str = this.innerText;
    const textArr = str.split(" ");
    const findText = textArr[0];

    document.querySelectorAll(".opt").forEach((el) => {
      el.remove();
    });
    const elm = document.createElement("p");
    elm.setAttribute("class", "test");
    const sp = '<span class="rep">' + this.innerText + "</span>";
    elm.innerHTML = sp;
    cbot.appendChild(elm);

    const nextOp = findText.toLowerCase();
    const tempObj = data.nextOp;
    handleResults(tempObj.title, tempObj.options, tempObj.url);
  }

  function handleDelay(title: string) {
    const elm = document.createElement("p");
    elm.innerHTML = title;
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
  }

  function handleResults(
    title: string[],
    options: string[],
    url?: { more?: string; link?: string[] }
  ) {
    for (let i = 0; i < title.length; i++) {
      setTimeout(() => {
        handleDelay(title[i]);
      }, i * 500);
    }

    const isObjectEmpty = (url?: { more?: string; link?: string[] }) => {
      return JSON.stringify(url) === "{}";
    };

    if (isObjectEmpty(url) == true) {
      console.log("having more options");
      setTimeout(() => {
        showOptions(options);
      }, title.length * 500);
    } else {
      console.log("end result");
      setTimeout(() => {
        handleOptions(options, url);
      }, title.length * 500);
    }
  }

  function handleOptions(
    options: string[],
    url?: { more?: string; link?: string[] }
  ) {
    for (let i = 0; i < options.length; i++) {
      const opt = document.createElement("span");
      const inp =
        '<a class="m-link" href="' + url?.more + '">' + options[i] + "</a>";
      opt.innerHTML = inp;
      opt.setAttribute("class", "opt");
      cbot.appendChild(opt);
    }
    const opt = document.createElement("span");
    const inp = '<a class="m-link" href="' + url?.more + '">' + "See more</a>";

    const isObjectEmpty = (url?: { more?: string; link?: string[] }) => {
      return JSON.stringify(url) === "{}";
    };

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt link");
    cbot.appendChild(opt);
    handleScroll();
  }

  function handleScroll() {
    const elem = document.getElementById("chat-box")!;
    elem.scrollTop = elem.scrollHeight;
  }

  return (
    <>
      <div className="">
        <button
          id="init"
          className="btn btn-circle fixed bottom-4 right-4 bg-primary animate-bounce"
          onClick={() => handleClick()}
        >
          <Image
            src="/images/chatbot (1).png"
            alt="avatar"
            id="avatar"
            width={40}
            height={40}
          />
        </button>
      </div>

      <div
        id="test"
        className={`fixed bottom-16 right-16 ${showChat ? "" : "hidden"}`}
      >
        <div
          className="bg-violet-100 m-auto w-[16rem] h-[24rem] rounded-lg relative border-[1px] border-gray-600"
          id="chatbot"
        >
          <div className="header flex justify-between absolute bg-violet-400 w-full rounded-t-lg">
            <div className="drop-shadow-lg rounded-full flex pl-2">
              <Image
                src="/images/chatbot (1).png"
                alt="avatar"
                id="avatar"
                width={40}
                height={40}
              />
              <div className="grid pl-2 mt-2 text-[10px]">
                <span className="">Chatbot</span>

                <span style={{ color: "lawngreen" }}>online</span>
              </div>
            </div>
            <div>
              <button
                onClick={() => initChat()}
                className="top-2 right-2 relative"
              >
                <IoIosRefresh />
              </button>
            </div>
          </div>

          <div id="chat-box" className="relative top-10"></div>
          <div className=" footer bottom-0 absolute bg-violet-400 w-full rounded-b-lg text-center p-[10px] justify-center text-[10px]">
            <span>Powered by @Long</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
