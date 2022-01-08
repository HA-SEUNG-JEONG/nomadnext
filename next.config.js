/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false, //permanent의 true/false에 따라 브라우저나 검색 엔진이 이 정보를 기억하는지의 여부가 결정됨
      },
    ];
  },
  //rewrites는 유저를 redirect시키지만 url은 변하지 않음
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
