# 프로젝트팀명 : BUYMESUSHI

## 🌡🌏 BUYMESUSHI('회사조') - 탄소 감축을 위한 인증 SNS 플랫폼

## 프로젝트 시작일 : 2021-11-05

## [**서비스로 이동**](http://주소 미정/)

p.s. 현재 서버를 닫은 관계로 실행이 되지 않습니다

--  
<img width="700" alt="스크린샷 2021-11-05" src="https://user-images.githubusercontent.com/89692626/142747278-39f3f30e-f8d2-4b99-a61f-ceae18ca9d0b.png">

---

Member.

이성재:[깃허브](https://github.com/seongjae-Leee)  
최현석:[깃허브](https://github.com/Hyerin1208)  
김혜린:[깃허브](https://github.com/Tozinoo)  
이소윤:[깃허브](https://github.com/jsoyun)

# 목차

[1.개요](#개요)

[2.목적](#목적)

-   기존 서비스와의 차별점

[3.전체 소스 코드](#전체-소스-코드-click)

[4.사용한 기술](#사용한-기술)

[5.주요 기능](#주요-기능)

[6.발생한 이슈 & 해결 방법](#발생한-이슈--해결-방법)

[7.상세 설명](#상세-설명)

-   DB 구조 (ERD)

-   전체 흐름도

-   프로젝트 설명 PPT

[8.참여인원](#참여-인원-4명)

---

### 개요

탄소 감축을 위한 인증 SNS 플랫폼

### 목적

> 탄소 감축을 위한 인증 SNS 플랫폼
>
> 1. SNS 기능 활성화
> 2. 프로젝트 경험
> 3. 블록체인 기반 암호화폐로 대체될 포인트제도 숙달

-   **기존 서비스와의 차별점**

    -   커뮤니티 서비스 제공
    -   경제적 유인을 통해 환경보호에 동참하게끔 하는 인증 SNS 플랫폼

### 전체 소스 코드 [소스](https://github.com/buymesushi/BUYMESUSHI.git)

### 사용한 기술

-   웹 화면 구성 : `React` `CSS` `styled-components` `JavaScript XML`
-   데이터 요청 및 출력 : `Ajax` `JSON` `axios`
-   DB 액션 처리 : `Mongoose`
-   DBMS : `MongoDB`
-   개발 Tool : `Visual Studio Code` `PostMan`
-   날씨 Api : `openweathermap API`
-   프레임워크 : `Express` `NodeJs`
-   프로젝트 관리 Tool : `GitHub` `Google Drive`

-   사용 모듈(server) :  
    "bcrypt": "^5.0.1",  
    "body-parser": "^1.19.0",  
    "concurrently": "^6.3.0",  
    "cookie-parser": "^1.4.5",  
    "cors": "^2.8.5",  
    "express": "^4.17.1",  
    "fs": "^0.0.1-security",  
    "jsonwebtoken": "^8.5.1",  
    "jwt-decode": "^3.1.2",  
    "jwt-token": "^1.0.9",  
    "mongo-seeding": "^3.7.0",  
    "mongoose": "^6.0.12",  
    "mongoose-sequence": "^5.3.1",  
    "multer": "^1.4.3",  
    "path": "^0.12.7"

-   사용 모듈(client) :  
    "@material-ui  
    "@mui  
    "@nivo/core": "^0.74.0",  
    "@nivo/line": "^0.74.0",  
    "@testing-library  
    "@toast-ui/editor-plugin-code-syntax-highlight": "^3.0.0",  
    "@toast-ui/editor-plugin-color-syntax": "^3.0.2",  
    "@toast-ui/react-editor": "^3.1.1",  
    "axios": "^0.24.0",  
    "bulma": "^0.9.3",  
    "chart.js": "^3.6.0",  
    "eslint-plugin-import": "^2.25.2",  
    "http-proxy-middleware": "^2.0.1",  
    "mobx": "^6.3.7",  
    "moment": "^2.29.1",  
    "observer": "0.0.2",  
    "prismjs": "^1.25.0",  
    "prop-types": "^15.7.2",  
    "react": "^17.0.2",  
    "react-chartjs-2": "^3.2.0",  
    "react-modal": "^3.14.3",  
    "react-pretty-carousel": "^1.0.19",  
    "react-redux": "^7.2.6",  
    "react-router-dom": "^5.3.0",  
    "react-slick": "^0.28.1",  
    "react-spring": "^9.3.0",  
    "redux": "^4.1.2",  
    "redux-promise": "^0.6.0",  
    "redux-thunk": "^2.4.0",  
    "slick-carousel": "^1.8.1",  
    "styled-components": "^5.3.3",  
    "swiper": "^7.2.0",  
    "web-vitals": "^1.0.1",  
    "webpack": "4.44.2",

### 주요 기능

------------------자기가 맡은 부분 적기--------------------------

-   메인페이지 : `MUI` `styled-components` `modal` `react-slick` `API` `chartjs`
-   로그인 : 일반 로그인, `mongoose` `JWT` `redux` `Token` `bcrypt`
-   회원가입 : `mongoose` `nodeJS` `bcrypt` `validation`
-   소개 : `MUI` `styled-components` `react-scroll` `react-scroll-slider` `Custom Hook`
-   지키미인증 : `mongoose` `multer` `redux` `axios`
-   포인트사용 : `mongoose` `redux` `axios`
-   미니게임 : `Vanilla JS`
-   게시판 : `mongoose` `express` `axios` `modal`
-   마이페이지 : `mongoose` `redux` `axios`

# 발생한 이슈 & 해결 방법

### "Nodejs 처리에서의 문제점 파악 ,db및 구조설계 "

-   리덕스,id값 전송 시 수량 값 추가하기

[상황] 미숙한 redux 사용으로 기존 스토어를 통한 상태값과 함수 주입에 어려움을 겪었다.

[문제] 리덕스를 사용해 장바구니에 쇼핑목록값을 저장하고 데이터관계설정으로 User에 products를 추가하였음에도 db연결을 하지 못해 모든
회원의 마이페이지 내용이 동일하였다.

[해결] 쇼핑카트에서 마이페이지로 선택한 products들의 data를 넘겨주도록
하였다. 기존 data에 수량까지 추가해 mypage라우터로 axios.put으로 넘겨주었다.
마이페이지 라우터에서 현재 유저의 아이디에 해당하면 정해진 db설정에 맞게 $push해 주었다.

-   상태관리 useState useEffect redux

[상황] 초반 redux 사용(user). 이후 useState, useEffect 주로 사용

[문제] redux값 useState에 대입, 렌더링 전 state값 undefined로 출력됨

[해결] if문 사용하여 undefined시 return null, state 값 있을 시 해당 부분 렌더링

-   route 연결 proxy

[상황] 라우터 연결 시 연결 오류

[문제] [HPM] Error occurred while proxying request 에러 발생

[해결] client와 server 연결 시 RESTful API 지켜줘야함

-   react if문 사용

[상황] react render 안에서 if문 사용

[문제] render안에서 if문 사용 불가

[해결] render 밖에서 if문 사용 또는 삼항연산자 사용

-   이미지 업로드

[상황] 이미지 업로드 시 fakepath 경로 오류

[문제] chrome에서는 보안문제 때문에 로컬 전체 경로를 알지 못하게 하는 보안 기능이 있음

[해결] URL.createObjectURL 메소드 사용

-   몽고디비 seeder 생성

[상황] 초기 데이터 생성 위하여 seed Data 설정

[문제] 암호생성을 위하여 bcrypt 사용. 해당 데이터 Object(<promise>)로 출력

[해결] 프로젝트 진행을 위하여 암호화 된 문자열 직접 입력 ( 추후 해결 필요 )   
    
### "React 활용 미숙"

-   모듈 활용 미숙, 커스터마이징 방식

[상황1] 유효성을 검사하는 함수를 만들어 MUI 를 따온 input에 프론트 단에서 어떻게 유효성 검사를 할 수 있을지 고민.  

[문제] MUI 컴포넌트와 유효성 검사를 합치하는데 boolean 값이 헷갈림  

[해결] MUI의 error 시 적용되는 css와 validation 함수를 합쳐 주어진 유효식과 다른 text가 입력되면 MUI에서도 error로 작성되게함  
    
  
[상황2] chart-js 적용하는 방식에서 OpenAPI 자료를 원하는 방식으로 정리해서 x축, y축에 띄워야 함  
    
[문제] grenn-gas emission api의 년도별 배출량이 하나의 객체 안에 다 들어가 있음  
    
[해결] 증가되는 추세를 보여주기 위해 chart로 보여주고 싶었으므로 하나의 나라의 배출량만을 불러와서 년도별 배출량을 표시.  
    
    
-   모달을 활용한 data 주고받기  
    
[상황] : 게시글 리스트, 게시글 작성, 상세 게시글을 한 페이지에서 모달만을 활용하여 데이터를 주고 받아야 함  
    
[문제] : 각각의 page가 있는 것이 아니어서 cannot post/ boardwrite에러가 뜨는 등 route에서 경로 설정해주는게 혼란스럽고 세부 게시글을 불러오는 방식도 헷갈림  
    
[해결] : input마다 value를 주고 route에서 경로만 설정해주면서 post 방식으로 데이터를 전달했고, 상세 게시글에서는 게시글 리스트에서 props로 데이터를 받아옴   
    
    
-   개발 과정에서 DB 삭제하면서 일어나는 유저 관련 issue
    
[상황] : 게시판에서 작성한 유저 nickname 띄우는게 갑자기 안 됨.
    
[문제] : 유저 DB가 사라지면 게시판에 nickname을 불러올 수가 없어서 게시판이 오류남
    
[해결] : 소통의 문제였으므로 공유하고 있는 db에 대해 변화를 줄 때는 서로 소통하기로 함.
    
    

<!-- # AWS 활용(EC2, RDS)

------------------ 미정 ---------------------

<img width="500" alt="34" src="https://user-images.githubusercontent.com/89692626/137617870-177cb2d9-854b-423a-b04d-3bf45de24ae9.png">
<img width="1000" alt="35" src="https://user-images.githubusercontent.com/89692626/137617902-f1bfc9b5-8462-4300-9365-4bd45017b2f3.png">
<img width="1000" alt="36" src="https://user-images.githubusercontent.com/89692626/137617905-318f133b-24b3-48ee-800d-3e491d550487.png">

데이터베이스 AWS EC2방식 체택 인스턴스 생성후 키값생성 후
서버 연결
<img width="400" alt="41" src="https://user-images.githubusercontent.com/89692626/137617959-d52e400d-d98f-4f6d-a035-948354a394ad.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89692626/137617960-c55d109a-dad6-4357-9c5f-87e25edac9dd.png">
<img width="400" alt="43" src="https://user-images.githubusercontent.com/89692626/137617961-14e02f5a-e202-41a7-9035-75bd4fd9eadd.png">
<img width="400" alt="44" src="https://user-images.githubusercontent.com/89692626/137617962-37868599-b3c1-4225-b012-1d4a30439032.png">

데이터베이스 AWS EC2방식 체택 인스턴스 생성후 키값생성 후
서버 연결

AWS의 RDS로 데이터베이스를 공유하여 협업하여 프로젝트를 진행하였고
AWS의 EC2를 활용하여 배포를 하였습니다

서버 연결하기 전 SCREEN을 활용 cmd창을 닫거나 컴퓨터를 종료하여도 서버가 계속 돌아가게 유지했습니다 -->

# 디렉토리 설명

전체 코드 : [코드](https://github.com/buymesushi/BUYMESUSHI.git)

    - 폴더 설명
    BUYMESUSHI
    |
    |--node_modules         - 모듈
    |--client               - Front 폴더
    |   |--node_modules     - 모듈
    |   |--public           - Front 정적 폴더
    |   |   |--img          - Front 정적 이미지 폴더
    |   |--src              - source 폴더
    |   |   |--actions      - 액션 메서드 모음 폴더
    |   |   |--components   - 컴포넌트 폴더
    |   |   |   |--views    - 각종 컴포넌트 모음 폴더
    |   |   |--hoc          - 권환 관리 모음 폴더
    |   |   |--reducers     - 리듀서 모음 폴더
    |   |   |--redux        - 상태관리 폴더
    |   |--App.js           - 컴포넌트 모음
    |   |--index.js         - 진입 파일
    |   |--setupProxy.js    - 프록시 설정
    |
    |--server               - Backend 폴더
        |--config           - 각종 환경 설정 관리 폴더
        |--controller       - Req, Res 담당 폴더
        |--data             - seed 데이터 초기 값 관리 폴더
        |--middleware       - 각종 미들웨어
        |--models           - 데이터베이스의 각 컬렉션에 해당하는 파일들 모음
        |--routes           - 각종 라우터 모음
        |
        |--index.js         - 진입 파일

<!-- ### 페이지별 설명(views-html)

## board : board, boarddetail, boardwrite, boardedit

<img width="400" alt="61" src="https://user-images.githubusercontent.com/89692626/137718441-cb96579f-a46a-4201-90aa-ed579aa468f2.png">
게시판의 첫 페이지로 게시글 번호는 AUTO INCREMENT되는 게시글의 id로 나타나고 작성자에는 해당 게시글을 작성한 유저의 닉네임이 표시된다.
<img width="400" alt="62" src="https://user-images.githubusercontent.com/89692626/137718449-2d768a39-72bf-4168-912a-4912b46db76f.png">
글 작성 버튼을 누르면 넘어가는 페이지로 제목과 내용과 사진을 업로드할 수 있고 제출버튼을 누르면 게시글이 DB에 저장되어 board게시판에 보여진다.
<img width="400" alt="63" src="https://user-images.githubusercontent.com/89692626/137718456-fb72d3c2-3d5a-43f0-b5aa-508ba4a759d7.png">
방금 작성한 게시글이 닉네임과 함께 등록된 모습이다.
<img width="400" alt="64" src="https://user-images.githubusercontent.com/89692626/137718457-02edc0c9-5f7f-4db9-a3ad-d6562be1a375.png">
게시글의 제목을 누르면 해당 글을 더 자세히 볼 수 있는데 조회수는 해당 페이지로 렌더링되기 전에 게시글의 viewcount가 1 올라간다.
<img width="368" alt="55" src="https://user-images.githubusercontent.com/89692626/137724837-d882c490-206e-4b66-b4b6-3b303fa00707.png">
자기가 쓴 글에는 유저Nick과 해당 게시글의 Nick이 같기 때문에 수정과 삭제 버튼이 생긴다. 삭제를 하게 되면 DB에서 해당글이 사라진다.
<img width="400" alt="65" src="https://user-images.githubusercontent.com/89692626/137718460-66a12fda-10f2-46c0-81b3-5f248780e6d4.png">
수정을 하면 제목과 내용은 value를 가져와서 그대로 뜬 상태에서 글을 수정할 수 있게 되어있고 위와 같이 수정이 된다.
<img width="400" alt="66" src="https://user-images.githubusercontent.com/89692626/137718461-a7c693cf-884f-454a-a2a1-a1f795c38a25.png">
수정을 하면 위와 같이 수정된 내용이 게시글에 다시 표시가 된다. -->

<!-- ### DB구조 (ERD)

![KakaoTalk_Photo_2021-10-17-15-22-45](https://user-images.githubusercontent.com/88940298/137614327-8508ccda-6572-4a70-af91-d1f9063c4a60.jpeg) -->

<!-- ### 프로젝트 기획안 PPT

[구글 프레젠테이션 파일](https://docs.google.com/presentation/d/1OXVmXrEVzpxmP-WIhmVdoelkYk0yFbY2/edit?usp=sharing&ouid=116791032032435384891&rtpof=true&sd=true) -->

<!-- # 시연 영상

[유튜브첫페이지 전반적인 틀,index 영상](https://www.youtube.com/watch?v=FMPbevKqxzo)
[유튜브시연영상1](https://www.youtube.com/watch?v=tTzy22FIxdk)
[유튜브시연영상2](https://www.youtube.com/watch?v=OSPGKf2z3MY) -->
