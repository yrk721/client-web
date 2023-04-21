export type UserUIProps = {
  isMyPage: boolean
  isLiked: boolean
  toggleIsLiked: () => void
  showUserPosts: boolean
  showUserProductPosts: boolean
  showLikedPosts: boolean
  onClickTab: (id: number) => void
}
