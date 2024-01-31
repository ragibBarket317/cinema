function getImgUrl(name) {
  return new URL(`../assets/assets/movie-covers/${name}`, import.meta.url).href;
}

export { getImgUrl };
