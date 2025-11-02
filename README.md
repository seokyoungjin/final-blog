<img width="1095" height="808" alt="image" src="https://github.com/user-attachments/assets/5953164c-ecb2-43d6-9091-76dd10e608d9" />

> React 구조와 컴포넌트 단위 개발 방식을 학습하기 위해 제작한 개인 블로그 프로젝트입니다.  
> 따라 치기에 그치지 않고, 코드의 흐름과 설계 의도를 이해하며 문서화하는 것을 목표로 했습니다.
>
## 📌 1. 프로젝트 개요

- **프로젝트명:** Final Blog  
- **기간:** 2025.10 ~ 2025.11  
- **배포 URL:** [https://final-blog-seven.vercel.app](https://final-blog-seven.vercel.app)  
- **기술 스택:**
  - **Frontend:** React, TypeScript, Vite, TailwindCSS
  - **Routing:** React Router
  - **배포:** Vercel  
  - **버전 관리:** Git & GitHub
 
- ## 🎯 2. 구현 목표

- React의 컴포넌트 기반 구조와 props/state 흐름을 실습하며 이해하기.
- 게시글 목록, Pagination, 카테고리 필터 기능을 직접 구현해 데이터 렌더링 원리 학습.
- TypeScript로 타입 안정성을 확보하고 코드 유지보수를 고려한 구조 익히기.
- 단순 구현이 아니라 “왜 이런 구조로 되어 있는가?”를 분석하고 기록으로 남기기.

- ## ⚙️ 3. 핵심 기능 & 구현 과정

### 🧩 게시글 목록 (Post List)
- `useLoaderData`를 통해 게시글 데이터를 로드하고, `PostCard` 컴포넌트로 분리.
- props로 데이터 전달하며 재사용 가능한 컴포넌트 설계.
- 💡 배운 점: 부모-자식 간 데이터 전달 원리와 props 타입 정의의 중요성을 이해.

- 💬 회고

“처음엔 단순히 결과물을 만들고 싶었지만,
이제는 왜 이렇게 동작하는지 이해하고 싶다는 생각이 생겼다.
이 프로젝트는 그 시작점이었다.  ”
