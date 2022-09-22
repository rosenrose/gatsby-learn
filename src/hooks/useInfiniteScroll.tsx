import { MutableRefObject, useRef, useMemo, useState, useEffect } from "react";
import { IPostListProps } from "components/Main/PostList";
import { CATEGORY_ALL } from "pages/index";

const ITEMS_PER_PAGE = 10;

const useInfiniteScroll = ({ posts, selectedCategory }: IPostListProps) => {
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
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

  const observer = new IntersectionObserver((entries, observer) => {
    if (!entries[0].isIntersecting) {
      return;
    }

    setPage((prev) => prev + 1);
    observer.disconnect();
  });

  useEffect(() => setPage(1), [selectedCategory]);
  useEffect(() => {
    if (
      ITEMS_PER_PAGE * page >= postList.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    ) {
      return;
    }

    observer.observe(Array.from(containerRef.current.children).at(-1)!);
  }, [page, selectedCategory]);

  return { containerRef, postList: postList.slice(0, page * ITEMS_PER_PAGE) };
};

export default useInfiniteScroll;
