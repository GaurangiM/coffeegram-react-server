# API for Coffeegram app 
> A RESTful NodeJS API including authentication, authorization and endpoints to fetch cafe data.
> This API gives information of cafes like description, pictures, rating and reviews.
> Currently, this API holds details of cafes in 5 cities(Amsterdam, Utrecht, Rotterdam, Den Haag & Maastricht)

## Installation 

Clone this repository and run the below command to install dependencies:
```
npm install
```
Add `.env` file to root folder and save your DB url as `DATABASE_URL: your own url`
Edit the `config/constants.js` file to change the port, if you want.

## Usage

```
# Run in development mode
npm run dev

# Run in production mode
npm start
```

## Database Diagram
[DB Diagram](https://dbdiagram.io/d/60c314c00c1ff875fcd464ca)

## Frontend Repo
- You can view the frontend repo to see how API is integrated into front-end code and the endpoints used to fetch data.
- [Frontend Repo](https://github.com/GaurangiM/coffeegram-react-frontend)

## Future Scope
- Extend database to contain more cities in Netherlands.
