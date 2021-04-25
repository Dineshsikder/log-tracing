import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Icon from "./Icon";

const IconDetails = (props: any) => {
  const iconName = props.icon;
  console.log("iconName>>>>>>>>>>>>>>>>>",props.icon)
  let UserSpecifiedIcon = null;
  const [loading, setLoading] = useState(false);
  const ImportedIconRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    Icon(ImportedIconRef, iconName, setLoading);
  }, [iconName]);

  if (!loading && ImportedIconRef.current) {
    UserSpecifiedIcon = ImportedIconRef.current.default;
  }

  return (
    <>
      {UserSpecifiedIcon ? (
        <div>
            {/* "primary", "secondary", "action",  */}
          {["disabled"].map(
            (color, index) => (
              <UserSpecifiedIcon color={color} key={index} />
            )
          )}
        </div>
      ) : (
        <h4>Icon not found. Check icon name casing.</h4>
      )}
    </>
  );
};

export default IconDetails;
