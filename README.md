# Car Management API

## Membuat sebuah REST API yang dapat digunakan untuk melakukan manajemen data mobil dengan fitur authentication. Kriteria sebagai berikut:
1. Membuat database dengan menggunakan SQL hingga melakukan CRUD data
2. Mampu menerapkan Service Repository Pattern di dalam sebuah Project
3. Mampu membuat asynchronous function dan menjalankannya
4. Mampu menerapkan Token Based Authentication sebagai metode autentikasi di dalam REST API
5. Mampu membuat Open API Documentation dari REST API yang akan dibuat
6. Menggunakan TypeScript sebagai bahasa pemrograman

## Done
- [ ] Membuat database dengan menggunakan SQL hingga melakukan CRUD data
- [ ] Mampu menerapkan Service Repository Pattern di dalam sebuah Project
- [ ] Mampu membuat asynchronous function dan menjalankannya
- [ ] Mampu menerapkan Token Based Authentication sebagai metode autentikasi di dalam REST API
- [ ] Mampu membuat Open API Documentation dari REST API yang akan dibuat
- [X] Menggunakan TypeScript sebagai bahasa pemrograman

## Entity Relationship Diagram
![ERD](https://i.ibb.co/2ygvZYw/car-management-dashboard.png)

## Endpoint
### Backend REST API
| No | URI                                 | Method    | Description                              |
| -- | ----------------------------------- | --------- | ---------------------------------------- |
| 1  | /api/v1/cars                        | POST      | Adding Cars                              |
| 2  | /api/v1/cars                        | GET       | Getting Cars                             |
| 3  | /api/v1/cars/:id                    | GET       | Getting Specified Cars                   |
| 4  | /api/v1/cars/:id                    | PATCH     | Update Cars                              |
| 5  | /api/v1/cars/:id                    | DELETE    | Delete car                               |

## Postman Test
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/30664113-1cfa44be-eb6e-43ce-8ee5-8a5e53acec9d?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D30664113-1cfa44be-eb6e-43ce-8ee5-8a5e53acec9d%26entityType%3Dcollection%26workspaceId%3D4263bd11-041f-40d1-819e-c671549b1ca7)
