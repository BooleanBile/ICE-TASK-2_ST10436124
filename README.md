# SecureAPI - Books API

## Routes tested in Postman

- GET http://localhost:4000
- GET http://localhost:4000/health
- GET http://localhost:4000/api/books
- GET http://localhost:4000/api/books/b1
- POST http://localhost:4000/api/books

## Sample POST request bodies used to add new books

```json
{ "title": "1984", "author": "George Orwell", "genre": "Dystopian", "condition": "Used", "description": "A chilling vision of a totalitarian surveillance state." }
```
```json
{ "title": "Dune", "author": "Frank Herbert", "genre": "Sci-Fi", "condition": "New", "description": "A sweeping saga of politics, religion, and desert survival." }
```
```json
{ "title": "Sapiens", "author": "Yuval Noah Harari", "genre": "Non-Fiction", "condition": "Like New", "description": "A brief history of humankind from the Stone Age to today." }
```
```json
{ "title": "The Hunger Games", "author": "Suzanne Collins", "genre": "Dystopian", "condition": "New", "description": "A teenager fights for survival in a televised battle to the death." }
```
```json
{ "title": "Atomic Habits", "author": "James Clear", "genre": "Self-Help", "condition": "Used", "description": "A practical guide to building good habits and breaking bad ones." }
```
