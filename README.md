# GOPIZZA 고피자 리팩토링 프로젝트

## 👨🏻‍💻 Introdution

피자의 패스트푸드화에 도전장을 낸 국내 최초 1인용 화덕피자 브랜드 "GOPIZZA"에서 한달 인턴 했을 때 프로젝트를 스스로 리팩토링하여 진행했습니다.

- 인원 : 프론트 1명

## 🔥 목표

- 더 가독성 있고 간결한 코드로 바꿔보기 
- 향상된 UI/UX로 스스로 개선해보기

## 📚 사용한 기술

- Typescript, React, Styled-components, Redux, Firebase

## 🎯 참고
- 최신 Chrome Browser의 사용을 권장합니다.

## 🚀 프로젝트 내용

### MainPage
<div>
  
  ### Before
  https://user-images.githubusercontent.com/47416686/128325703-361a2e46-f061-41b4-8436-aa1298b7f180.mp4
    
  ### After
  https://user-images.githubusercontent.com/47416686/128326118-ac3e6b59-d1ef-46f9-9264-31d61a5a95c2.mov  
</div>

<br />
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
<br />

## Login / SignUp
- Firebase를 사용하여 로그인, 회원가입 가능
- google, github 계정으로 소셜 로그인 가능
<div>
  
  ### Before
  https://user-images.githubusercontent.com/47416686/128341446-d6f00f35-eac4-4f64-842d-a1957eaf5b1e.mov

  ### After
  https://user-images.githubusercontent.com/47416686/128341461-3a556395-dfcd-4eb9-a503-f0e0fe5977fc.mov
</div>

<br />
<br />
<br />

## CartPage
- 기존 react-redux를 redux-toolkit을 사용하여 리팩토링을 진행
- connect, mapstatetoprops, mapDispatchToProps를 사용한 부분을 redux hooks로 리팩토링을 진행
- 장바구니에 메뉴 추가, 수량 증가 및 감소, 삭제 기능 구현
- Import를 연동하여 장바구니에 담긴 메뉴들을 결제하기 구현
<div>
  
  ### Before
  https://user-images.githubusercontent.com/47416686/128345541-b0e5cb2f-4f86-474f-a6cf-074ec27a5445.mov

  ### After
  https://user-images.githubusercontent.com/47416686/128346787-23ae3d4c-c5c7-4f4f-8b8b-2864a1864d2d.mov
</div>

<br/>
<br/>
<br/>

## MapPage
- Kakao API를 통해 카카오 지도에 고피자 매장 위치 마크 띄우기
- 마크 클릭 시 매장 정보 확인 가능
- 현재 위치 아이콘 클릭 후 사용자의 현재 위치 찾기
- 가까운 매장 찾기 버튼 클릭 시, 5km 이내의 가장 가까운 고피자 매장 마크로 이동하고 매장 정보 표시
<div>
  

https://user-images.githubusercontent.com/47416686/128375137-8d0f0ce7-5817-4ac9-b392-3ed1ff8910cb.mov


 </div>

<br/>

## 📹 데모
[click!](https://wjdxor133.github.io/GOPIZZA-Refactoring/)


## 📝 회고록

[인턴쉽 회고록](https://ljtaek2.tistory.com/154)
