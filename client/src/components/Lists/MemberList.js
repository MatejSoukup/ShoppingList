import { Member } from "../Items/Member";

export function MemberList({ list }) {
  

  console.log(list);
  return list ? (
    <div>
      {list.map((item) => (
        <Member item={item}/>
      ))}
    </div>
  ) : (
    <p>No items in this list.</p>
  );
}
