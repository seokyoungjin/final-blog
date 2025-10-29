import { redirect } from "react-router";
import { axiosInstance } from "../../api/axios";
import { useAuthStore } from "../../store/authStore";

export const fetchuserData = async () => {
  try {
    const user = useAuthStore.getState().user;
    const accessToken = sessionStorage.getItem("access_token");
    if (!user && accessToken) {
      const { data } = await axiosInstance.get("/auth/me");
      const setUserData = useAuthStore.getState().setUserData;
      setUserData(data);
    }
  } catch (e) {
    console.error(e);
  }
};

//  인증된 사용자만 접근 가능한 코드를 만듬
//  인증되어있는지의 여부는 sessionStorage 저장된 토큰값을 가져오면 알수있음
//  일단 sessionStorage에 토큰을 가져오고
//  토큰이 없다면 접근하면 안되기 때문에
//  다시 return redirect "auth/login " 페이지로 돌려보냄
export const requireAuth = () => {
  const token = sessionStorage.getItem("access_token");
  if (!token) {
    return redirect("/auth/login");
  }
};

// 만약에 로그인이 되어있으면 redirect를 해라
// 로그인 안한 사람만 접근할수 있는 loader
// 토큰이 있으니깐 메인페이지로 이동하게 함 "/"
export const redirectIfAuth = () => {
  const token = sessionStorage.getItem("access_token");
  if (token) {
    return redirect("/");
  }
};
