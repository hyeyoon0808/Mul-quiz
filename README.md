# :grey_question: 멀퀴즈 온더 블럭

## 0. 로컬 실행 방법
*Read this in other languages: [English](README-EN.md).*

npm 실행을 위해  node.js(12.18.3)를 설치합니다.
설치 후 npm 6.14.6를 확인할 수 있습니다.

```bash
npm -v
6.14.6
```



## 1. 프로젝트 소개

'**멀**퀴즈 온더 블럭'은 여러 기관에서 사용하고 있고 'Multicampus'에서 앞으로 다양한 프로그램에서 활용할 수 있도록 'QUIZ' 폼의 웹 페이지를 제작​ :speech_balloon:

![동영상](https://user-images.githubusercontent.com/44856614/91561694-fdb2fd00-e976-11ea-8599-95f602749112.PNG)

*추후 유투브 업로드 시, 링크 걸어둘 예정*



## 2. 사용 기술 및 개발 계획📌

### 1) 사용 기술

**기능 구현**

- React
- Mobx
- React-router

**디자인**

- Semantic UI
- Meterial UI
- React Sass
- Styled Component



### 2) 개발 계획

- 진행 기간 : 2020.08.14 - 08.20
- 목표 : 퀴즈 사이트를 만들어 여러 기관에서 사용할 수 있도록 퀴즈 폼 페이지 구현하자



## 3. 업무 분담

😊 임근우 : 감독/총괄 및 Data(store) 관리, 퀴즈 리스트(수정/삽입/삭제) ,퀴즈 디테일(타이머/포인트/시간)

😊 이명호 : 라우터(메인-로그인-퀴즈) 기능, 로그인 기능, 퀴즈 리스트(제거/생성) 및 Publishing 총괄

😊 조혜윤 : 퀴즈 리스트(수정), 퀴즈 디테일 (선택지 & 체크박스 설정, 이미지 업로드), UI 및 GITHUB 담당

😊 윤혜지 : 퀴즈 리스트(제거/생성), 퀴즈 실행 기능 및 UI



## 4. 핵심 기능🔑

 ### 1) 로그인 / 로그아웃

> - 메인 화면에서 사용자 계정으로 로그인 기능
> - 사용자 계정 로그인 중 로그아웃 기능



### 2) 퀴즈 생성

> - 메인 화면에서 `Create Quiz `버튼을 이용 퀴즈 생성 페이지로 이동



### 3) 퀴즈 생성

> - 퀴즈 생성 페이지로 이동 후 맨 좌측의 Quiz List 에서 생성 목록 확인 가능
>
> - Quiz List 아래  `Add Quiz` 로 새로운 퀴즈 생성



### 4) 퀴즈 세팅

> - `Sec` 선택
> - `Points` 선택
> - `Select Text `, `Check Box` 설정
> - 필요한 이미지 업로드
> - 모든 수정사항 저장



### 5) 퀴즈 실행

> - 상단 Navigation 의 `Done` 으로 퀴즈 게시
> - 퀴즈 화면 좌측 `Start Quiz Modal` 으로 퀴즈 시작
> - 하단의 각 Select Box 로 정답 체크 후 제출



## 5. 시나리오 & 결과📢

![메인페이지](https://user-images.githubusercontent.com/44856614/91561225-2f779400-e976-11ea-85d3-4973e91d8087.PNG)

**첫 화면-> 메인페이지**

> `Create` 버튼과 `Login` 버튼으로 구성



![로그인](https://user-images.githubusercontent.com/44856614/91561261-41593700-e976-11ea-8270-922cd687713d.PNG)

**로그인 페이지**: 로그인 실행

> 아이디와 비밀번호가 잘 못 입력되었을 시, 접속이 되지 않으면서 경고창 뜨게 함



![퀴즈폼](https://user-images.githubusercontent.com/44856614/91561283-4b7b3580-e976-11ea-95c4-db7774cbb1b6.PNG)

![퀴즈생성](https://user-images.githubusercontent.com/44856614/91561280-4a4a0880-e976-11ea-83d9-d84267413013.PNG)

**퀴즈 폼 생성 페이지**

- 상세 페이지 설명 : 퀴즈 생성
  - QuizList에 `Add question`을 클릭하여 새로운 페이지 추가
  - 문제 작성(title)
  - 타이머 설정
  - 포인트(점수) 설정
  - 이미지 업로드 -> 업로드된 사진을 미리보기 가능하게 구현
  - 선택지 입력 및 정답 설정
  - `Modify/ Save` 클릭하여 수정 완료





![퀴즈 실행](https://user-images.githubusercontent.com/44856614/91561271-461deb00-e976-11ea-9b81-9252f1ffd5a3.PNG)

![타이머포인트](https://user-images.githubusercontent.com/44856614/91561284-4c13cc00-e976-11ea-9df1-1175f28c7dbc.PNG)

![타임아웃](https://user-images.githubusercontent.com/44856614/91561291-4e762600-e976-11ea-80a2-5a25324e3f44.PNG)

**퀴즈 실행 페이지**

> - 1번부터 퀴즈 실행하게 설정
>
> - `Start Quiz Modal` 을 눌러 타이머를 설정
> - 정답을 맞추면 점수에 맞춰 포인트 획득
> - 시간초과가 되면 Timeout 발생
