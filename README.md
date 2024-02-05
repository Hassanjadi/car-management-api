# Car Management API

## Membuat sebuah REST API yang dapat digunakan untuk melakukan manajemen data mobil dengan fitur authentication. Kriteria sebagai berikut:

1. Membuat database dengan menggunakan SQL hingga melakukan CRUD data
2. Mampu menerapkan Service Repository Pattern di dalam sebuah Project
3. Mampu membuat asynchronous function dan menjalankannya
4. Mampu menerapkan Token Based Authentication sebagai metode autentikasi di dalam REST API
5. Mampu membuat Open API Documentation dari REST API yang akan dibuat
6. Menggunakan TypeScript sebagai bahasa pemrograman

## Done

- [x] Membuat database dengan menggunakan SQL hingga melakukan CRUD data
- [x] Mampu menerapkan Service Repository Pattern di dalam sebuah Project
- [x] Mampu membuat asynchronous function dan menjalankannya
- [x] Mampu menerapkan Token Based Authentication sebagai metode autentikasi di dalam REST API
- [x] Mampu membuat Open API Documentation dari REST API yang akan dibuat
- [x] Menggunakan TypeScript sebagai bahasa pemrograman

## Entity Relationship Diagram

![ERD](https://i.ibb.co/FKX3S0T/car-management-dashboard.png)

## Project Installation Guide

This project is a sample Node.js application with Express.js using Docker Compose for container management and Knex.js as the ORM for the database. This is a step-by-step guide to install and run this project locally.

## Prerequisites

Make sure you have installed the following software before getting started:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)
- Node.js and npm: [Install Node.js and npm](https://nodejs.org/)
- Git: [Install Git](https://git-scm.com/)

## Installation Steps

1. **Clone the Repository**

   ```
   git clone https://github.com/hassanjadi/car-management-api.git
   ```

2. **Navigate to the Project Directory**

   ```
   cd project-repo
   ```

3. **Install Dependencies**

   ```
   npm install
   ```

4. **Build and Run Docker Containers**

   ```
   docker-compose up --build
   ```

5. **Run Database Migrations & Seeds**

   ```
   npx knex migrate:latest
   ```

   ```
   npx knex seed:run
   ```

The project is now running and can be accessed at `http://localhost:3000`.

## Endpoint

### Endpoint Authentication

| No  | URI              | Method | Description     |
| --- | ---------------- | ------ | --------------- |
| 1   | /api/v1/register | POST   | Register Member |
| 2   | /api/v1/login    | POST   | Login           |

### Endpoint Users

| No  | URI              | Method | Description       |
| --- | ---------------- | ------ | ----------------- |
| 1   | /api/v1/user     | GET    | Getting All Users |
| 2   | /api/v1/admin    | POST   | Adding Admin      |
| 3   | /api/v1/who-am-i | GET    | Current User      |

### Endpoint Cars

| No  | URI              | Method | Description            |
| --- | ---------------- | ------ | ---------------------- |
| 1   | /api/v1/cars     | POST   | Adding Cars            |
| 2   | /api/v1/cars     | GET    | Getting All Cars       |
| 3   | /api/v1/cars/:id | GET    | Getting Specified Cars |
| 4   | /api/v1/cars/:id | PUT    | Update Cars            |
| 5   | /api/v1/cars/:id | DELETE | Delete car             |

## Postman Test

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/30664113-1cfa44be-eb6e-43ce-8ee5-8a5e53acec9d?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D30664113-1cfa44be-eb6e-43ce-8ee5-8a5e53acec9d%26entityType%3Dcollection%26workspaceId%3D4263bd11-041f-40d1-819e-c671549b1ca7)
