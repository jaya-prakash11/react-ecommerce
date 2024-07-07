import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
function ProfilePage() {
  const [user, setUser] = useState();
  const axiosprivate = useAxiosPrivate();

  useEffect(() => {
    console.log("UYstart");
    // let isMounted = true;
    const controller = new AbortController();
    const getuser = async () => {
      console.log("inside");
      try {
        let response = await axiosprivate.get("/profile");
        console.log("UYuserd", response.data);
        // isMounted && setUser(response);
        setUser(response);
      } catch (err) {
        console.log("UYerr", err);
      }
      console.log("UYDone");
    };

    getuser();

    // return () => {
    //   isMounted = false;
    //   controller.abort();
    // };
  }, []);

  console.log("UsersDetail", user);
  return <div>profile pages</div>;
}

export default ProfilePage;
