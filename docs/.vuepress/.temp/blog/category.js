export const categoryMap = {"category":{"/":{"path":"/category/","map":{"H-POINT-EBOOK":{"path":"/category/h-point-ebook/","keys":["v-748eee4a","v-4246857a","v-7499de76","v-4429a9c9","v-79ec4e93","v-56380dd8","v-543c25ea","v-69f6d348","v-6dbb0616","v-49c7506a"]}}},"/zh/":{"path":"/zh/category/","map":{}}},"tag":{"/":{"path":"/tag/","map":{}},"/zh/":{"path":"/zh/tag/","map":{}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


