// function Child2({ p1, p2, p3 }) {
//   return (
//     <>
//       <h2>Child2.jsx</h2>
//       <h3>{p1}</h3>
//       <h3>{p2}</h3>
//       <h3>{p3}</h3>
//     </>
//   );
// }

function Child2(props) {
  const p1 = props.p1;
  const p2 = props.p2;
  const p3 = props.p3;

  return (
    <>
      <h2>Child2.jsx</h2>
      <h3>{p1}</h3>
      <h3>{p2}</h3>
      <h3>{p3}</h3>
    </>
  );
}

export default Child2;
