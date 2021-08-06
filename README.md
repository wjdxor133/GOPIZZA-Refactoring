# GOPIZZA 고피자 리팩토링 프로젝트

## 👨🏻‍💻 Introdution

피자의 패스트푸드화에 도전장을 낸 국내 최초 1인용 화덕피자 브랜드 "GOPIZZA"에서 한달 인턴 했을 때 프로젝트를 스스로 리팩토링하여 진행했습니다.

- 인원 : 프론트 1명

## 🔥 목표

- 더 가독성 있고 간결한 코드로 바꿔보기
- 스스로 UI/UX를 개선해보기

## 📚 사용한 기술

- Typescript, React, Styled-components, Redux, Firebase

## 🎯 참고
- 최신 Chrome Browser의 사용을 권장합니다.
- [리팩토링 이전 소스](https://github.com/wjdxor133/Gopizza_CustomerPage)

## 🚀 프로젝트 개선

### 도메인 단위로 폴더 구축
<div>
  
  ### Before
  - 기존에는 모든 페이지의 컴포넌트를 하나의 폴더에서 관리
  <img width="420" alt="스크린샷 2021-08-06 오후 3 21 47" src="https://user-images.githubusercontent.com/47416686/128465521-e6978a85-4eb4-4470-87de-42e97fbaba66.png">
  
  ### After
  - 컴포넌트들을 `도메인 단위`로 나눠서 관리하여 탐색 범위를 줄여 `탐색 시간 단축`
  <img width="420" alt="스크린샷 2021-08-06 오후 3 21 27" src="https://user-images.githubusercontent.com/47416686/128465514-9eb5434c-ebb7-440f-b247-1cc3ced96236.png"> 
</div>


<br />

### Custom Hooks 제작
- `재사용 되는 로직`들을 하나의 훅으로 분리하고 제작하여 `동일한 코드 제거`
 <div>
  <img width="420" alt="스크린샷 2021-08-06 오후 3 45 46" src="https://user-images.githubusercontent.com/47416686/128468009-e3ef52f1-d2ac-40f8-ada4-bd83a51fd820.png">
</div>

<br />

### redux-toolkit 도입
- 기존에는 actions, reducer를 따로 만들어서 관리

**`actions`**
<div>
   <img width="500" alt="스크린샷 2021-08-06 오후 4 21 42" src="https://user-images.githubusercontent.com/47416686/128472497-2ce859ed-aa5b-45dc-adb6-d7a701a10edc.png">
</div>

<br />

**`reducer`**
<div>
  <img width="611" alt="스크린샷 2021-08-06 오후 4 16 47" src="https://user-images.githubusercontent.com/47416686/128472509-9e6f1085-81be-4488-a2be-53869a9dd61d.png">
</div>

<br />

### createSlice 사용
- 기존 react-redux를 `redux-toolkit`을 사용하여 `리팩토링`을 진행
- `createSlice`를 사용하여 `보일러플레이트 코드 감소`
<div>
  <img width="622" alt="스크린샷 2021-08-06 오후 4 31 20" src="https://user-images.githubusercontent.com/47416686/128473813-1edb21d0-5b75-4244-a3ec-34c2a89ef504.png">
</div>

<br />

### redux hooks 사용
- 기존에 connect, mapstatetoprops, mapDispatchToProps를 사용
<div>
  <img width="455" alt="스크린샷 2021-08-06 오후 4 40 06" src="https://user-images.githubusercontent.com/47416686/128474996-a7dd916f-9560-465f-b15c-e06a411017f2.png">
</div>

<br />

- useSelector, useDispath 등 `redux hooks`을 사용하여 리팩토링을 진행
<div>
  <img width="596" alt="스크린샷 2021-08-06 오후 4 40 23" src="https://user-images.githubusercontent.com/47416686/128475056-62e9f273-89e1-402a-9b74-71d7535a3076.png">
</div>

<br />

## 🎨 UI / UX 개선

### MainPage
<div>
  
  ### Before
  https://user-images.githubusercontent.com/47416686/128325703-361a2e46-f061-41b4-8436-aa1298b7f180.mp4
    
  ### After

  https://user-images.githubusercontent.com/47416686/128506587-bbe1cffc-d886-4b47-a39d-3584b415e14c.mov
</div>

<br />
<br />

## MenuPage
<div>

  ### Before
  https://user-images.githubusercontent.com/47416686/128327044-9ca885bc-64e0-438e-87c0-2835b88bcac0.mov

  ### After
  https://user-images.githubusercontent.com/47416686/128328711-9dc5fec8-88d9-4b7e-8cb2-b939f7e82bf5.mov
</div>

<br />
<br />

## Login / SignUp
<div>
  
  ### Before
  https://user-images.githubusercontent.com/47416686/128341446-d6f00f35-eac4-4f64-842d-a1957eaf5b1e.mov

  ### After
  https://user-images.githubusercontent.com/47416686/128341461-3a556395-dfcd-4eb9-a503-f0e0fe5977fc.mov
</div>

<br />
<br />

## CartPage
<div>
  
  ### Before
  https://user-images.githubusercontent.com/47416686/128345541-b0e5cb2f-4f86-474f-a6cf-074ec27a5445.mov

  ### After
  https://user-images.githubusercontent.com/47416686/128346787-23ae3d4c-c5c7-4f4f-8b8b-2864a1864d2d.mov
</div>

<br/>
<br/>

## MapPage
<div>
  
  ### Before
  https://user-images.githubusercontent.com/47416686/128375137-8d0f0ce7-5817-4ac9-b392-3ed1ff8910cb.mov
  
  ### After
  https://user-images.githubusercontent.com/47416686/128463482-1ab6a208-9623-4b35-a081-19158cf2cde9.mov

 </div>
 </div>
 
 ## 🕹 기능
- Firebase를 사용하여 로그인, 회원가입 가능
- google, github 계정으로 소셜 로그인 가능
- 장바구니에 메뉴 추가, 수량 증가 및 감소, 삭제 기능 구현
- Import를 연동하여 장바구니에 담긴 메뉴들을 결제하기 구현
- Kakao API를 통해 카카오 지도에 고피자 매장 위치 마크 띄우기
- 마크 클릭 시 매장 정보 확인 가능
- 현재 위치 아이콘 클릭 후 사용자의 현재 위치 찾기
- 가까운 매장 찾기 버튼 클릭 시, 5km 이내의 가장 가까운 고피자 매장 마크로 이동하고 매장 정보 표시


## 📹 데모
[click!](https://wjdxor133.github.io/GOPIZZA-Refactoring/)

## 🔧 문제 해결 과정
[click!](https://wjdxor133.github.io/useEffect-cleanup/)

## 📝 회고록

[인턴쉽 회고록](https://ljtaek2.tistory.com/154)
