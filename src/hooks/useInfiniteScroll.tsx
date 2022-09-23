import { MutableRefObject, useRef, useMemo, useState, useEffect } from "react";
import { IPostListProps } from "components/Main/PostList";
import { CATEGORY_ALL } from "utils/variables";

const ITEMS_PER_PAGE = 10;

// IntersectionObserver는 브라우저 API이기 때문에 클라이언트 렌더링 시에 사용할 수 있는 API.
// 로컬 서버를 실행하면 클라이언트 사이드 렌더링을 하기 때문에 IntersectionObserver나 window 객체와 같이 브라우저에서 제공하는 요소를 사용 가능.

// 하지만 Gatsby는 빌드 시에는 Node.js 환경에서 진행되기 때문에 브라우저 API를 사용 불가.

// useEffect 내부에 있는 코드는 클라이언트 렌더링 시에 실행되기 때문에 빌드 시에는 실행되지 않음.

const useInfiniteScroll = ({ posts, selectedCategory }: IPostListProps) => {
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const observer: MutableRefObject<IntersectionObserver | null> =
    useRef<IntersectionObserver>(null);
  const [page, setPage] = useState(1);

  const postList = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }) => selectedCategory === CATEGORY_ALL || categories.includes(selectedCategory)
      ),
    [selectedCategory]
  );

  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) {
        return;
      }

      setPage((prev) => prev + 1);
      observer.disconnect();
      // observer.unobserve(entries[0].target);
    });
  }, []);

  useEffect(() => setPage(1), [selectedCategory]);

  useEffect(() => {
    if (
      ITEMS_PER_PAGE * page >= postList.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0 ||
      observer.current === null
    ) {
      return;
    }

    observer.current.observe(Array.from(containerRef.current.children).at(-1)!);
  }, [page, selectedCategory]);

  return { containerRef, postList: postList.slice(0, page * ITEMS_PER_PAGE) };
};

export default useInfiniteScroll;
