import { useEffect } from "react";
import Requester from "../Requester.js";

const ProfilePage = () => {
  useEffect(() => {
    Requester.get("/ads/get-all", { page: 2 }).then(console.log);
  });
  return <div>hello</div>;
};

export default ProfilePage;
