'use client';

import { useRouter } from "next/navigation";
import Main from "../_component/Main";


export default function Login() {
  const router = useRouter();
  router.replace('i/flow/login');
  return <Main/>
}

// router.push  1개 뒤로
// /login => /i/flow/login

// router.replace  이동후 이전 히스토리 없애줌,
// /login => /i/flow/login