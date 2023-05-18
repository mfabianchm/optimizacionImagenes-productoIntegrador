"use strict";
exports.id = 937;
exports.ids = [937];
exports.modules = {

/***/ 2517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeSlashFromPagination = ()=>{
    if (document.querySelectorAll(".swiper-pagination")) {
        document.querySelectorAll(".swiper-pagination").forEach((item)=>{
            item.innerHTML = item.innerHTML.replace(" / ", "");
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeSlashFromPagination);


/***/ }),

/***/ 7296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);



const AboutUs6 = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "about",
        className: "about-ar section-padding",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6 valign",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "img",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bg-img bg-fixed hero-bg",
                                    style: {
                                        backgroundImage: "url(/img/arch/hero.jpg)"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "exp valign text-center",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "full-width",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "bg-img bg-fixed",
                                                style: {
                                                    backgroundImage: "url(/img/arch/hero.jpg)"
                                                },
                                                children: "30"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "A\xf1os de experiencia"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6 valign",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "sub-title main-color ls10 text-u",
                                    children: "Nosotros"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "Somos amantes de la m\xfasica."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Este sitio naci\xf3 con el objetivo de mejorar el proceso de aprendizaje musical, te compartimos una serie de herramientas para que dejes de postergar tu sue\xf1o de aprender a tocar un instrumento musical.\xa1Empieza ahora mismo!"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutUs6);


/***/ }),

/***/ 661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _data_sections_case_study_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5403);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var _common_removeSlashpagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2517);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_5__.EffectFade
]);
const CaseStudy = ()=>{
    const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setTimeout(()=>{
            setLoad(false);
            (0,_common_removeSlashpagination__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
        }, 1000);
    }, []);
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const paginationRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "case-study",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                style: {
                    display: "none"
                },
                children: "\xa0"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "content-carousel-container-unq-1",
                className: "swiper-container",
                "data-swiper": "container",
                children: [
                    !load ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                        effect: "fade",
                        speed: 1000,
                        navigation: {
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current
                        },
                        pagination: {
                            clickable: true,
                            el: paginationRef.current
                        },
                        onBeforeInit: (swiper)=>{
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.params.pagination.el = paginationRef.current;
                        },
                        onSwiper: (swiper)=>{
                            setTimeout(()=>{
                                for(var i = 0; i < swiper.slides.length; i++){
                                    swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                                }
                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                swiper.params.navigation.nextEl = navigationNextRef.current;
                                swiper.params.pagination.el = paginationRef.current;
                                swiper.navigation.destroy();
                                swiper.navigation.init();
                                swiper.navigation.update();
                                swiper.pagination.destroy();
                                swiper.pagination.init();
                                swiper.pagination.update();
                            });
                        },
                        className: "swiper-wrapper",
                        slidesPerView: 1,
                        children: _data_sections_case_study_json__WEBPACK_IMPORTED_MODULE_3__.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                                className: "swiper-slide bg-img",
                                style: {
                                    backgroundImage: `url(${item.image})`
                                },
                                "data-overlay-dark": "7",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container d-flex align-items-end",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Amenidades"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "main-color",
                                                children: item.date
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: item.title
                                            })
                                        ]
                                    })
                                })
                            }, item.id)
                        )
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "controls",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: navigationNextRef,
                                className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fas fa-chevron-right"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: navigationPrevRef,
                                className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fas fa-chevron-left"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "swiper-pagination",
                        ref: paginationRef
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaseStudy);

});

/***/ }),

/***/ 3956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);



const ContactArch = ()=>{
    const messageRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    function validateEmail(value) {
        let error;
        if (!value) {
            error = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = "Invalid email address";
        }
        return error;
    }
    const sendMessage = (ms)=>new Promise((r)=>setTimeout(r, ms)
        )
    ;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "contact-arch",
        className: "contact-sec style2 section-padding position-re bg-img",
        style: {
            backgroundImage: "url(/img/patrn1.png)"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-8 col-md-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "sec-head text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "wow fadeIn",
                                "data-wow-delay": ".3s",
                                children: "Contacto"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "form wow fadeInUp",
                            "data-wow-delay": ".5s",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
                                initialValues: {
                                    name: "",
                                    email: "",
                                    message: ""
                                },
                                onSubmit: async (values)=>{
                                    await sendMessage(500);
                                    alert(JSON.stringify(values, null, 2));
                                    // show message
                                    messageRef.current.innerText = "Your Message has been successfully sent. I will contact you soon.";
                                    // Reset the values
                                    values.name = "";
                                    values.email = "";
                                    values.message = "";
                                    // clear message
                                    setTimeout(()=>{
                                        messageRef.current.innerText = "";
                                    }, 2000);
                                },
                                children: ({ errors , touched  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
                                        id: "contact-form",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "messages",
                                                ref: messageRef
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "controls",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-lg-6",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "form-group",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                                                                    id: "form_name",
                                                                    type: "text",
                                                                    name: "name",
                                                                    placeholder: "Nombre",
                                                                    required: "required"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-lg-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                                                                        validate: validateEmail,
                                                                        id: "form_email",
                                                                        type: "email",
                                                                        name: "email",
                                                                        placeholder: "Email",
                                                                        required: "required"
                                                                    }),
                                                                    errors.email && touched.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        children: errors.email
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-12",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "form-group",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                                                                    as: "textarea",
                                                                    id: "form_message",
                                                                    name: "message",
                                                                    placeholder: "Escribe tu mensaje",
                                                                    rows: "4",
                                                                    required: "required"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-12",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    type: "submit",
                                                                    className: "nb butn light mt-30 full-width",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "ls3 text-u",
                                                                        children: "Enviar Mensaje"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                            })
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactArch);


/***/ }),

/***/ 4954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2806);

/* eslint-disable @next/next/no-img-element */ 

const FooterArch = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "sub-bg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "item md-mb50",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "title",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Cont\xe1ctanos"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "icon pe-7s-map-marker"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            children: "Direcci\xf3n"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Avenida Tamaulipas 540, Colonia Condesa, CDMX."
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "icon pe-7s-mail"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            children: "Email"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "musica@gmail.com"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "icon pe-7s-call"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            children: "N\xfamero Telef\xf3nico"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "+87986451666"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "item md-mb50",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "title",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "\xdaltimos blogs"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/img/img-music/img-10-udg.jpeg",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "sm-post",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Te contamos todo sobre la armon\xeda musical."
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "date main-color",
                                                            children: "06 ago 2022"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/img/img-music/img-09-udg.jpeg",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "sm-post",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Crece tu negocio aplicando lo siguiente."
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "date main-color",
                                                            children: "01 feb 2022"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "subscribe",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        placeholder: "Suscr\xedbete"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "subs pe-7s-paper-plane back-color"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: _data_app_json__WEBPACK_IMPORTED_MODULE_2__/* .lightLogo */ .E8,
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "social",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fab fa-instagram"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fab fa-youtube"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "copy-right",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Negocio de M\xfasica"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterArch);


/***/ }),

/***/ 2435:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _data_sections_intro5_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9405);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var _common_removeSlashpagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2517);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Parallax
]);
const Intro5 = ()=>{
    const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        (0,_common_removeSlashpagination__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
        setTimeout(()=>{
            setLoad(false);
        });
    }, []);
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const paginationRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        id: "arch-slider",
        className: "slider arch-slider",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "swiper-container parallax-slider",
            children: [
                !load ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                    speed: 1000,
                    parallax: true,
                    navigation: {
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    },
                    pagination: {
                        clickable: true,
                        el: paginationRef.current
                    },
                    onBeforeInit: (swiper)=>{
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                        swiper.params.pagination.el = paginationRef.current;
                    },
                    onSwiper: (swiper)=>{
                        setTimeout(()=>{
                            for(var i = 0; i < swiper.slides.length; i++){
                                swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                            }
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.params.pagination.el = paginationRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                            swiper.pagination.destroy();
                            swiper.pagination.init();
                            swiper.pagination.update();
                        });
                    },
                    className: "swiper-wrapper",
                    slidesPerView: 1,
                    children: _data_sections_intro5_json__WEBPACK_IMPORTED_MODULE_3__.map((slide, index)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-img valign",
                                style: {
                                    backgroundImage: `url(${slide.image})`
                                },
                                "data-overlay-dark": "6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "caption mt-30",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                        children: [
                                                            "0",
                                                            index + 1,
                                                            " ."
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        children: typeof slide.title === "object" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: [
                                                                slide.title.first,
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                }),
                                                                " ",
                                                                slide.title.second
                                                            ]
                                                        }) : slide.title
                                                    }),
                                                    (slide === null || slide === void 0 ? void 0 : slide.content) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: slide.content
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        }, slide.id));
                    })
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "setting",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "controls",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    ref: navigationNextRef,
                                    className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "ion-chevron-right"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    ref: navigationPrevRef,
                                    className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "ion-chevron-left"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: paginationRef,
                            className: "swiper-pagination"
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro5);

});

/***/ }),

/***/ 2825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);

/* eslint-disable @next/next/no-img-element */ 

const LatestNews = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "blog section-padding",
        id: "blog-arch",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-8 col-md-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "sec-head text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "wow fadeIn",
                                "data-wow-delay": ".3s",
                                children: "Blogs"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "item md-mb50 wow fadeInUp",
                                "data-wow-delay": ".3s",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img/img-music/img-10-udg.jpeg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "cont",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "date",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        children: "06"
                                                                    }),
                                                                    " Agosto"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "/"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "tag",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "main-color",
                                                                children: "Datos curiosos"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: "Te contamos todo sobre la armon\xeda musical."
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "btn-more",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "simple-btn main-color",
                                                        children: "Leer m\xe1s"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "item md-mb50 wow fadeInUp",
                                "data-wow-delay": ".5s",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img/img-music/img-09-udg.jpeg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "cont",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "date",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        children: "01"
                                                                    }),
                                                                    " Febrero"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "/"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "tag",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "main-color",
                                                                children: "Marketing"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: "Crece tu negocio musical aplicando lo siguiente."
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "btn-more",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "simple-btn main-color",
                                                        children: "Leer m\xe1s"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LatestNews);


/***/ }),

/***/ 4522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navbar_arch)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
;// CONCATENATED MODULE: ./src/common/navbar.js

const handleDropdown = (e)=>{
    getSiblings(e.target.parentElement).filter((item)=>item.classList.contains("show")
    ).map((item)=>{
        item.classList.remove("show");
        if (item.childNodes[0]) {
            item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
            item.childNodes[1].classList.remove("show");
        }
    });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
};
const handleMobileDropdown = (e)=>{
    document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
};

;// CONCATENATED MODULE: ./src/components/Navbar-arch/navbar-arch.jsx

/* eslint-disable @next/next/no-html-link-for-pages */ /* eslint-disable @next/next/no-img-element */ 



const NavbarArch = ({ navbarRef , theme  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar navbar-expand-lg",
        ref: navbarRef,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "logo",
                    href: "/",
                    children: theme ? theme === "themeL" ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: app/* darkLogo */.Q1,
                        alt: "logo"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: app/* lightLogo */.E8,
                        alt: "logo"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: app/* lightLogo */.E8,
                        alt: "logo"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-toggle": "collapse",
                    onClick: handleMobileDropdown,
                    "data-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "icon-bar",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fas fa-bars"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "navbar-nav ml-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link",
                                    to: "about",
                                    spy: true,
                                    smooth: true,
                                    offset: 50,
                                    duration: 500,
                                    children: "Inicio"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link",
                                    to: "about",
                                    spy: true,
                                    smooth: true,
                                    offset: 50,
                                    duration: 500,
                                    children: "Nosotros"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link",
                                    to: "po-arch",
                                    spy: true,
                                    smooth: true,
                                    offset: 50,
                                    duration: 500,
                                    children: "Productos"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link",
                                    to: "team-arch",
                                    spy: true,
                                    smooth: true,
                                    offset: 50,
                                    duration: 500,
                                    children: "Equipo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link",
                                    to: "testimonials-arch",
                                    spy: true,
                                    smooth: true,
                                    offset: 50,
                                    duration: 500,
                                    children: "Testimonios"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link",
                                    to: "blog-arch",
                                    spy: true,
                                    smooth: true,
                                    offset: 50,
                                    duration: 500,
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "nav-link",
                                    to: "contact-arch",
                                    spy: true,
                                    smooth: true,
                                    offset: 50,
                                    duration: 500,
                                    children: "Contacto"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const navbar_arch = (NavbarArch);


/***/ }),

/***/ 3093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);



const Services6 = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "serv-arch",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-fluid",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row justify-content-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-lg col-md-6 item bg-img",
                        style: {
                            backgroundImage: "url(/img/img-music/img-04-udg.jpeg)"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "numb",
                                children: "01"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Clases presenciales"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Consulta nuestra oferta de profesores en las diferentes especialidades con las que contamos."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-lg col-md-6 item bg-img",
                        style: {
                            backgroundImage: "url(/img/img-music/img05-udg.jpeg)"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "numb",
                                children: "02"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Clases Online"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Si no tienes mucho tiempo para desplazarte, esta es la mejor opci\xf3n. Aprende desde casa."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-lg col-md-6 item bg-img",
                        style: {
                            backgroundImage: "url(/img/img-music/img-06-udg.jpeg)"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "numb",
                                children: "03"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Tutoriales"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Tenemos diversos tutoriales gratuitos para que no detengas tu avance musical. \xa1Que esperas!"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-lg col-md-6 item bg-img",
                        style: {
                            backgroundImage: "url(/img/img-music/img-07-udg.jpeg)"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "numb",
                                children: "04"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Blogs"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Te compartimos nuestros art\xedculos semanales, donde podr\xe1s aprender teor\xeda musical, datos interesantes, historia, y mucho m\xe1s..."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-lg col-md-6 item bg-img",
                        style: {
                            backgroundImage: "url(/img/img-music/img-08-udg.jpeg)"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "numb",
                                children: "05"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Art\xedculos"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Dale un vistazo a nuestra tienda, donde podr\xe1s encontrar libros, playeras, llaveros y otras cosas interesantes para los amantes de la m\xfasica."
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services6);


/***/ }),

/***/ 6344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/* eslint-disable @next/next/no-img-element */ 
const Team3 = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "team-arch",
        className: "team section-padding",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-8 col-md-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "sec-head text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "wow fadeIn",
                                "data-wow-delay": ".3s",
                                children: "Nuestro equipo"
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item cir md-mb50",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "img",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img/img-cafeteria/ceo.jpeg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            id: "circle1",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                version: "1.1",
                                                x: "0px",
                                                y: "0px",
                                                width: "300px",
                                                height: "300px",
                                                viewBox: "0 0 300 300",
                                                enableBackground: "new 0 0 300 300",
                                                xmlSpace: "preserve",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            id: "circlePath1",
                                                            d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                        cx: "150",
                                                        cy: "100",
                                                        r: "75",
                                                        fill: "none"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("use", {
                                                                xlinkHref: "#circlePath1",
                                                                fill: "none"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                                                                fill: "#c5a47e",
                                                                className: "custom-font",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textPath", {
                                                                    xlinkHref: "#circlePath1",
                                                                    children: "CEO Manager - CEO Manager - CEO Manager -"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "ls3",
                                                    children: "Rodolfo Huerta"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "main-color fw-600",
                                                    children: "CEO"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item cir md-mb50",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "img",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img/img-cafeteria/marketing.avif",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            id: "circle2",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                version: "1.1",
                                                x: "0px",
                                                y: "0px",
                                                width: "300px",
                                                height: "300px",
                                                viewBox: "0 0 300 300",
                                                enableBackground: "new 0 0 300 300",
                                                xmlSpace: "preserve",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            id: "circlePath2",
                                                            d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                        cx: "150",
                                                        cy: "100",
                                                        r: "75",
                                                        fill: "none"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("use", {
                                                                xlinkHref: "#circlePath2",
                                                                fill: "none"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                                                                fill: "#c5a47e",
                                                                className: "custom-font",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textPath", {
                                                                    xlinkHref: "#circlePath2",
                                                                    children: "Marketing Marketing Marketing"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "ls3",
                                                    children: "Laura Pastrana"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "main-color fw-600",
                                                    children: "Marketing"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item cir sm-mb50",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "img",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img/img-cafeteria/produccion.jpeg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            id: "circle3",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                version: "1.1",
                                                x: "0px",
                                                y: "0px",
                                                width: "300px",
                                                height: "300px",
                                                viewBox: "0 0 300 300",
                                                enableBackground: "new 0 0 300 300",
                                                xmlSpace: "preserve",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            id: "circlePath3",
                                                            d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                        cx: "150",
                                                        cy: "100",
                                                        r: "75",
                                                        fill: "none"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("use", {
                                                                xlinkHref: "#circlePath3",
                                                                fill: "none"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                                                                fill: "#c5a47e",
                                                                className: "custom-font",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textPath", {
                                                                    xlinkHref: "#circlePath3",
                                                                    children: "Producci\xf3n Producci\xf3n Producci\xf3n"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "ls3",
                                                    children: "Carlos Dom\xednguez"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "main-color fw-600",
                                                    children: "Producci\xf3n"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Team3);


/***/ }),

/***/ 9666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable @next/next/no-img-element */ 



class TestimonialsArch extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(props){
        super(props);
    }
    renderArrows = ()=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "arrows",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>this.slider.slickNext()
                        ,
                        className: "next cursor-pointer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "pe-7s-angle-right"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>this.slider.slickPrev()
                        ,
                        className: "prev cursor-pointer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "pe-7s-angle-left"
                        })
                    })
                ]
            })
        }));
    };
    render() {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            id: "testimonials-arch",
            className: "testimonials section-padding position-re",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-8 col-md-10",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "sec-head text-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "wow fadeIn",
                                    "data-wow-delay": ".3s",
                                    children: "Testimonios"
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container-fluid position-re",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row wow fadeInUp",
                            "data-wow-delay": ".5s",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    className: "slic-item",
                                    ref: (c)=>this.slider = c
                                    ,
                                    dots: false,
                                    infinite: true,
                                    arrows: true,
                                    centerMode: true,
                                    autoplay: true,
                                    rows: 1,
                                    slidesToScroll: 1,
                                    slidesToShow: 3,
                                    responsive: [
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 1,
                                                centerMode: false
                                            }
                                        },
                                        {
                                            breakpoint: 767,
                                            settings: {
                                                slidesToShow: 1,
                                                centerMode: false
                                            }
                                        },
                                        {
                                            breakpoint: 480,
                                            settings: {
                                                slidesToShow: 1,
                                                centerMode: false
                                            }
                                        }, 
                                    ],
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "info inf-lrg valign",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "cont",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "author",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "/img/img-cafeteria/testimonialMan01.jpeg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                    className: "author-name color-font",
                                                                    children: "Marcos Garc\xeda"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "valign",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "fz-20 fw-200",
                                                        children: "Este es el mejor sitio para aprender m\xfasica, sin duda lo recomiendo."
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "info inf-lrg valign",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "cont",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "author",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "/img/img-cafeteria/testiomialWoman.webp",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                    className: "author-name color-font",
                                                                    children: "Karla Garc\xeda"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "valign",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "fz-20 fw-200",
                                                        children: "A mi familia le encanta cuando toco el piano y todo gracias a esta escuela."
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "info inf-lrg valign",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "cont",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "author",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "/img/img-cafeteria/testimonialMan02.jpeg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                    className: "author-name color-font",
                                                                    children: "Antonio Carrazco"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "valign",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "fz-20 fw-200",
                                                        children: "Me dieron todo lo necesario para comenzar a interpretar mis canciones favoritas en la guitarra."
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "info inf-lrg valign",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "cont",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "author",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "/img/img-cafeteria/TestimonialMan03.jpeg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                    className: "author-name color-font",
                                                                    children: "Mauricio David"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "valign",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "fz-20 fw-200",
                                                        children: "Realmente tienes los mejores precios del mercado, no los encontrar\xe1s en otro lugar."
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        this.renderArrows()
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "line-v top"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "line-v bottom"
                })
            ]
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialsArch);


/***/ }),

/***/ 9910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ works_style5)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/common/initIsotope.js
const initIsotope = ()=>{
    var grid = document.querySelectorAll(".gallery");
    var iso;
    if (grid.length >= 1) {
        grid.forEach((item)=>{
            iso = new Isotope(item, {
                itemSelector: ".items"
            });
        });
    }
    var gridMons = document.querySelectorAll(".gallery-mons");
    if (gridMons.length >= 1) {
        gridMons.forEach((item)=>{
            iso = new Isotope(item, {
                itemSelector: ".items",
                masonry: {
                    columnWidth: ".width2"
                }
            });
        });
    }
    var filtersElem = document.querySelector(".filtering");
    if (filtersElem) {
        filtersElem.addEventListener("click", function(event) {
            if (!matchesSelector(event.target, "span")) {
                return;
            }
            var filterValue = event.target.getAttribute("data-filter");
            filterValue = filterValue;
            iso.arrange({
                filter: filterValue
            });
        });
        var buttonGroups = document.querySelectorAll(".filtering");
        for(var i = 0, len = buttonGroups.length; i < len; i++){
            var buttonGroup = buttonGroups[i];
            radioButtonGroup(buttonGroup);
        }
        function radioButtonGroup(buttonGroup) {
            buttonGroup.addEventListener("click", function(event) {
                if (!matchesSelector(event.target, "span")) {
                    return;
                }
                buttonGroup.querySelector(".active").classList.remove("active");
                event.target.classList.add("active");
            });
        }
    }
};
/* harmony default export */ const common_initIsotope = (initIsotope);

;// CONCATENATED MODULE: ./src/components/Works-style5/works-style5.jsx

/* eslint-disable @next/next/no-img-element */ 


const WorksStyle5 = ()=>{
    external_react_default().useEffect(()=>{
        setTimeout(()=>{
            common_initIsotope();
        }, 1000);
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "portfolio po-arch section-padding pb-70",
        id: "po-arch",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8 col-md-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "sec-head text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "wow fadeIn",
                                "data-wow-delay": ".3s",
                                children: "Productos"
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "filtering col-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "filter custom-font wow fadeIn",
                                "data-wow-delay": ".5s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-filter": "*",
                                        className: "active",
                                        children: "Todos"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-filter": ".brand",
                                        children: "Instrumentos"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-filter": ".web",
                                        children: "Accesorios"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-filter": ".graphic",
                                        children: "Otros"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "gallery full-width",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-md-6 items graphic lg-mr wow fadeInUp",
                                    "data-wow-delay": ".4s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "item-img",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "imago wow",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/img-music/img-06-udg.jpeg",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "item-img-overlay"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "cont",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Partituras"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "tags main-color custom-font",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/",
                                                            children: "Otros"
                                                        }),
                                                        ",",
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/",
                                                            children: "$250MXN"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-md-6 items web wow fadeInUp",
                                    "data-wow-delay": ".4s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "item-img",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "imago wow",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/img-music/flauta-producto.webp",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "item-img-overlay"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "cont",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Flauta"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "tags main-color custom-font",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/",
                                                            children: "Accesorios"
                                                        }),
                                                        ",",
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/",
                                                            children: "$400 MXN"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-md-6 items web wow fadeInUp",
                                    "data-wow-delay": ".4s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "item-img",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "imago wow",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/img-music/violin-producto.webp",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "item-img-overlay"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "cont",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Viol\xedn"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "tags main-color custom-font",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/",
                                                            children: "Accesorios"
                                                        }),
                                                        ",",
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/",
                                                            children: "$4000 MXN"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-md-6 items web graphic wow fadeInUp",
                                    "data-wow-delay": ".4s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "item-img",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "imago wow",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/img-music/cuerdas-producto.jpeg",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "item-img-overlay"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "cont",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Cuerdas de Guitarra"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "tags main-color custom-font",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/",
                                                            children: "Accesorios"
                                                        }),
                                                        ",",
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/",
                                                            children: "$140 MXN"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-md-6 items brand wow fadeInUp",
                                    "data-wow-delay": ".4s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "item-img",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "imago wow",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/img-music/guitarra-producto.webp",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "item-img-overlay"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "cont",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Guitarra"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "tags main-color custom-font",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/",
                                                            children: "Instrumentos"
                                                        }),
                                                        ",",
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/",
                                                            children: "$1200 MXN"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-md-6 items brand wow fadeInUp",
                                    "data-wow-delay": ".4s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "item-img",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "imago wow",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/img-music/piano-producto.webp",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "item-img-overlay"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "cont",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Piano"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "tags main-color custom-font",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/",
                                                            children: "Instrumentos"
                                                        }),
                                                        ",",
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/",
                                                            children: "$16000 MXN"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const works_style5 = (WorksStyle5);


/***/ }),

/***/ 371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable @next/next/no-css-tags */ 

const LightTheme = ({ children , mobileappstyle  })=>{
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        window.theme = "light";
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/light.css"
                    }),
                    mobileappstyle ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "/css/mobile-app-light.css",
                        rel: "stylesheet"
                    }) : ""
                ]
            }),
            children
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LightTheme);


/***/ }),

/***/ 5937:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_Light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(371);
/* harmony import */ var _components_Team3_team3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6344);
/* harmony import */ var _components_Intro5_intro5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2435);
/* harmony import */ var _components_About_us6_about_us6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7296);
/* harmony import */ var _components_Services6_services6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3093);
/* harmony import */ var _components_Case_study_case_study__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(661);
/* harmony import */ var _components_Navbar_arch_navbar_arch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4522);
/* harmony import */ var _components_Latest_news_latest_news__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2825);
/* harmony import */ var _components_Works_style5_works_style5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9910);
/* harmony import */ var _components_Footer_arch_footer_arch_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4954);
/* harmony import */ var _components_Contact_arch_contact_arch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3956);
/* harmony import */ var _components_Testimonials_arch_testimonials_arch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9666);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Case_study_case_study__WEBPACK_IMPORTED_MODULE_8__, _components_Intro5_intro5__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Case_study_case_study__WEBPACK_IMPORTED_MODULE_8__, _components_Intro5_intro5__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

/* eslint-disable @next/next/no-page-custom-font */ /* eslint-disable @next/next/no-css-tags */ 













const Homepage = ()=>{
    const navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        var navbar = navbarRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            } else {
                navbar.classList.remove("nav-scroll");
            }
        });
    }, [
        navbarRef
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        defer: true,
                        href: "/css/arch-skin-light.css"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Light__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar_arch_navbar_arch__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        navbarRef: navbarRef,
                        theme: "themeL"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Intro5_intro5__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About_us6_about_us6__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services6_services6__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Works_style5_works_style5__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Case_study_case_study__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Team3_team3__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Testimonials_arch_testimonials_arch__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Latest_news_latest_news__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Contact_arch_contact_arch__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_arch_footer_arch_jsx__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);

});

/***/ }),

/***/ 2806:
/***/ ((module) => {

module.exports = JSON.parse('{"E8":"/img/guitarra.png","Q1":"/img/guitarra.png","QP":true}');

/***/ }),

/***/ 5403:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"image":"/img/img-cafeteria/header02.jpeg","title":"INSTALACIONES DE PRIMERA","date":"Instalaciones modernas"},{"id":2,"image":"/img/img-cafeteria/internetcafe.jpeg","title":"INTERNET ULTRA RÁPIDO","date":"Fibra óptica"},{"id":3,"image":"/img/img-cafeteria/climaacondicionado.jpeg","title":"CLIMA ACONDICIONADO","date":"Aclimatado"}]');

/***/ }),

/***/ 9405:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":{"first":"Aprende a tocar","second":"tu instrumento favorito."},"content":"Todo esto, desde la comodidad de tu hogar.","image":"/img/img-music/img-01-udg.jpeg"},{"id":2,"title":"Te contamos todos los secretos de la música.","content":"Profesores con amplia experiencia.","image":"/img/img-music/img02-udg.jpeg"},{"id":3,"title":{"first":"Aprendizaje continuo","second":"Continúa aprendiendo."},"content":"Consulta los diferentes artículos que tenemos para tí.","image":"/img/img-music/img03-udg.jpeg"}]');

/***/ })

};
;