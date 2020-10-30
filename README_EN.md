# :grey_question: Mul-Quiz on the block
![version](<https://img.shields.io/badge/version-0.1.0-yellow>)   ![react](<https://img.shields.io/badge/react-16.13.1-red>)   ![mobx](<https://img.shields.io/badge/mobx-5.15.5-blueviolet>)
*한국어로 보기: [Korean](README.md).*

## 0. Getting Started

To get npm on local, you need to download node.js(v12.18.3).
Once it's installed, run this command to check the installed version.

```bash
npm install
npm -v
6.14.6
npm start
```



## 1. Intro

'**Mul-quiz** on the block' is a web page of 'Quiz' format referred to Kahoot'. The purpose of this web page is to provide educational facilities with an experience of quiz platforms. :speech_balloon:

![동영상](https://user-images.githubusercontent.com/44856614/91561694-fdb2fd00-e976-11ea-8599-95f602749112.PNG)

*Once a video uploaded on youtube, the link will be updated*



## 2. Technology and Plan📌

### 1) Technology

**Function**

- React
- Mobx
- React-router

**Design**

- Semantic UI
- Meterial UI
- React Sass
- Styled Component



### 2) Plan

- Period: 2020.08.14 - 08.20
- Purpose : Build a web page of 'Quiz' format to provide educational facilities an experience of a variety quiz platforms by using React.js.



## 3. Members

😊 Kuenwoo Lim : PM, Data(store) management, Quiz list(modify/add/delete), Quiz detail(timer/point)

😊 Meongho Lee : react-router(main-login-quiz), Login page, Quiz list(delete/add), Publishing management

😊 Hyeyoon Cho : Quiz List(modify), Quiz detail(answer choice/checkbox/image upload), Github management

😊 Hyejee Yoon : Quiz list(delete/add), Quiz start page, UI



## 4. Functions🔑

 ### 1) Log-in / Log-out

> - Log-in into user account from main page.
> - Log-out from user account.



### 2) Navigate to Quiz page

> -  Navigate to Create Quiz page from Main page ('Create Quiz').



### 3) Create a Quiz

> - 'Quiz list' to check existed quizzes. 
>
> -  Add new quiz ('Add Quiz' button).



### 4) Quiz Setting

> - set `Select Text`
> - set `Check Box`
> - set `Points`
> - set `Sec`
> - set `Points`
> - Upload an image
> - Modify/Save all settings



### 5) Run Quiz

> - Navigate to Quiz Start page ('Done').
> - Quiz start ('Start Quiz Modal').
> - Answer check and Submit ('Submit').
> - Alert 'Time Out' when time is over.
> - Result message (Succeed/Failed).



## 5. Scenario & Result 📢

![메인페이지](https://user-images.githubusercontent.com/44856614/91561225-2f779400-e976-11ea-85d3-4973e91d8087.PNG)

**Main page**

> `Create` button & `Login` button.



![로그인](https://user-images.githubusercontent.com/44856614/91561261-41593700-e976-11ea-8270-922cd687713d.PNG)

**Log-in page**

> **아이디: test | 비밀번호: 123**

> Show an alert message if a wrong ID or Password is entered.



![퀴즈폼](https://user-images.githubusercontent.com/44856614/91561283-4b7b3580-e976-11ea-95c4-db7774cbb1b6.PNG)

![퀴즈생성](https://user-images.githubusercontent.com/44856614/91561280-4a4a0880-e976-11ea-83d9-d84267413013.PNG)

**Quiz Form Create Page**

- Description : Quiz create
  - Add new Quiz by `Add question` on QuizList.
  - Insert Question (title).
  - Insert Answer choice and Answer(checkbox).
  - Set timer.
  - Set Point.
  - Image Upload -> preview an uploaded image.
  - Save the modified quiz by `Modify/ Save`.




![퀴즈 실행](https://user-images.githubusercontent.com/44856614/91561271-461deb00-e976-11ea-9b81-9252f1ffd5a3.PNG)

![타이머포인트](https://user-images.githubusercontent.com/44856614/91561284-4c13cc00-e976-11ea-9df1-1175f28c7dbc.PNG)

![타임아웃](https://user-images.githubusercontent.com/44856614/91561291-4e762600-e976-11ea-80a2-5a25324e3f44.PNG)

**Quiz Start Page**

> - Quiz starts from the first quiz.
> - Start timer by `Start Quiz Modal`.
> - Add points for each quiz by correct answer(s).
> - Alert 'Time Out' when time is over.
