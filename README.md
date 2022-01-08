# NextJS Intro

children이라는 props는 하나의 컴포넌트를 또 다른 컴포넌트 안에 넣을 때 쓸 수 있다.

create-react-app을 사용했다면 react을 import 해줘야 하지만, next에서는 그럴 필요 없음

```js

export default function Home({ results })

export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    },
  };
}
```

Homepage가 results를 props로 받으면 getServerSideProps는 results를 return한다.

getServerSideProps function에서는 '`/api/movies`'가 front쪽에서만 돌아가기 때문에 오류가 난다.

따라서 로컬호스트 주소를 앞에 추가해준다.

`pages/movies/[id].js`처럼 Next.js에게 id가 변수를 포함하는 Dynamic URL이다라고 알려주는 유일한 방법은 id에 []를 추가한다.

```tsx
  const router = useRouter();
  const onClick = (id) => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div onClick={() => onClick(movie.id)} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
```

/api/movies/:id로 가면 해당 영화에 대한 정보를 볼 수 있다.

router나 Link 이외에도 URL에 정보를 숨겨 보낼 수 있다.

`push`를 할 때 URL을 `string`을 보낼 수 있지만 `object`로도 보낼 수 있다.

`as`라는 parameter를 사용하면 보여줄 브라우저의 URL을 마스킹한다.
