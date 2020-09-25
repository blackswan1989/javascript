## Youtube Challenge | Youtube clone - Wetube

# install

1. npm init으로 package.json 생성
   - npm node index.js로 실행 -> npm start로 script 변경해줌.
2. npm install express로 express 설치
3. babel 설치
   - npm install @babel/node
   - npm install @babel/preset-env
   - ".babelrc" 파일 생성
   - package.json의 "scripts": {
     "start": "babel-node index.js"
     } 위처럼 수정 (node index.js앞에 "babel-"을 붙여준다.)
   - npm install @babel/core
4. nodemon 설치 (저장할때마다 자동으로 서버를 새로고침 해준다. )
   - npm install nodemon -D (-D는 devDependencies를 의미)
   - "scripts": {
     "start": "nodemon --exec babel-node index.js --delay 2"
     }, 위처럼 수정 ("nodeomon --exec"와 "--delay 2"를 끝에 붙여준다.)
5. morgan 설치
   - npm install morgan
   - app.js에 middleware추가해주기(옵션은"dev"로 설정)
6. helmet 설치
   - npm install helmet
   - app.js에 middleware추가해주기
