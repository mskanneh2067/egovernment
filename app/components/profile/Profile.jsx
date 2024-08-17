import Image from "next/image";

const Profile = (props) => {
  return (
    <div className="main-profile">
      <Image
        src={props.profilePhoto}
        width={100}
        height={100}
        priority
        alt=""
        style={{ width: "auto", height: "auto" }}
        className="w-full min-h-[100px] max-h-[100px] object-contain"
      />
    </div>
  );
};

export default Profile;
