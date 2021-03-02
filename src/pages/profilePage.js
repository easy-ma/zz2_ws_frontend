import { useEffect } from "react";
import Requester from "../Requester.js";

const ProfilePage = () => {
  useEffect(() => {
    Requester.get("/ads/get", { page: 2 }, true).then(console.log);
  });
  return <div>hello</div>;
};

export default ProfilePage;
