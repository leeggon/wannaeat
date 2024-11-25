
# 👨🏻‍🍳 소상공인을 위한 식당 무인 운영 앱 👨🏻‍🍳

 <img src="/readme/image/mainbanner.png" >

- **배포 URL : https://j11b302.p.ssafy.io**

<br>

# 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [팀원 소개](#팀원-소개)
3. [기획 배경](#기획-배경)
4. [서비스 주요 기능](#서비스-주요-기능)
5. [서비스 아키텍쳐](#서비스-아키텍쳐)
6. [기술 스택](#기술-스택)
7. [개발 환경](#개발-환경)
8. [디렉토리 구조](#디렉토리-구조)

<br>

<a id="프로젝트-개요"></a>

# 프로젝트 개요

- **소상공인을 위한 식당 무인 운영 앱**
- 개발 기간: 2024.08.19 ~ 2024.10.11 (7주)
- 삼성 청년 소프트웨어 아카데미(SSAFY) 특화 프로젝트


<br>

<a id="팀원-소개"></a>

# 팀원 소개

| 장정현                                                                  | 곽예빈                                                                   | 이경곤                                                                   | 이수민                                                                   | 이정현                                                                   | 박소정                                                                   |                                             
|------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------| 
| <img src="/readme/profile/장정현.png" alt='@jeonghyeon4782' width="100px" />  | <img src="/readme/profile/곽예빈.PNG" alt="@Yebin-Gwak" width="100px"/> | <img src="/readme/profile/이경곤.png" alt="@leeggon" width="100px" />  | <img src="/readme/profile/이수민.png" alt="@sumin305" width="100px" />  | <img src="/readme/profile/이정현.png" alt="@1116CafeMocha" width="100px"/>  | <img src="/readme/profile/박소정.jpg" alt="@sojeong9432" width="100px"/>  |
| [@jeonghyeon4782](https://github.com/jeonghyeon4782)                   | [@Yebin-Gwak](https://github.com/Yebin-Gwak)                            | [@leeggon](https://github.com/leeggon)                                 | [@sumin305](https://github.com/sumin305)                                | [@1116CafeMocha](https://github.com/1116CafeMocha)                       | [@sojeong9432](https://github.com/sojeong9432)                           |
| 팀장, Infra                       | Back-end Leader                                             | Back-end | Front-end Leader                                                        | Front-end  | Front-end  | 


<br>

<a id="기획-배경-및-기대-효과"></a>


# 기획 배경

### 💡 **손님의 불편함**

- **불편한 자리 배정** : 
특별한 날을 기념하며 예약 방문했지만, 예상치 못한 불편한 자리 배정으로 인해 아쉬운 경험이 있어요.
- **단체 메뉴 주문 시 혼란** : 
한 대의 키오스크로 주문하기 때문에, 단체로 메뉴를 주문할 때 각자의 주문 현황을 파악하기 어려워요.
- **내향인 고객의 증가** : 
대화 없이 조용히 식사를 즐기고 싶은 내향적인 고객이 늘어나고 있으나, 이를 만족시킬 수 있는 서비스는 부족합니다.

### 💡 **사업자의 고민**

- **키오스크 비용 부담** : 
매월 나가는 좌석 별 키오스크 대여 비용이 부담돼요.
- **높은 인건비 문제** : 
지속적으로 상승하는 인건비에 많은 직원을 두기 곤란해요.
- **피크타임 처리의 어려움** : 
예약, 주문, 결제 등의 작업을 수동으로 처리하느라, 피크 타임에 매끄러운 운영이 어렵습니다.

<br>

**손님**📢 **"좌석 예약부터 공동 주문, 결제까지 손쉽게 할 수 있는 서비스가 필요합니다!"**

**사장님📢 "매장 운영을 간편화 하고, 운영 비용을 절감할 수 있는 서비스가 필요합니다!"**

<br>

## 머물래 서비스 목표

> 예약부터 주문, 결제, 퇴실 까지 **매장 이용의 모든 프로세스를 제공**하여, 
손님과 사장님 모두를 만족시키는 서비스를 제공하고자 합니다!  
<br>

<a id="서비스-주요-기능"></a>

# 서비스 주요 기능

### 손님
- 현장 구조 기반 **좌석 선택 예약**
- 예약 구성원 간 **실시간 공동 주문**
- 메뉴 선택 **분할 결제**

### 사업자
- **매장 구조도 꾸미기**
- **예약 관리**
- **매장 통계**

<a id="서비스-아키텍쳐"></a>

<br>

# 서비스 아키텍쳐 
<img src="/readme/architecture/아키텍쳐.png" alt='서비스 아키텍쳐'>
<br>

<a id="기술-스택"></a>

# 기술 스택


### 💡 Front-end
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<br>

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Zustand](https://img.shields.io/badge/zustand-%23DD0031.svg?&style=for-the-badge&logo=zustand&logoColor=white)

### 🔎 Back-end

<img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">

![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white) 
<img src="https://img.shields.io/badge/OAuth2-113155?style=for-the-badge">
<img src="https://img.shields.io/badge/QueryDSL-50ABF1?style=for-the-badge"> 
<img src="https://img.shields.io/badge/Spring Data JPA-F8DC75?style=for-the-badge">
<img src="https://img.shields.io/badge/WebSocket-005C84?style=for-the-badge">
<img src="https://img.shields.io/badge/STOMP-005C84?style=for-the-badge">
 
### 💾 DB

![mysql](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white) ![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

### 🏗 Infra

![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white)

<img src="https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white" ><img src="https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white"> ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) <img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white">

### 🛠 Tool

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white)
![GitLab](https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white)


<br>

# 서비스 화면

### 손님 (모바일)
| 메인 | 식당 조회 및 예약 | 보증금 결제 |
|------|--------|--------|
| <img src="/readme/feature/메인화면.gif" width="250" /> | <img src="/readme/feature/식당조회및예약.gif" width="250" />    |  <img src="/readme/feature/간편결제.gif" width="250" />   |
      
| 공동 주문 및 채팅 |  주문 결제 및 퇴실 | 예약 관리 및 결제 관리 | 
|--------|--------|--------|
| <img src="/readme/feature/공동주문및채팅.gif" width="250" />    | <img src="/readme/feature/주문결제및퇴실.gif" width="250" />      |   <img src="/readme/feature/예약관리및카드관리.gif" width="250" />      | 

### 사업자 (모바일)
| 메인 | 매장꾸미기 | 예약관리 |
|------|--------|--------|
| <img src="/readme/feature/사장님메인페이지.jpg" width="250" /> | <img src="/readme/feature/사장님매장꾸미기페이지.jpg" width="250" />    |  <img src="/readme/feature/사장님예약관리페이지.jpg" width="250" />   |
      
| 알림 |  통계 | 내정보 | 
|--------|--------|--------|
| <img src="/readme/feature/사장님알림페이지.jpg" width="250" />    | <img src="/readme/feature/사장님통계페이지.jpg" width="250" />      |   <img src="/readme/feature/사장님내정보페이지.jpg" width="250" />      |

<br>

<a id="개발-환경"></a>

# 개발 환경

### ⚙ Management Tool

- 형상 관리 : [**GitLab**](https://lab.ssafy.com/s11-fintech-finance-sub1/S11P21B302)
- 이슈 관리 : [**Jira**](https://ssafy.atlassian.net/jira/software/c/projects/S11P21B302/boards/7268)
- 디자인 : [**Figma**](https://www.figma.com/design/BrBuWz0hqMhEoj3P7te18M/%ED%85%8C%EC%9D%B4%EB%B8%94-%ED%8E%98%EC%9D%B4?node-id=229-3571&t=0BVg39wPm3Y9LXpj-1)

### 💻 IDE

- Visual Studio Code
- IntelliJ IDEA

### 💡 Front-end

- React `18.3.1`
- Axios `1.7.2`

### 🔎 Back-end

- Spring Boot `3.3.2`
- Java `Open JDK 17 - LTS`
- MySQL `8.0.37`
- Redis `3.0.5`
- MongoDB `7.0.12`

### 🏗 Infra

- Ubuntu `20.04.6 LTS`
- Docker `27.1.1`
- Docker-compose `1.25.0`
- Jenkins `2.470`
- Nginx `1.18.0`
- AWS EC2
- AWS S3

<br>

<a id="디렉토리-구조"></a>

# 디렉토리 구조

<details>
<summary>Front-end</summary>
<div markdown="1">

```
📦src
 ┣ 📂api
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂ssafyPay
 ┃ ┣ 📂customer
 ┃ ┗ 📂manager
 ┣ 📂assets
 ┣ 📂component
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┃ ┗ 📂WEButton
 ┃ ┃ ┣ 📂check
 ┃ ┃ ┣ 📂dropdown
 ┃ ┃ ┣ 📂loading
 ┃ ┃ ┣ 📂modal
 ┃ ┃ ┃ ┣ 📂WEAlertModal
 ┃ ┃ ┃ ┣ 📂WESettingModal
 ┃ ┃ ┃ ┣ 📂WESheetModal
 ┃ ┃ ┣ 📂tab
 ┃ ┃ ┃ ┗ 📂WETab
 ┃ ┃ ┣ 📂textfield
 ┃ ┃ ┃ ┗ 📂WETextfield
 ┃ ┃ ┗ 📂toggle
 ┃ ┣ 📂customer
 ┃ ┃ ┣ 📂map
 ┃ ┃ ┣ 📂order
 ┃ ┃ ┃ ┣ 📂OrderCartBox
 ┃ ┃ ┃ ┣ 📂OrderSheetBox
 ┃ ┃ ┗ 📂reservation
 ┃ ┃ ┃ ┣ 📂CardCarousel
 ┃ ┃ ┃ ┣ 📂ReservationSeatMap
 ┃ ┃ ┃ ┣ 📂SeatSelect
 ┃ ┃ ┃ ┣ 📂TimeSelectModalBox
 ┃ ┃ ┃ ┗ 📂WEStep
 ┃ ┗ 📂manager
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┗ 📂SeatingMap
 ┃ ┃ ┣ 📂map
 ┃ ┃ ┣ 📂restaurant
 ┃ ┃ ┃ ┗ 📂SeatDecorate
 ┃ ┃ ┃ ┃ ┣ 📂FloorSelector
 ┃ ┃ ┃ ┃ ┣ 📂GridCanvas
 ┃ ┃ ┃ ┃ ┗ 📂ItemPalette
 ┃ ┃ ┣ 📂statistics
 ┃ ┃ ┃ ┣ 📂WEColumn
 ┃ ┃ ┃ ┣ 📂WEDonut
 ┃ ┃ ┃ ┣ 📂WELine
 ┃ ┃ ┃ ┗ 📂WEMenu
 ┣ 📂firebase
 ┣ 📂layout
 ┃ ┗ 📂common
 ┃ ┃ ┣ 📂WEBlackOutLayout
 ┃ ┃ ┣ 📂WEFooter
 ┃ ┃ ┣ 📂WEHeader
 ┣ 📂pages
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂LoginPage
 ┃ ┃ ┣ 📂LoginRedirectPage
 ┃ ┃ ┣ 📂PasswordRegistPage
 ┃ ┃ ┗ 📂SignUpPage
 ┃ ┣ 📂customer
 ┃ ┃ ┣ 📂chat
 ┃ ┃ ┣ 📂like
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┣ 📂CreateQRPage
 ┃ ┃ ┃ ┣ 📂GuestEntryPage
 ┃ ┃ ┃ ┗ 📂MainPage
 ┃ ┃ ┣ 📂map
 ┃ ┃ ┣ 📂order
 ┃ ┃ ┃ ┣ 📂MenuSelectPage
 ┃ ┃ ┃ ┣ 📂NotExistOrderPage
 ┃ ┃ ┃ ┣ 📂OrderAllPaymentPage
 ┃ ┃ ┃ ┣ 📂OrderCartPage
 ┃ ┃ ┃ ┣ 📂OrderMainPage
 ┃ ┃ ┃ ┣ 📂OrderPaymentPage
 ┃ ┃ ┃ ┣ 📂OrderSheetPage
 ┃ ┃ ┃ ┗ 📂OrderSuccessPage
 ┃ ┃ ┣ 📂pay
 ┃ ┃ ┣ 📂reservation
 ┃ ┃ ┃ ┣ 📂history
 ┃ ┃ ┃ ┃ ┣ 📂ReservationDetailPage
 ┃ ┃ ┃ ┃ ┗ 📂ReservationListPage
 ┃ ┃ ┃ ┗ 📂process
 ┃ ┃ ┃ ┃ ┣ 📂DepositPaymentPage
 ┃ ┃ ┃ ┃ ┣ 📂FingerprintAuthPage
 ┃ ┃ ┃ ┃ ┣ 📂PasswordAuthPage
 ┃ ┃ ┃ ┃ ┣ 📂RestaurantDetailPage
 ┃ ┃ ┃ ┃ ┣ 📂SeatSelectPage
 ┃ ┃ ┃ ┃ ┣ 📂SuccessPage
 ┃ ┃ ┃ ┃ ┗ 📂TimeSelectPage
 ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┣ 📂CardManagePage
 ┃ ┃ ┃ ┣ 📂CardRegistPage
 ┃ ┃ ┃ ┣ 📂MyInfoPage
 ┃ ┃ ┃ ┣ 📂MyZzimPage
 ┃ ┃ ┃ ┗ 📂NicknameEditPage
 ┃ ┗ 📂manager
 ┃ ┃ ┣ 📂alarm
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┣ 📂menu
 ┃ ┃ ┃ ┣ 📂MemuRegistPage
 ┃ ┃ ┃ ┣ 📂MenuCategoryPage
 ┃ ┃ ┃ ┣ 📂MenuEditPage
 ┃ ┃ ┃ ┗ 📂MenuViewPage
 ┃ ┃ ┣ 📂reservation
 ┃ ┃ ┃ ┣ 📂AdminDetailPage
 ┃ ┃ ┃ ┣ 📂AdminPage
 ┃ ┃ ┃ ┣ 📂ManagerReservationDetailPage
 ┃ ┃ ┣ 📂restaurant
 ┃ ┃ ┃ ┣ 📂ManagerRegistPage
 ┃ ┃ ┃ ┣ 📂RestaurantManagePage
 ┃ ┃ ┃ ┣ 📂SeatDecoratePage
 ┃ ┃ ┣ 📂statistics
 ┃ ┃ ┃ ┣ 📂PeakTimePage
 ┃ ┃ ┃ ┣ 📂SalesPage
 ┃ ┃ ┃ ┣ 📂StatisticsPage
 ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┣ 📂MyInfoPage
 ┃ ┃ ┃ ┣ 📂NicknameEditPage
 ┣ 📂route
 ┃ ┗ 📜routes.js
 ┣ 📂stores
 ┃ ┣ 📂common
 ┃ ┣ 📂customer
 ┃ ┣ 📂manager
 ┃ ┗ 📂map
 ┣ 📂style
 ┃ ┗ 📂common
 ┣ 📂utils
 ┃ ┣ 📂manager
 ```

</div>
</details>

<details>
<summary>Back-end</summary>
<div markdown="1">


```
📦wannaeat
 ┣ 📂domain
 ┃ ┣ 📂alarm
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┣ 📂enums
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📂request
 ┃ ┃ ┃ ┗ 📂response
 ┃ ┃ ┣ 📂exception
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┗ 📂service
 ┃ ┣ 📂cart
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┣ 📂domain
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📂request
 ┃ ┃ ┃ ┗ 📂response
 ┃ ┃ ┣ 📂exception
 ┃ ┃ ┃ ┣ 📂error
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┗ 📂service
 ┃ ┣ 📂chatmessage
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┣ 📂domain
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📂request
 ┃ ┃ ┃ ┗ 📂response
 ┃ ┃ ┣ 📂exception
 ┃ ┃ ┃ ┣ 📂error
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┗ 📂service
 ┃ ┣ 📂menu
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┣ 📂domain
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📂request
 ┃ ┃ ┃ ┗ 📂response
 ┃ ┃ ┣ 📂exception
 ┃ ┃ ┃ ┣ 📂error
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┗ 📂service
 ┃ ┣ 📂order
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┣ 📂domain
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📂request
 ┃ ┃ ┃ ┗ 📂response
 ┃ ┃ ┣ 📂exception
 ┃ ┃ ┃ ┣ 📂error
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┗ 📂service
 ┃ ┣ 📂payment
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📂request
 ┃ ┃ ┃ ┗ 📂response
 ┃ ┃ ┣ 📂exception
 ┃ ┃ ┃ ┣ 📂error
 ┃ ┃ ┗ 📂service
 ┃ ┣ 📂reservation
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┣ 📂domain
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📂request
 ┃ ┃ ┃ ┗ 📂response
 ┃ ┃ ┣ 📂exception
 ┃ ┃ ┃ ┣ 📂error
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┗ 📂service
 ┃ ┣ 📂restaurant
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┣ 📂domain
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📂request
 ┃ ┃ ┃ ┗ 📂response
 ┃ ┃ ┣ 📂exception
 ┃ ┃ ┃ ┣ 📂error
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┗ 📂service
 ┃ ┣ 📂restaurantlike
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┣ 📂domain
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┗ 📂response
 ┃ ┃ ┣ 📂exception
 ┃ ┃ ┃ ┣ 📂error
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┗ 📂service
 ┃ ┣ 📂socket
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┗ 📂enums
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┗ 📂response
 ┃ ┃ ┣ 📂exception
 ┃ ┃ ┗ 📂service
 ┃ ┣ 📂statistic
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┗ 📂response
 ┃ ┃ ┗ 📂service
 ┃ ┗ 📂user
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┣ 📂enums
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📂request
 ┃ ┃ ┃ ┗ 📂response
 ┃ ┃ ┣ 📂exception
 ┃ ┃ ┃ ┣ 📂error
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┗ 📂service
 ┣ 📂global
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂jwt
 ┃ ┃ ┃ ┣ 📂filter
 ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┗ 📂util
 ┃ ┃ ┗ 📂oauth2
 ┃ ┃ ┃ ┣ 📂handler
 ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┣ 📂userinfo
 ┃ ┣ 📂config
 ┃ ┣ 📂exception
 ┃ ┃ ┣ 📂error
 ┃ ┣ 📂fcm
 ┃ ┃ ┗ 📂exception
 ┃ ┃ ┃ ┣ 📂error
 ┃ ┣ 📂redis
 ┃ ┃ ┗ 📂service
 ┃ ┣ 📂response
 ┃ ┗ 📂util
 ┗ 📜WannaeatBeApplication.java
 ```
</div>
</details>

<br>

<a id="item-six"></a>

