import { use, useEffect, useState } from "react";
import { profileService } from "../service/profileService";

const useProfile = () => {
  const [profile, setProfile] = useState(null);

  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await profileService.find();
      setProfile(res);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfile()
  }, [])
  return { 
    profile, 
    success, 
    setSuccess, 
    loading, 
    error 
  };
};

export default useProfile;
