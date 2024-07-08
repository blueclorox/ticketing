### [ ERD ](https://drawsql.app/teams/practice-44/diagrams/ticketing)

현재 동작중인 API

회원가입(Post localhost:3306/user/signUp)

```
{
  "email":"이메일@메일.com",
  "password":"비밀번호",
  "nickName":"사용자 별명",
  "introduce":"자기 소개"
}
```

로그인(Post localhost:3306/user/signIn)

````
{
  "email":"이메일@메일.com",
  "password":"비밀번호"
}
```

내 정보 조회(Get localhost:3306/user/profile Bearer 토큰 필요)


## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
````
