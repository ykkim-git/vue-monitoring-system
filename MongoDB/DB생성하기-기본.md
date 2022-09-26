## 데이터베이스 생성하기
*  mongo 실행
```
> use sensor
switched to db sensor

> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
```

* 데이터베이스에 값 추가
```
> db.sensor.insert({ "jay": 1 })
WriteResult({ "nInserted": 1 })

> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
sensor  0.000GB  <- DB 추가됨
```