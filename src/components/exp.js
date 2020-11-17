const json = [
    {
        "company": "FlyingCat",
        "anchor": "https://myflyingcat.com",
        "role": "프론트엔드 개발자",
        "activity": "웹 프론트엔드(reactJS) 및 앱 프론트엔드(react-native) 개발",
        "act1": "프론트엔드 개발 리드, 개발 방향성 정립",
        "act2": "react-native를 활용한 앱 제작(android, ios)",
        "act3": "반응형 스타일링 체계 확립",
        "tools": "Styled-components, Material-ui // React, React-Native, JS // HTML, JSX // Android studio, Xcode",
        "cheevo1": "Ios, Android full-feature(푸시 알림, 유저 tracking, codepush 등) 앱 제작",
        "cheevo2": "State management structure(redux) 구조 도입",
        "cheevo3": "웹 및 앱 responsive layout 코드 구조 정립",
        "timelocaiton": "2019 4월 - 2020 8월 | 서울 강남구",
    },
    {
        "company": "Code States",
        "anchor": "https://www.codestates.com",
        "role": "프론트엔드 교육과정 수강생",
        "activity": "웹 프론트앤드 개발 교육 수강",
        "act1": "웹 개발 기초(html, css, reactJS)",
        "act2": "Javascript 기초 & 중급 문법 및 es6",
        "act3": "NodeJS 서버 구축",
        // "tools": "Styled-components, Material-ui // React, React-Native, JS // HTML, JSX // Android studio, Xcode",
        "cheevo1": "졸업 프로젝트 react-native 앱 제작(vegetas), 채식주의자를 위한 식당 추천 앱",

        "timelocaiton": "2018 12월 - 2019년 4월 | 서울 성동구",
    },
    {
        "company": "Tangent",
        "anchor": "http://tangentkorea.com/",
        "role": "게임 앱 글로벌 QA, 앱 Localization",
        "activity": "게이밍 앱 IP 소유회사 Cartoon Network 측과의 소통, 통번역 담당",
        "act1": "Cartoon Network 측 Character Team과의 회의 통번역",
        "act2": "Jira 툴 활용, 실시간 global QA와의 issue tracking",
        "act3": "Helpshift 활용, global CS 인력 담당",
        "tools": "Jira",
        "cheevo1": "Adventure time run, CN Puzzle, CN Coloring 앱 출시 support",
        "timelocaiton": "2019 1월 - 2019 11월 | 서울 강남구",
    },
]

const json2 = [
    {
        "project": "Vegetas",
        "desc": "채식주의자들을 위한 식당 검색, 추천 모바일 앱(android)",
        "imgPath": require("../images/vegetas.jpg"),
        "act1": "NodeJs 백엔드 작성",
        "act2": "구글 지도 및 interactive features(custom markers, search range) 작성",
        "act3": "react-native android 빌드 체계 확립",
        "link1": "https://play.google.com/store/apps/details?id=com.vegetas.gunbam",
        "link2": "https://github.com/codestates/vegetas-client"
    },
    {
        "project": "MyflyingCat",
        "desc": "새로운 중국 직구 쇼핑몰, MyflyingCat",
        "imgPath": require("../images/web.jpg"),
        "act1": "PHP 및 Python 백엔드와 통신 체계 확립",
        "act2": "Responsive design layout 작성(material-ui)",
        "act3": "Redux state management 체계 작성",
        "link1": "https://myflyingcat.com",
        "link2": "https://github.com/jihyeonjeong11/crunchWeb"
    },
    {
        "project": "MyflyingCat mobile app",
        "desc": "Myflyingcat의 앱 버전",
        "imgPath": require("../images/app.jpg"),
        "act1": "React-native android, ios 빌드 체계 확립",
        "act2": "Responsive design layout 작성(material-ui)",
        "act3": "Redux state management 체계 작성",
        "link1": "https://play.google.com/store/apps/details?id=com.crunch.priceaos&hl=ko",
        "link2": "https://github.com/jihyeonjeong11/crunchNative_android"
    },


]

const json3 = [
  {
      title: 'HTML',
      elements: [
        {
            imgPath: require("../images/html5.png"),
            name: 'html'
        },
        {
            imgPath: require("../images/react.png"),
            name: 'jsx'
        },
      ]
  },
  {
      title: 'CSS',
      elements: [
        {
            imgPath: require("../images/css3.png"),
            name: 'css3'
        },
        {
            imgPath: require("../images/bootstrap.png"),
            name: 'bootstrap'
        },
        {
            imgPath: require("../images/materialUi.png"),
            name: 'materialUi'
        },
        {
            imgPath: require("../images/materialize.png"),
            name: 'materialize'
        },
        {
            imgPath: require("../images/styledComponent.png"),
            name: 'styledComponents'
        },
      ]
  },
  {
    title: 'Javascript',
    elements: [
      {
          imgPath: require("../images/react.png"),
          name: 'react'
      },
      {
          imgPath: require("../images/react.png"),
          name: 'react-native'
      },
      {
        imgPath: require("../images/javascript.png"),
        name: 'javascript'
      },
      {
        imgPath: require("../images/nodejs.png"),
        name: 'node'
      },
      {
        imgPath: require("../images/jquery.png"),
        name: 'jquery'
      },
    ],

},
{
    title: 'Backend',
    elements: [
      {
          imgPath: require("../images/express.png"),
          name: 'express'
      },

    ]
},
]

export {json, json2, json3};