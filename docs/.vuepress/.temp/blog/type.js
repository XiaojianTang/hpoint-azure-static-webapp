export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-57bfe2f2","v-43ad7a67","v-182075d2","v-748eee4a","v-4246857a","v-7499de76","v-4429a9c9","v-79ec4e93","v-56380dd8","v-543c25ea","v-69f6d348","v-6dbb0616","v-49c7506a","v-a03c8234","v-184f4da6"]},"/zh/":{"path":"/zh/article/","keys":["v-858cfdd6"]}},"star":{"/":{"path":"/star/","keys":[]},"/zh/":{"path":"/zh/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-57bfe2f2","v-43ad7a67","v-182075d2","v-748eee4a","v-4246857a","v-7499de76","v-4429a9c9","v-79ec4e93","v-56380dd8","v-543c25ea","v-69f6d348","v-6dbb0616","v-49c7506a","v-a03c8234"]},"/zh/":{"path":"/zh/timeline/","keys":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

