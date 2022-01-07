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
