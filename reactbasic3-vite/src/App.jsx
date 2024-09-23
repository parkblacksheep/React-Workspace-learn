import "./App.css";
import Child from "./Child";
import Child2 from "./Child2";
import Child3 from "./Child3";

function App() {
  return (
    <>
      <h2>App.jsx입니다.</h2>
      <br />
      <Child p1="안녕 이제 3주 남았네요. 화이팅합시다!" />
      <br />
      <Child2 p1="hi kosta" p2={100} p3="지금 리액트를 공부하고 있습니다." />
      <br />
      <Child3
        p1="시간이 4달 한주가 금방 가네요 "
        p2={200}
        p3="하루하루 시간 금"
        person={{ name: "jongwon", age: 30 }}
      />
    </>
  );
}

export default App;
