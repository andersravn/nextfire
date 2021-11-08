import Image from "next/image";

export default function UserProfile({ user }) {
  return (
    <div className="box-center">
      <div>
        <Image
          src={user.photoURL}
          width="150"
          height="150"
          alt="Profile"
          className="card-img-center"
        />
      </div>
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName || "Anonymous User"}</h1>
    </div>
  );
}
