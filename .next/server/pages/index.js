"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./pages/data.js
var data = __webpack_require__(727);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/GameCards.js





function GameCards({
  title,
  img
}) {
  const {
    0: voteCount,
    1: setVoteCount
  } = (0,external_react_.useState)(null);

  const votedGame = event => {
    event.preventDefault();
    setVoteCount(voteCount + 1);
  };

  const unVoteGame = event => {
    event.preventDefault();
    setVoteCount(voteCount - 1);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative border-white cursor-pointer",
      children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: voteCount > 0 ? "voted" : "hidden",
        onClick: unVoteGame,
        children: voteCount
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "border border-gray-50 rounded-xl items-center m-4 hover:shinny-shadow hover:scale-105 transition transform ease-in-out duration-300 ",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "relative h-52 ",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: img,
          layout: "fill",
          className: "h-64 cursor-pointer z-10 object-cover hover:z-0 rounded-t-xl hover:opacity-100 opacity-60 transition transform ease-in-out duration-300",
          onClick: votedGame,
          objectFit: "cover"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "p-2 flex justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "items-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "text-white font-semibold md:text-sm",
            children: title
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "items-center flex space-x-4 justify-between",
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "hover:scale-105 active:scale-150 transition transform ease-out duration-200",
            onClick: votedGame,
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "white",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1",
                d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              })
            })
          })
        })]
      })]
    })]
  });
}

/* harmony default export */ const components_GameCards = (GameCards);
;// CONCATENATED MODULE: ./components/Popular.js




function Popular() {
  return /*#__PURE__*/jsx_runtime_.jsx("center", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "grid grid-cols-3 md:grid-cols-7 md:px-2 items-center mt-40 md:mt-20",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "h-40 md:col-start-3 lg:mt-20 rounded-lg border border-white dropShadow-xl hover:scale-105 hover:-translate-x-6 -rotate-12 transition transform ease-in-out duration-300 ",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "https://www.businessinsider.nl/wp-content/uploads/2016/09/305cddcf2ad1e57389a5c1029987ed366974f3be-800x558.jpg",
          layout: "fill",
          objectFit: "cover",
          className: "h-64 pt-2 object-cover hover:z-0 rounded-lg transition transform ease-in-out duration-300"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "h-52 lg:mt-10 rounded-lg border border-white z-10 dropShadow-xl hover:scale-105 transition transform ease-in-out duration-300 ",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "https://www.businessinsider.nl/wp-content/uploads/2016/09/85811fcae4fe734c517c07b6e177be2171779d9f-800x555.jpg",
          layout: "fill",
          objectFit: "cover",
          className: "h-64 w-64 pt-2 object-cover hover:z-0 rounded-lg transition transform ease-in-out duration-300"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "h-40 lg:mt-20 rounded-lg border border-white -right-20 dropShadow-xl hover:scale-105 hover:translate-x-6 rotate-12 transition transform ease-in-out duration-300 ",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "https://www.businessinsider.nl/wp-content/uploads/2016/09/49242865468e758a572a4cf39c1185231e8d811f-800x581.jpg",
          layout: "fill",
          objectFit: "cover",
          className: "h-5 pt-2 object-cover hover:z-0 rounded-lg transition transform ease-in-out duration-300"
        })
      })]
    })
  });
}

/* harmony default export */ const components_Popular = (Popular);
;// CONCATENATED MODULE: ./components/Hero.js



function Hero() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: " w-full z-0 max-w-lg fixed",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "absolute top-20 -left-105 w-72 h-40 bg-blue-700 rounded-full mix-blend-multiply opacity:5 filter blur-3xl animate-blob animation-delay-3000"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "absolute top-0 -right-2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply opacity:5 filter blur-3xl animate-blob animation-delay-4000"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "absolute -bottom-8 left-50 w-96 h-40 bg-red-600 rounded-full mix-blend-multiply opacity:5 filter blur-3xl animate-blob animation-delay-2000"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "absolute -bottom-40  left-72  w-40 h-72 bg-green-800 rounded-full mix-blend-multiply opacity:5 filter blur-3xl animate-blob animation-delay-2000"
    })]
  });
}

/* harmony default export */ const components_Hero = (Hero);
;// CONCATENATED MODULE: ./pages/index.js








const Home = ({
  exploreGames
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uD83D\uDD79 N64 Voter!"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("body", {
      className: "bg-black flex items-center bg-fixed justify-center px-2 lg:px-16",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: " w-full z-0 max-w-lg fixed",
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Hero, {})
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
        className: "max-w-5xl mx-auto z-10",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
          className: " sticky top-0 h-[360px] md:h-[460px] xl:[600px] 2xl:[700px] bg-fixed",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "justify-items-center",
            children: /*#__PURE__*/jsx_runtime_.jsx(components_Popular, {
              className: "relative lg:mb-20 md:mt-40 space-x-10 "
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mb-40 lg:mx-64",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: " text-xl text-white mt-6 md:text-3xl text-center font-bold md:mt-10 md:p-4 ",
              children: "Most Popular Games at Routinely"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "text-white text-center mb-3 mt-1 md:text-sm md:text-md",
              children: "Vote for your favorite Nintendo 64 games \uD83D\uDE4C"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("section", {
          className: "pt-6 h-[20px] md:h-[60px]",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6 md:gap-y-12",
            children: exploreGames === null || exploreGames === void 0 ? void 0 : exploreGames.map(({
              img,
              title,
              id
            }) => /*#__PURE__*/jsx_runtime_.jsx(components_GameCards, {
              img: img,
              title: title
            }, id))
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const pages = (Home);
async function getStaticProps() {
  return {
    props: {
      exploreGames: data.gameslist
    }
  };
}

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,727], () => (__webpack_exec__(961)));
module.exports = __webpack_exports__;

})();