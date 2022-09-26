## MongoDB
mongo db는 NoSQL(Not Only SQL) 데이터 베이스다.

MongoDB는 Json 매개변수를 받아 Binary JSON 형태 (Bson)로 저장된다.
CRUD를 모두 JSON형태로 할 수 있다. 

Node.js에서 몽고디비에 접근하는 데 사용하는 모듈은 Mongoose & MongoDB 드라이버가 있다.

설치방법은 아래 Mongodb.com 참조
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#:~:text=for%20more%20information.-,Run%20MongoDB%20Community%20Edition,system%20ulimit%20values%20automatically%20(see%20ulimit%20settings%20for%20more%20information).,-To%20run%20MongoDB

### 설치 요약

* brew tap mongodb/brew
* brew install mongodb-community

### Mongodb 실행 및 정지하기
서버 시작
* brew services start mongodb-community
(이미 시작되어있다면 restart)

서버 종료
* brew services stop mongodb-community

구동확인하기
* http://localhost:27017 
it loks like you are trying to acess ~~~  가 나온다면 정상

터미널에 mongo 입력했을 때 commnad not found: mongo가 나온다면
* brew install mongodb-community-shell

/opt/homebrew/Cellar/mongodb-community/6.0.1
